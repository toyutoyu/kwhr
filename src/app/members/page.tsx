import { getMemberList } from "@/lib/microcms";

export default async function page() {
  const data = await getMemberList();
  console.log({ data });
  return <></>;
}
