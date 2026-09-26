import { PatientResource } from "@/components/patient-resource";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Make a Payment",
  "Contact South Valley Family Dental for the practice’s online payment service and payment assistance.",
  "/make-a-payment",
);
export default function Payment() {
  return <PatientResource type="payment" />;
}
