import { redirect } from "next/navigation";

export default function ChildSafetyRedirect() {
  redirect("/child-safety-policy");
}
