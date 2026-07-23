import { Metadata } from "next";
import { ChildSafetyPolicyPage } from "../components/ChildSafetyPolicyPage";

export const metadata: Metadata = {
  title: "Child Safety & Protection Policy - Bar Huddle",
  description: "Read Bar Huddle's Child Safety & Protection Policy, age restrictions (18+), content moderation, and reporting mechanisms against Child Sexual Abuse and Exploitation (CSAE).",
};

export default function ChildSafetyPolicy() {
  return <ChildSafetyPolicyPage />;
}
