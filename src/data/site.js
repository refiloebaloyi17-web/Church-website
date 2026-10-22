/** @typedef {{ label: string, href: string }} NavLink */

/** @type {{ label: string, href: string, children: NavLink[] }[]} */
const nav = [
  {
    label: "Visit",
    href: "/visit",
    children: [
      { label: "Plan your visit", href: "/visit" },
      { label: "Service times", href: "/services" },
      { label: "Find us", href: "/services#find" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our story", href: "/about" },
      { label: "What we believe", href: "/about#beliefs" },
      { label: "Leadership", href: "/about#leadership" },
    ],
  },
  {
    label: "Watch",
    href: "/sermons",
    children: [
      { label: "Sermons", href: "/sermons" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Events", href: "/events", children: [] },
  { label: "Contact", href: "/contact", children: [] },
];

/** @type {{ day: string, items: { time: string, name: string, note?: string }[] }[]} */
const services = [
  {
    day: "Sunday",
    items: [
      { time: "9:00 AM", name: "Intercession" },
      { time: "10:30 AM", name: "Sunday Service" },
    ],
  },
  {
    day: "Monday",
    items: [{ time: "5:30 PM", name: "Leadership Training" }],
  },
  {
    day: "Tuesday",
    items: [{ time: "5:30 PM", name: "Prophetic Classes" }],
  },
  {
    day: "Wednesday",
    items: [{ time: "9:00 AM - 12:00 PM", name: "Fasting & Prayer Service" }],
  },
  {
    day: "Thursday",
    items: [
      { time: "11:00 AM", name: "Women's Service" },
      { time: "5:30 PM", name: "Home Prayer" },
    ],
  },
  {
    day: "Friday",
    items: [{ time: "5:00 PM", name: "Youth Service" }],
  },
  {
    day: "Saturday",
    items: [{ time: "5:00 AM", name: "General Prayer Meeting" }],
  },
];

export const site = {
  name: "Healing Center True Gospel Church",
  tagline: "Your healing is here",
  address: "True Gospel Church, Cuba Section",
  mapQuery: "True Gospel Church, Cuba Section",
  phone: "+27 (81) 273 3341",
  email: "truegospel.healingcentre@gmail.com",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/share/14bYeAAkG77/" },
    { label: "TikTok", href: "" },
    { label: "YouTube", href: "" },
  ],
  giving: {
    accountName: "Healing Center True Gospel Church",
    bank: "First National Bank",
    accountType: "Cheque Account",
    accountNumber: "00000000000",
    branchCode: "250655",
    reference: "Your name + Tithe / Offering / Seed",
    proofEmail: "truegospel.healingcentre@gmail.com",
  },
  services,
  nav,
};