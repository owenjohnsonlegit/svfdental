import { PatientResource } from "@/components/patient-resource";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Make a Payment",
  "Need to pay your bill? Call South Valley Family Dental for help accessing our secure online payment platform.",
  "/make-a-payment",
);
export default function Payment() {
  return <PatientResource type="payment" />;
}
