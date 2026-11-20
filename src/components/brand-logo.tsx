import logo from "@/assets/brand/impretto-logo.png.asset.json";

// Absolute hosting origin also keeps CDN media usable on the Vercel deployment.
export function brandAssetUrl(url: string) {
  return url.startsWith("/") ? `https://impretto-dream-builder.lovable.app${url}` : url;
}

export function BrandLogo() {
  return <img src={brandAssetUrl(logo.url)} alt="Impretto Home" width={354} height={285} className="brand-logo" />;
}