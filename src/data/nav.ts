export interface NavLink {
  label: string;
  url: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", url: "/" },
  { label: "Projects", url: "/projects" },
  { label: "Archive", url: "/archive" },
  { label: "Information", url: "/information" },
];

export interface ArticleItem {
  url: string;
  title: string;
  subTitle: string;
  img: string;
}

export const articleItems: ArticleItem[] = [
  {
    url: "https://haloso.example.com",
    title: "Halo Sound Co.",
    subTitle: "Studio — sonic branding for modern brands",
    img: "/images/nav/collab-1.jpg",
  },
  {
    url: "https://fieldworkfilms.example.com",
    title: "Fieldwork Films",
    subTitle: "Direction — motion for culture-forward clients",
    img: "/images/nav/collab-2.jpg",
  },
  {
    url: "https://lowendtheory.example.com",
    title: "Low End Theory",
    subTitle: "Label — music direction & release visuals",
    img: "/images/nav/collab-3.jpg",
  },
];
