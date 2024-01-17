import { NextApiRequest, NextApiResponse } from "next";
import { ContactPostProps } from "../../src/interfaces/interfaces";
import { gRecaptcha } from "../../src/services/gRecaptcha";
import { sendMail } from "../../src/services/sendMail";

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // Google recaptcha parameters
    const reqBody: ContactPostProps = req.body;

    try {
      const data = await gRecaptcha(reqBody.gReCaptchaToken);
      // Score value 0-1 as bot probability
      if (data?.score > 0.5) {
        await sendMail(reqBody);
        res.status(200).json({ message: "200" });
        res.end();
      } else {
        console.log("Mail not send, bot activity detected");
        res.status(418).json({ message: "418" });
        res.end();
      }
    } catch (error) {
      console.log(error);
      console.log("Something went wrong");
      res.status(500).json({ message: "500" });
      res.end();
    }
  } else {
    // default error
    console.log("api/contact not called with POST");
    res.status(405);
    res.end();
  }
};

export default contactHandler;
