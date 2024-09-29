import axios from "axios";
import { RecaptchaResponse } from "../interfaces/interfaces";

/**
 * Validates recaptcha token and gets corresponding data
 *
 * @param token generated in frontend
 * @returns siteverify api data from google
 */
export const gRecaptcha = async (token: string) => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const gVerificationEndpnt =
    "https://www.recaptcha.net/recaptcha/api/siteverify";
  const recaptchGoogle = `${gVerificationEndpnt}?secret=${process.env.GOOGLE_RECAPTCHA_PRIVATE_KEY}&response=${token}`;
  const { data } = await axios.post<RecaptchaResponse>(
    recaptchGoogle,
    null,
    config
  );
  return data;
};
