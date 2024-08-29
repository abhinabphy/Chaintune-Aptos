// // components/Widget.tsx

// "use client"; // Ensure this component is treated as a Client Component

// import React, { useEffect } from "react";
// import PanoraWidget from "@panoraexchange/widget-sdk";
// import Panora from "@panoraexchange/swap-sdk";

// const PANORA_WIDGET_API_KEY =  process.env.REACT_APP_KEYLESS_GOOGLE_CLIENT_ID ??"oLujOsvnXgFY9TjN5VxS@u@kmq+wWjcyTEnVL4LEPf5pwNtYdR90EfeBDj33F^4E";
// const KEYLESS_GOOGLE_CLIENT_ID = process.env.REACT_APP_KEYLESS_GOOGLE_CLIENT_ID ?? "";

// // Initialize Panora with API key
// const panoraClient = new Panora({
//   apiKey: PANORA_WIDGET_API_KEY,
// });

// const Widget = () => {
//     return (
//       <div
//         className=""
//         style={{
//           minHeight: "100vh",
//           minWidth: "100vw",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#010D09",
//         }}
//       >
//         <PanoraWidget
//           config={{
//             API_KEY: PANORA_WIDGET_API_KEY,
//             styles: {
//               widget: { width: "450px" },
//             },
//             tokenPickerView: "MODAL",
//           }}
//         />
//       </div>
//     );
//   };

// export default Widget;
'use client'; // Ensure this component is treated as a Client Component
import { memo } from "react";
import  {PanoraWidget}  from "@panoraexchange/widget-sdk";

const PANORA_WIDGET_API_KEY =
  process.env.NEXT_PUBLIC_PANORA_WIDGET_API_KEY ?? "";

const Widget = () => (
  <div
    className=""
    style={{
      minHeight: "100vh",
      minWidth: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#010D09",
    }}
  >
    <PanoraWidget
      config={{
        API_KEY: PANORA_WIDGET_API_KEY,
        styles: {
          widget: { width: "450px" },
        },
        tokenPickerView: "MODAL",
      }}
    />
  </div>
);

export default memo(Widget);