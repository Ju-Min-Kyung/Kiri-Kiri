export const dynamic = "force-dynamic";

import { getUserProfile } from "@/lib/profile";
import SNSProfile from "@/app/ui/Profile/SNSProfile";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const profileId = Number(params.profileId);
  const MOCK_USER_ID = 1;

  const profile = await getUserProfile(profileId, MOCK_USER_ID);
  if (!profile) return notFound();

  return <SNSProfile profile={profile} />;
}
