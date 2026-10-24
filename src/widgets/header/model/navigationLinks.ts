export const NAVIGATION_LINKS = [
  { label: "Marketplace", to: "/marketplace" },
  { label: "Rankings", to: "/rankings" },
  { label: "Connect a wallet", to: "/connect-wallet" },
] as const;

export type NavigationLink = (typeof NAVIGATION_LINKS)[number];
