import { Metadata } from "next";
import { PrivacyPolicyPage } from "../components/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy - Bar Huddle",
  description: "Learn how Bar Huddle collects, uses, and protects your personal data, privacy rights, and security policies.",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
