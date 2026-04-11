/**
 * Booking platform configuration.
 *
 * Once you have accounts, fill in the IDs below and set `enabled` to true.
 *
 * Bsport ID:   Settings > Parameters > General > "BSPORT ID"
 * ClassPass:   Your studio listing URL after partner approval
 */
export const BOOKING_CONFIG = {
  bsport: {
    /** Bsport studio ID — used to build iframe widget URLs */
    id: "",
    /** Fallback URL when widget is not yet enabled */
    baseUrl: "https://nimara.bsport.io",
    /** Set to true once the iframe embed is configured in your Bsport dashboard */
    widgetEnabled: false,
  },
  classpass: {
    /** Your ClassPass studio listing URL, e.g. "https://classpass.com/studios/nimara-pilates-palma" */
    url: "",
    /** Set to true after ClassPass partner approval */
    enabled: false,
  },
} as const;

/** Resolved booking URL — returns embedded widget URL if available, otherwise the base URL */
export function getBookingUrl(): string {
  const { bsport } = BOOKING_CONFIG;
  if (bsport.widgetEnabled && bsport.id) {
    return `https://backoffice.bsport.io/m/${bsport.id}/calendar`;
  }
  return bsport.baseUrl;
}
