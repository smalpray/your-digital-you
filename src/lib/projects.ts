import calehoImage from "@/assets/caleho.png";
import eoCareersImage from "@/assets/eo-careers.png";
import eoTicketingImage from "@/assets/eo-ticketing.png";

export const projects = [
  {
    name: "Caleho",
    href: "https://www.caleho.cloud/",
    category: "Hosting platform",
    description:
      "A hosting platform that helps students launch websites, portfolios, school projects, and personal applications.",
    image: calehoImage,
    imageAlt: "Caleho student hosting platform homepage",
  },
  {
    name: "My Empire / EO Careers",
    href: "http://careers.empireonecx.com/",
    category: "Hiring & internal system",
    description:
      "A hiring and internal operations platform for the My Empire team, bringing career opportunities and employee workflows together.",
    image: eoCareersImage,
    imageAlt: "My Empire EO Careers hiring platform homepage",
  },
  {
    name: "EO Ticketing",
    href: "https://www.eo-unified-ims.com/",
    category: "Company ticketing system",
    description:
      "An internal ticketing system for the company, giving teams a central place to submit and manage support requests.",
    image: eoTicketingImage,
    imageAlt: "EmpireOneCX unified ticketing system sign-in screen",
  },
];
