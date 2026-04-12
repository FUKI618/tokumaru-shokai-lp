// Keep deployment routing in one place for GitHub Pages base-path hosting.
export const basePath = "/tokumaru-shokai-lp/";

export const homePath = basePath;
export const privacyPolicyPath = `${basePath}privacy-policy/`;

export const assetPath = (asset: string) => `${basePath}${asset.replace(/^\/+/, "")}`;
export const sectionPath = (sectionId: string) => `${homePath}#${sectionId}`;
