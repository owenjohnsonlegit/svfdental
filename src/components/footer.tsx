import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation, practice, directionsUrl } from "@/data/practice";
import { Address, OfficeHours, ExternalLink } from "./ui";
import { Brand } from "./header";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>{practice.dentist}</p>
          <Address />
          <a className="footer-phone" href={practice.phoneHref}>
            {practice.phone}
          </a>
          <ExternalLink href={directionsUrl}>Get directions</ExternalLink>
        </div>
        <div>
          <h2>Explore</h2>
          <nav aria-label="Footer navigation">
            {navigation
              .filter(
                (x) => !["Patient Forms", "Make a Payment"].includes(x.label),
              )
              .map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>
        <div>
          <h2>For patients</h2>
          <nav aria-label="Patient resources">
            {navigation
              .filter((x) =>
                ["Patient Forms", "Make a Payment"].includes(x.label),
              )
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                  {item.external && (
                    <>
                      <ArrowUpRight size={14} />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </>
                  )}
                </Link>
              ))}
            <Link href="/office-info#insurance">Insurance & payment</Link>
          </nav>
        </div>
        <div>
          <h2>Office hours</h2>
          <OfficeHours />
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {practice.name}. All rights reserved.
        </p>
        <span>Rooted in Cache Valley.</span>
      </div>
    </footer>
  );
}
