export function trackLead(eventData?: Record<string, any>) {
  if (typeof window === "undefined") return;

  if (!window.fbq) return;

  window.fbq("track", "Lead", {
    ...eventData,
  });
}