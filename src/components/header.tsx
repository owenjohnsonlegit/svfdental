"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { navigation, practice } from "@/data/practice";
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label={`${practice.name} home`}>
      <svg viewBox="0 0 52 42" fill="none" aria-hidden="true">
        <path
          d="M3 30 17 10l9 12 8-16 15 24M3 36h46M11 30l6-9 9 11 8-16 10 14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        South Valley <small>FAMILY DENTAL</small>
      </span>
    </Link>
  );
}
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          trigger.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1200) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = before;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="utility-bar">
        <div className="container">
          <span>Family dentistry in Providence, Utah</span>
          <a href={practice.phoneHref}>
            <Phone size={13} aria-hidden="true" />
            {practice.phone}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner container">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
                {item.external && (
                  <>
                    <ArrowUpRight size={12} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </>
                )}
              </Link>
            ))}
          </nav>
          <a
            className="mobile-phone"
            href={practice.phoneHref}
            aria-label={`Call ${practice.phone}`}
          >
            <Phone size={21} />
          </a>
          <button
            ref={trigger}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div ref={panel} id="mobile-menu" className="mobile-menu">
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  onClick={close}
                  href={item.href}
                  key={item.label}
                  aria-current={pathname === item.href ? "page" : undefined}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                  {item.external && (
                    <span>
                      {" "}
                      ↗<span className="sr-only"> opens in a new tab</span>
                    </span>
                  )}
                </Link>
              ))}
            </nav>
            <a
              onClick={close}
              className="button button-primary"
              href={practice.phoneHref}
            >
              <Phone size={17} />
              {practice.phone}
            </a>
          </div>
        )}
      </header>
      {open && (
        <button
          className="menu-backdrop"
          aria-label="Close navigation"
          tabIndex={-1}
          onClick={close}
        />
      )}
    </>
  );
}
