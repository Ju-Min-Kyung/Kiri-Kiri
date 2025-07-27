export const dynamic = "force-dynamic";

import { getUserProfile } from "@/lib/profile";
import SNSProfile from "@/app/ui/Profile/SNSProfile";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ profileId: string }>; // Promise 타입으로 변경
}) {
  const { profileId } = await params; // params를 await
  const pid = parseInt(profileId, 10);
  const MOCK_USER_ID = 1;

  const profile = await getUserProfile(pid, MOCK_USER_ID);
  if (!profile) return notFound();

  return <SNSProfile profile={profile} pid={pid} />; // ✅ props로 전달
}