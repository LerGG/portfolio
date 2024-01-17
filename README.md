# Setup

- clone repo
- npm install
- rename .env.template to .env
- fill in .env variables

# E-Mail provider

Contact form data is send via AWS SES email service.
Setup the AWS keys as well as region.
Note that to send emails to unverified accounts, AWS SES sandbox needs to be disabled.
See: https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html

# Google Recaptcha v3

Uses google recaptcha to protect form e-mail endpoint.
Generates gRecaptcha token and sends it to backend.
Token gets validated on backend and checked against bot score.
Score > 0.5 passes.

# Trackboxx

Make a new trackboxx account and add your tracking id in the /document file.

# .env.template

- Rename to .env
- Fill in values
- Add values on server side envs!

# Theming

Uses custom build design system.
To change the theming check the following files:

- theme.ts
- /styles/cssStyles.ts

# Fonts

If you want to add other fonts, check out the /fonts directory.

- Add your woff/woff2 font files to /fonts/assets
- add a handler function that loads your new font in the fonts directory
- Add your newly added font handler in \_app tsx to the Layout component props
