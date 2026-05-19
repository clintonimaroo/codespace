import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AdminWelcomeEmailProps {
  email?: string | null;
  name?: string | null;
  resetUrl: string;
}

const appUrl = "https://www.codespaces.org";
const accountUrl = `${appUrl}/admin/account`;
const logoUrl =
  "https://cdn.sender.net/email_images/233413/images/all/group_48.png";
const fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const purple = "#5b5ad1";

export const AdminWelcomeEmail: React.FC<AdminWelcomeEmailProps> = ({
  email,
  name,
  resetUrl,
}) => {
  const greetingName = getFirstName(name);
  const username = email?.trim();

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>
          {`
            :root {
              color-scheme: light dark;
              supported-color-schemes: light dark;
            }

            @media screen and (max-width: 480px) {
              .email-container {
                padding: 20px !important;
                width: 100% !important;
              }

              .email-button {
                min-width: 180px !important;
              }
            }

            @media (prefers-color-scheme: dark) {
              .email-body {
                background-color: transparent !important;
              }

              .email-container {
                background-color: transparent !important;
              }

              .email-text {
                color: #f1f1f1 !important;
              }

              .email-muted {
                color: #a9a9a9 !important;
              }

              .email-link {
                color: #5b5ad1 !important;
              }

              .email-button {
                background-color: #5b5ad1 !important;
                color: #ffffff !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>You have a new Admin account for codespaces.org.</Preview>
      <Body
        className="email-body"
        style={{
          backgroundColor: "transparent",
          margin: "0",
          padding: "0",
        }}
      >
        <Container
          className="email-container"
          style={{
            backgroundColor: "transparent",
            margin: "0 auto",
            maxWidth: "640px",
            padding: "20px 40px 36px",
            width: "100%",
          }}
        >
          <Section style={{ padding: "10px 0 20px" }}>
            <Link href={appUrl} target="_blank">
              <Img
                alt="Code Space"
                src={logoUrl}
                style={{
                  display: "block",
                  height: "auto",
                  maxWidth: "172px",
                  width: "172px",
                }}
              />
            </Link>
          </Section>

          <Section
            className="email-text"
            style={{
              color: "#222222",
              fontFamily,
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            <Text style={paragraphStyle}>Hello {greetingName},</Text>

            <Text style={paragraphStyle}>
              You have a new Admin account with the{" "}
              <Link className="email-link" href={appUrl} style={linkStyle}>
                codespaces.org
              </Link>{" "}
              organization.
            </Text>

            <Text style={paragraphStyle}>
              Welcome to Code Space. An admin has created an account for you so
              you can access the admin area and help manage the community
              website.
            </Text>

            {username ? (
              <Text style={paragraphStyle}>
                <strong>Your username:</strong>{" "}
                <Link
                  className="email-link"
                  href={`mailto:${username}`}
                  style={linkStyle}
                >
                  {username}
                </Link>
              </Text>
            ) : null}

            <Text style={paragraphStyle}>
              Click the button below to set your password and sign in. For your
              security, this reset password link expires after 48 hours.
            </Text>

            <Section style={{ padding: "8px 0 18px", textAlign: "center" }}>
              <Button
                className="email-button"
                href={resetUrl}
                style={{
                  backgroundColor: purple,
                  borderRadius: "6px",
                  color: "#ffffff",
                  display: "inline-block",
                  fontFamily,
                  fontSize: "14px",
                  fontWeight: "bold",
                  lineHeight: "1.5",
                  minWidth: "210px",
                  padding: "13px 24px",
                  textAlign: "center" as const,
                  textDecoration: "none",
                }}
              >
                Set password
              </Button>
            </Section>

            <Text style={paragraphStyle}>
              If the button does not work, copy and paste this link into your
              browser:
              <br />
              <Link className="email-link" href={resetUrl} style={linkStyle}>
                {resetUrl}
              </Link>
            </Text>

            <Text style={paragraphStyle}>
              Warm regards,
              <br />
              Developer Relations team
            </Text>
          </Section>

          <Hr
            style={{
              borderColor: "#dedede",
              borderStyle: "solid",
              borderWidth: "1px 0 0",
              margin: "25px 0 10px",
            }}
          />

          <Text
            className="email-muted"
            style={{
              color: "#bfbfbf",
              fontFamily,
              fontSize: "12px",
              lineHeight: "1.5",
              margin: "0 0 20px",
            }}
          >
            To make sure you keep getting these emails, please add{" "}
            <Link
              className="email-link"
              href="mailto:hello@codespaces.org"
              style={linkStyle}
            >
              hello@codespaces.org
            </Link>{" "}
            to your address book or allow list. Want to control the kind of
            emails you receive from Code Space?{" "}
            <Link
              className="email-link"
              href={accountUrl}
              style={{ ...linkStyle, textDecoration: "none" }}
            >
              Update your email preferences
            </Link>
            . Want out of the loop? <u>Unsubscribe</u>.
          </Text>

          <Text
            className="email-muted"
            style={{
              color: "#bfbfbf",
              fontFamily,
              fontSize: "12px",
              lineHeight: "1.5",
              margin: "0 0 26px",
            }}
          >
            You're getting this email because you are a member of Code Space.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const paragraphStyle = {
  fontFamily,
  fontSize: "14px",
  fontWeight: "normal",
  lineHeight: "1.5",
  margin: "0 0 14px",
};

const linkStyle = {
  color: purple,
  fontFamily,
  fontSize: "14px",
  lineHeight: "1.5",
  textDecoration: "underline",
};

export function getAdminWelcomeEmailText({
  email,
  name,
  resetUrl,
}: AdminWelcomeEmailProps) {
  const greetingName = getFirstName(name);

  return [
    `Hello ${greetingName},`,
    "",
    "You have a new Admin account with the codespaces.org organization.",
    "",
    "Welcome to Code Space. An admin has created an account for you so you can access the admin area and help manage the community website.",
    "",
    ...(email ? [`Your username: ${email}`, ""] : []),
    "Click the link below to set your password and sign in. For your security, this reset password link expires after 48 hours.",
    "",
    resetUrl,
    "",
    "Warm regards,",
    "Developer Relations team",
    "",
    "To make sure you keep getting these emails, please add hello@codespaces.org to your address book or allow list.",
    "Update your email preferences: https://www.codespaces.org/admin/account",
    "",
    "You're getting this email because you are a member of Code Space.",
  ].join("\n");
}

function getFirstName(name?: string | null) {
  return name?.trim().split(/\s+/)[0] || "there";
}
