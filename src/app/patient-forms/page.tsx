import { PatientResource } from "@/components/patient-resource";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Patient Forms",
  "Complete your patient forms online. Call South Valley Family Dental for assistance.",
  "/patient-forms",
);
export default function Forms() {
  return <PatientResource type="forms" />;
}
