import axios from "axios";

/**
 * Validates recaptcha token and gets corresponding data
 *
 * @param token generated in frontend
 * @returns siteverify api data from google
 */
export const gRecaptcha = async (token: string): Promise<any> => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const gVerificationEndpnt = "https://www.google.com/recaptcha/api/siteverify";
  const recaptchGoogle = `${gVerificationEndpnt}?secret=${process.env.GOOGLE_RECAPTCHA_PRIVATE_KEY}&response=${token}`;
  const { data } = await axios.post(recaptchGoogle, null, config);
  return data;
};
