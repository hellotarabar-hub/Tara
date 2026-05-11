// export function getUTMParams() {
//   const params = new URLSearchParams(window.location.search);

//   return {
//     utm_source: params.get("utm_source") || "",
//     utm_medium: params.get("utm_medium") || "",
//     utm_campaign: params.get("utm_campaign") || "",
//     utm_content: params.get("utm_content") || "",
//   };
// }


// export function saveUTMsToStorage() {
//   const utm = getUTMParams();
//   localStorage.setItem("utm", JSON.stringify(utm));
//   return utm;
// }

// export function getStoredUTMs() {
//   try {
//     return JSON.parse(localStorage.getItem("utm") || "{}");
//   } catch {
//     return {};
//   }
// }
const DISCOUNT_CAMPAIGNS = ["fullness_v1", "bloat_v1"];

/**
 * Read UTMs from URL
 */
export function getUTMParams() {
  if (typeof window === "undefined") return {};

  const p = new URLSearchParams(window.location.search);

  return {
    utm_source: p.get("utm_source") || "",
    utm_medium: p.get("utm_medium") || "",
    utm_campaign: p.get("utm_campaign") || "",
    utm_content: p.get("utm_content") || "",
  };
}

/**
 * Save UTMs with FIRST + LAST TOUCH
 */
export function saveUTMsToStorage() {
  if (typeof window === "undefined") return;

  const newUTM = getUTMParams();

  // existing data
  let existing = JSON.parse(localStorage.getItem("utm") || "{}");

  // migrate old structure automatically
  if (existing.utm_source) {
    existing = {};
  }

  // FIRST TOUCH
  if (!existing.first_touch && newUTM.utm_source) {
    existing.first_touch = {
      ...newUTM,
      timestamp: Date.now(),
    };
  }

  // LAST TOUCH
  if (newUTM.utm_source) {
    existing.last_touch = {
      ...newUTM,
      timestamp: Date.now(),
    };
  }

  localStorage.setItem("utm", JSON.stringify(existing));

  return existing;
}

/**
 * Get stored UTMs
 */
export function getStoredUTMs() {
  if (typeof window === "undefined") return {};

  return JSON.parse(localStorage.getItem("utm") || "{}");
}

/**
 * Traffic type
 */
export function getTrafficType() {
  const utm = getStoredUTMs();

  const source = utm?.last_touch?.utm_source || "direct";
  const medium = utm?.last_touch?.utm_medium || "";

  if (source === "meta" && medium === "paid") return "meta_paid";
  if (source === "qr") return "qr";
  if (source === "instagram") return "social";
  if (source === "tiktok") return "social";

  if (source && source !== "direct") return "tracked";

  return "direct";
}

/**
 * Discount eligibility
 */
export function isDiscountEligible() {
  const utm = getStoredUTMs();

  const source = utm?.last_touch?.utm_source;
  const medium = utm?.last_touch?.utm_medium;
  const campaign = utm?.last_touch?.utm_campaign;

  return (
    (source === "meta" && medium === "paid") ||
    source === "qr" ||
    DISCOUNT_CAMPAIGNS.includes(campaign)
  );
}