import React, { useEffect, useState } from "react";

function PWADownloadButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  

  return (
    <div>
      {/* Your app content */}sdf
      <button
        id="installApp"
        // onClick={() => handleInstallClick}
        className=" md:fixed right-20 top-20 bg-gradient-to-r rounded-lg px-4 py-2 text-sky-900"
      >
        Install on your Device
      </button>
    </div>
  );
}

export default PWADownloadButton;

