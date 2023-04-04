import React, { useEffect, useState } from "react";

function PWADownloadButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  

  //   const handleInstallClick = () => {
  //     if (deferredPrompt) {
  //       deferredPrompt.prompt();
  //       deferredPrompt.userChoice.then((choiceResult) => {
  //         if (choiceResult.outcome === "accepted") {
  //           console.log("User accepted the install prompt");
  //         } else {
  //           console.log("User dismissed the install prompt");
  //         }
  //         setDeferredPrompt(null);
  //       });
  //     } else {
  //       console.log("deferredPrompt is not defined");
  //     }
  //   };

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

// e.preventDefault();
// console.log(e);
// deferredPrompt = e;
// console.log("de", deferredPrompt);
// showInstallPromotion();
// console.log(`'beforeinstallprompt' event was fired.`);
