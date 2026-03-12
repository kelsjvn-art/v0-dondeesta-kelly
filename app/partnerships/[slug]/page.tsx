import { partnerships } from "@/lib/partnership-data"
import { PartnershipContent } from "./partnership-content"

export function generateStaticParams() {
  return partnerships.map((p) => ({ slug: p.slug }))
}

export default async function PartnershipPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <PartnershipContent slug={slug} />
}
