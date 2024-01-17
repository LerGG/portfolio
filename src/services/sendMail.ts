import {
  SESClient,
  SESClientConfig,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-ses";
import { ContactPostProps } from "../interfaces/interfaces";
import { email } from "../constants";
import { escapeUnsafeChars } from "../utils/escapeUnsafeChars";

/**
 * Sends contact form data via AWS SES
 *
 * @param contact Form data
 */
export const sendMail = async (contact: ContactPostProps): Promise<void> => {
  // Create AWS SES client
  const client = clientSES();
  // Create AWS SES email to be send
  const command = commandSES(contact);
  // Send mail
  await client.send(command);
  console.log("sendMail(): Email send");
};

/**
 * Creates new SES client with AWS config from .env
 *
 * @returns SES client instance
 */
const clientSES = (): SESClient => {
  const config: SESClientConfig = {
    region: process.env.REGION_AWS_SES,
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_AWS,
      secretAccessKey: process.env.SECRET_KEY_AWS,
    },
  };

  return new SESClient(config);
};

/**
 * Creates email parameter object to be send
 *
 * @param contact contact form data
 * @returns command instance
 */
const commandSES = (contact: ContactPostProps): SendEmailCommand => {
  const params: SendEmailCommandInput = {
    Destination: {
      ToAddresses: [email],
    },
    Source: email,
    Message: {
      Subject: {
        Data: `${escapeUnsafeChars(contact.name)} ${escapeUnsafeChars(
          contact.surname
        )} ${escapeUnsafeChars(contact.email)} `,
      },
      Body: {
        Text: {
          Data: escapeUnsafeChars(contact.message),
        },
      },
    },
  };

  return new SendEmailCommand(params);
};
