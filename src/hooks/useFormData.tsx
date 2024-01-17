import axios from "axios";
import React from "react";
import { BtnText } from "../types/types";
import { urlParamsToJson } from "../utils/urlParamsToJson";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ContactPostProps } from "../interfaces/interfaces";

export interface ServerMsg {
  message: string;
}

export const useFormData = (
  endpoint: string
): [boolean, (event: React.SyntheticEvent) => Promise<void>, BtnText] => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [btnText, setBtnText] = React.useState<BtnText>("Send Message");

  const handleSubmit = React.useCallback(
    async (event: React.SyntheticEvent<HTMLFormElement>) => {
      setLoading(true);
      setBtnText("Pending...");
      // return if capture not available yet
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      // Prevents page reload
      event.preventDefault();
      const formData = urlParamsToJson<ContactPostProps>(event);

      executeRecaptcha("enquiryFormSubmit").then(async (gReCaptchaToken) => {
        formData["gReCaptchaToken"] = gReCaptchaToken;
        // Gets data from submited value
        try {
          await axios.post(endpoint, formData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          // Success
          setLoading(false);
          setBtnText("Successfully send!");
          // Reset forms
          (event.target as HTMLFormElement).reset();
        } catch (error) {
          setLoading(false);
          console.log(error);
          if (error.response.data.message === "418") {
            setBtnText("Bot detected!");
          } else {
            setBtnText("Error! Send again!");
          }
        }
        // clear button msg after 3 secs
        setTimeout(() => {
          setBtnText("Send Message");
        }, 5000);
      });
    },
    [executeRecaptcha, endpoint]
  );

  return [loading, handleSubmit, btnText];
};
