import type { Socials } from "./types";

export const SITE_URL = "https://encryptica-blog.vercel.app/"; // Replace with your site url
export const SITE_TITLE = "Manas's Blog";
export const SITE_DESCRIPTION = "Manasraj Singh's personal blog";
export const SITE_LOGO = "/logo.svg";

export const SOCIALS: Socials = [
  {
    name: "Github",
    href: "https://github.com/root-Manas",
    linkTitle: ` ${SITE_TITLE} on Github`,
    active: true,
  },

  {
    name: "Twitter",
    href: "https://x.com/wthmanas",
    linkTitle: `${SITE_TITLE} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/manasraj-singh",
    linkTitle: `${SITE_TITLE} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:dev.manas@protonmail.com",
    linkTitle: `Send an email to ${SITE_TITLE}`,
    active: true,
  },
  {
    name: "Tryhackme",
    href: "https://tryhackme.com/p/Manasraj",
    linkTitle: ` ${SITE_TITLE} on Tryhackme`,
    active: true,
  }
];
