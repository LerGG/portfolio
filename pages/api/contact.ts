import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ContactPostProps } from "../../src/interfaces/interfaces";

const gVerificationEndpnt = "https://www.google.com/recaptcha/api/siteverify";

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  //res.status(418).json({ message: "418" });
  //res.end();

  if (req.method === "POST") {
    // Google recaptcha parameters
    const reqBody: ContactPostProps = req.body;
    const recaptchGoogle = `${gVerificationEndpnt}?secret=${process.env.GOOGLE_RECAPTCHA_PRIVATE_KEY}&response=${reqBody.gReCaptchaToken}`;

    try {
      const { data } = await axios.post(recaptchGoogle, null, config);
      console.log(data.score);
      // Score value 0-1 as bot probability
      if (data?.score > 0.5) {
        // ADD EMAIL SERVICE HERE
        res.status(200).json({ message: "200" });
        res.end();
      } else {
        res.status(418).json({ message: "418" });
        res.end();
      }
    } catch (error) {
      res.status(500).json({ message: "500" });
      res.end();
    }
  } else {
    res.status(405);
    res.end();
  }

  // send email
  /**const result = await mailProviderPost(req);
    result === "200"
      ? res.status(200).json({ message: "200" })
      : res.status(500).json({ message: "500" });*/
};

export default contactHandler;

const mailProviderPost = async (req: NextApiRequest) => {
  try {
    await axios.post(process.env.ENDPOINT_GETFORM_IO, req.body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return "200";
  } catch (error) {
    return "500";
  }
};
