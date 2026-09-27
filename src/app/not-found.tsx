import Link from "next/link";
import { PageHero } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404 · Page not found" title="Page Not Found">
        The page you’re looking for may have moved.
      </PageHero>
      <div className="container section">
        <Link className="button button-primary" href="/">
          Back to home
        </Link>
        <Link className="text-link" style={{ marginLeft: 25 }} href="/contact">
          Contact our office
        </Link>
      </div>
    </>
  );
}
