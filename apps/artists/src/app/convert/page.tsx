// components/Widget.tsx

"use client"; // Ensure this component is treated as a Client Component

import React, { useEffect } from "react";
import PanoraWidget from "@panoraexchange/widget-sdk";
import Panora from "@panoraexchange/swap-sdk";

const PANORA_WIDGET_API_KEY = "oLujOsvnXgFY9TjN5VxS@u@kmq+wWjcyTEnVL4LEPf5pwNtYdR90EfeBDj33F^4E";
const KEYLESS_GOOGLE_CLIENT_ID = process.env.REACT_APP_KEYLESS_GOOGLE_CLIENT_ID ?? "";

// Initialize Panora with API key
const panoraClient = new Panora({
  apiKey: PANORA_WIDGET_API_KEY,
});

const Widget: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#010D09",
        padding: "10px", // Added padding for responsiveness
      }}
    >
      <div
        id="panora-widget-container"
        style={{
          width: "100%",
          maxWidth: "450px", // Adjusts to screen size but doesn't exceed 450px
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          boxSizing: "border-box", // Ensures padding is included in width
        }}
      >
        {/* Render the Panora widget */}
        <PanoraWidget
          containerId="panora-widget-container"
          config={{
            API_KEY: PANORA_WIDGET_API_KEY,
            styles: {
              widget: { width: "100%" }, // Make widget responsive
            },
            KEYLESS_GOOGLE_CLIENT_ID,
            tokenPickerView: "MODAL",
          }}
        />
      </div>
    </div>
  );
};

export default Widget;
