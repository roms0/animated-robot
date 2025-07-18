import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import classes from "./hash-link.module.css";
import React from "react";

export function HashLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const locale = useLocale();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const [path, hash] = href.split("#");
    const fullPath = `/${locale}${path.startsWith("/") ? "" : "/"}${path}`;
    router.push(fullPath, { scroll: false });

    setTimeout(() => {
      if (hash) {
        history.replaceState(null, "", `#${hash}`);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 500);
  };

  return (
    <a
      className={classes.link}
      href={`/${locale}${href}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
