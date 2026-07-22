import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────
// SAVE UTMS
// ─────────────────────────────────────────────────────
export function saveUTMsToStorage() {
  const params = new URLSearchParams(window.location.search);

  const utm = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
  };

  const hasUtm = Object.values(utm).some(Boolean);

  if (hasUtm) {
    localStorage.setItem(
      "tara_utm",
      JSON.stringify({
        last_touch: utm,
      })
    );

    console.log("UTMs saved:", utm);
  }
}

// ─────────────────────────────────────────────────────
// GET STORED UTMS
// ─────────────────────────────────────────────────────
export function getStoredUTMs() {
  return JSON.parse(localStorage.getItem("tara_utm") || "{}");
}

// ─────────────────────────────────────────────────────
// TRAFFIC TYPE
// ─────────────────────────────────────────────────────
export function getTrafficType() {
  const stored = getStoredUTMs();
  const last = stored.last_touch || {};

  if (last.utm_source === "meta") {
    return "paid-social";
  }

  return "organic";
}

// ─────────────────────────────────────────────────────
// DISCOUNT ELIGIBILITY
// ─────────────────────────────────────────────────────
export function isDiscountEligible() {
  return true;
}

// ─────────────────────────────────────────────────────
// MAIN HOOK
// ─────────────────────────────────────────────────────
export function useUTM() {
  const [utm, setUTM] = useState<any>({});
  const [trafficType, setTrafficType] = useState("");
  const [discount, setDiscount] = useState(false);
  const [isMetaPaid, setIsMetaPaid] = useState(false);

  useEffect(() => {
    saveUTMsToStorage();

    const stored = getStoredUTMs();

    const last = stored.last_touch || {};

    setUTM(stored);
    setTrafficType(getTrafficType());
    setDiscount(isDiscountEligible());

    const metaPaid =
      last.utm_source === "meta" &&
      last.utm_medium === "paid";

    setIsMetaPaid(metaPaid);
  }, []);

  return {
    utm,
    trafficType,
    discount,
    isMetaPaid,
  };
}