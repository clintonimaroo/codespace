"use client";

import { useDocumentInfo } from "@payloadcms/ui";
import React from "react";

const siteUrl = "https://www.codespaces.org";

type EventEmbedCodeFieldProps = {
  collection: "past-events" | "upcoming-events";
};

function buildEmbedCode(
  collection: EventEmbedCodeFieldProps["collection"],
  id: number | string,
  transparent: boolean,
) {
  const transparentParam = transparent ? "?transparent=true" : "";

  return `<iframe src="${siteUrl}/${collection}/${id}/embed${transparentParam}" width="100%" height="600" frameborder="0" allowtransparency="true" style="border: none; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></iframe>`;
}

function EventEmbedCodeField({ collection }: EventEmbedCodeFieldProps) {
  const { id } = useDocumentInfo();
  const [transparent, setTransparent] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const embedCode = id ? buildEmbedCode(collection, id, transparent) : "";
  const eventLabel =
    collection === "past-events" ? "past event" : "upcoming event";

  const copyEmbedCode = async () => {
    if (!embedCode) {
      return;
    }

    await navigator.clipboard.writeText(embedCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      style={{
        backgroundColor: "var(--theme-elevation-50)",
        border: "1px solid var(--theme-elevation-150)",
        borderRadius: "4px",
        padding: "12px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "8px",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <label
          style={{
            color: "var(--theme-elevation-800)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          Embed Code
        </label>
        <button
          type="button"
          onClick={copyEmbedCode}
          disabled={!embedCode}
          style={{
            background: "var(--theme-success-500)",
            border: 0,
            borderRadius: "4px",
            color: "#fff",
            cursor: embedCode ? "pointer" : "not-allowed",
            fontSize: "12px",
            fontWeight: 600,
            opacity: embedCode ? 1 : 0.5,
            padding: "6px 10px",
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <label
        style={{
          alignItems: "center",
          color: "var(--theme-elevation-700)",
          display: "flex",
          fontSize: "12px",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        <input
          checked={transparent}
          onChange={(event) => setTransparent(event.target.checked)}
          type="checkbox"
        />
        Transparent website background
      </label>

      <textarea
        readOnly
        value={
          embedCode ||
          `Save this ${eventLabel} first, then copy the generated embed code.`
        }
        style={{
          backgroundColor: "var(--theme-input-bg)",
          border: "1px solid var(--theme-elevation-150)",
          borderRadius: "4px",
          color: "var(--theme-elevation-800)",
          fontFamily: "monospace",
          fontSize: "12px",
          minHeight: "110px",
          padding: "8px",
          resize: "vertical",
          width: "100%",
        }}
      />
      <p
        style={{
          color: "var(--theme-elevation-500)",
          fontSize: "12px",
          lineHeight: 1.5,
          margin: "8px 0 0",
        }}
      >
        Copy this iframe to embed only the event card. The transparent option
        keeps the card shadow and styling while removing the white page
        background.
      </p>
    </div>
  );
}

export function UpcomingEventEmbedCodeField() {
  return <EventEmbedCodeField collection="upcoming-events" />;
}

export function PastEventEmbedCodeField() {
  return <EventEmbedCodeField collection="past-events" />;
}
