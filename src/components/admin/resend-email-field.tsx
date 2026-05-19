"use client";

import { useDocumentInfo } from "@payloadcms/ui";
import React from "react";

export function ResendEmailField() {
  const { id } = useDocumentInfo();
  const [isSending, setIsSending] = React.useState(false);
  const [message, setMessage] = React.useState<null | string>(null);
  const [error, setError] = React.useState<null | string>(null);

  const resendInvite = async () => {
    if (!id) {
      return;
    }

    setIsSending(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch(`/api/users/${id}/resend-welcome-email`, {
        credentials: "include",
        method: "POST",
      });
      const data = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.message || "Could not resend the invite email.");
      }

      setMessage(data?.message || "Invite email sent.");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Could not resend the invite email.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      style={{
        borderTop: "1px solid var(--theme-elevation-150)",
        marginTop: "24px",
        paddingTop: "24px",
      }}
    >
      <button
        type="button"
        disabled={!id || isSending}
        onClick={resendInvite}
        style={{
          background: "transparent",
          border: "1px solid var(--theme-elevation-800)",
          borderRadius: "4px",
          color: "var(--theme-elevation-900)",
          cursor: id && !isSending ? "pointer" : "not-allowed",
          fontSize: "14px",
          opacity: id && !isSending ? 1 : 0.5,
          padding: "10px 14px",
        }}
      >
        {isSending ? "Sending invite..." : "Resend welcome invite"}
      </button>
      <p
        style={{
          color: "var(--theme-elevation-500)",
          fontSize: "12px",
          lineHeight: 1.5,
          margin: "8px 0 0",
        }}
      >
        Sends a fresh welcome email with a 48-hour password reset link.
      </p>
      {message ? (
        <p
          style={{
            color: "var(--theme-success-600)",
            fontSize: "12px",
            margin: "8px 0 0",
          }}
        >
          {message}
        </p>
      ) : null}
      {error ? (
        <p
          style={{
            color: "var(--theme-error-600)",
            fontSize: "12px",
            margin: "8px 0 0",
          }}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
