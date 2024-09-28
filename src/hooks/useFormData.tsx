import axios from "axios";
import React, { useEffect } from "react";

import { urlParamsToJson } from "../utils/urlParamsToJson";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ContactPostProps } from "../interfaces/interfaces";
import { useTranslation } from "react-i18next";

export interface ServerMsg {
  message: string;
}

export const useFormData = (
  endpoint: string
): [boolean, (event: React.SyntheticEvent) => Promise<void>, string] => {
  const { t, i18n } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [btnText, setBtnText] = React.useState<string>(
    t("mailSection.buttonSubmit.sendMessage")
  );

  // Refresh button text on language switch
  useEffect(() => {
    setBtnText(t("mailSection.buttonSubmit.sendMessage"));
  }, [i18n.language, t]);

  const handleSubmit = React.useCallback(
    async (event: React.SyntheticEvent<HTMLFormElement>) => {
      setLoading(true);
      setBtnText(t("mailSection.buttonSubmit.loading"));
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
          setBtnText(t("mailSection.buttonSubmit.success"));
          // Reset forms
          (event.target as HTMLFormElement).reset();
        } catch (error) {
          setLoading(false);
          console.log(error);
          if (error.response.data.message === "418") {
            setBtnText(t("mailSection.buttonSubmit.botDetected"));
          } else {
            setBtnText(t("mailSection.buttonSubmit.error"));
          }
        }
        // clear button msg after 3 secs
        setTimeout(() => {
          setBtnText(t("mailSection.buttonSubmit.sendMessage"));
        }, 3000);
      });
    },
    [t, executeRecaptcha, endpoint]
  );

  return [loading, handleSubmit, btnText];
};
