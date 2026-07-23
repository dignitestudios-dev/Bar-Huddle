import { Metadata } from "next";
import { TermsPage } from "../components/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions - Bar Huddle",
  description: "Read the Terms & Conditions and Legal Agreement for using Bar Huddle services and app.",
};

export default function TermsAndConditions() {
  return <TermsPage />;
}
