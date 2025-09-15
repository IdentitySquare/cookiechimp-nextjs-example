"use client";
import { useEffect } from "react";

export default function ConsentLogger() {
  useEffect(() => {
    function logConsent() {
      // ✅ Service-level check
      // @ts-ignore
      const allowed = window.CookieConsent?.acceptedService?.("Google Analytics", "analytics");
      if (allowed) {
        console.log("✅ Google Analytics allowed");
      } else {
        console.log("❌ Google Analytics blocked");
      }
    }

    // Run now + on changes
    logConsent();
    window.addEventListener("cc:onConsented", logConsent);
    window.addEventListener("cc:onUpdate", logConsent);

    return () => {
      window.removeEventListener("cc:onConsented", logConsent);
      window.removeEventListener("cc:onUpdate", logConsent);
    };
  }, []);

  return null;
}
