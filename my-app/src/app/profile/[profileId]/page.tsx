export const dynamic = "force-dynamic";

import { getUserProfile } from "@/lib/profile";
import SNSProfile from "@/app/ui/Profile/SNSProfile";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { profileId: string };
}) {
  const pid = parseInt(params.profileId, 10);
  const MOCK_USER_ID = 1;

  const profile = await getUserProfile(pid, MOCK_USER_ID);
  if (!profile) return notFound();

  return <SNSProfile profile={profile} pid={pid} />; // ✅ props로 전달
}
