import { PatientResource } from "@/components/patient-resource";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Patient Forms",
  "Contact our Providence dental office for access to patient forms and help preparing for your visit.",
  "/patient-forms",
);
export default function Forms() {
  return <PatientResource type="forms" />;
}
