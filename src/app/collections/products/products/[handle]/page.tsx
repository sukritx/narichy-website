import { permanentRedirect } from "next/navigation";

type LegacyProductPageProps = {
  params: Promise<{ handle: string }>;
};

export default async function LegacyProductPage({ params }: LegacyProductPageProps) {
  const { handle } = await params;
  permanentRedirect(`/products/${handle}`);
}
