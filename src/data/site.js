/** @type {{ label: string, href: string, children: { label: string, href: string }[] }[]} */
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
      { label: "Departments", href: "/departments" },
    ],
  },
  {
    label: "Media",
    href: "/sermons",
    children: [
      { label: "Sermons", href: "/sermons" },
      { label: "Monthly devotions", href: "/devotions" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Events", href: "/events", children: [] },
  { label: "Building", href: "/building", children: [] },
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
  { day: "Monday", items: [{ time: "6:00 PM", name: "Leadership Training" }] },
  { day: "Tuesday", items: [{ time: "5:30 PM", name: "Prophetic Classes" }] },
  { day: "Wednesday", items: [{ time: "9:00 AM - 12:00 PM", name: "Fasting & Prayer Service" }] },
  {
    day: "Thursday",
    items: [
      { time: "11:00 AM", name: "Women's Service" },
      { time: "5:30 PM", name: "Home Prayer" },
    ],
  },
  { day: "Friday", items: [{ time: "5:00 PM", name: "Youth Service" }] },
  {
    day: "Saturday",
    items: [
      { time: "5:00 AM", name: "General Prayer Meeting" },
      { time: "1:00 PM", name: "Dominion Kids & Junior Youth", note: "On selected Saturdays" },
      { time: "2:00 PM", name: "Worship Team", note: "On selected Saturdays" },
      { time: "5:00 PM", name: "Young Adults", note: "On selected Saturdays" },
    ],
  },
];

const monthly = [
  {
    when: "First Sunday of every month",
    time: "Evening",
    name: "Blood / Holy Communion Service",
  },
];

/** @type {{ title: string, description: string, atChurch: string, accountName: string, bank: string, accountType: string, accountNumber: string, branchCode: string, reference: string, payUrl: string, hidden: boolean }[]} */
const accounts = [
  {
    title: "Offering",
    description: "Your freewill offering towards the work of the church.",
    atChurch: "Place your general offering in the baskets at church.",
    accountName: "General Offering",
    bank: "Capitec Bank",
    accountType: "Cheque / Savings",
    accountNumber: "1054901546",
    branchCode: "",
    reference: "Your name + Offering",
    swiftCode: "",
    hidden: false,
  },
  {
    title: "Tithe",
    description: "Return your tithe to the house of the Lord.",
    atChurch: "Use a tithe envelope. Envelopes are available at church.",
    accountName: "Tithe & First Fruits",
    bank: "Capitec Bank",
    accountType: "Cheque / Savings",
    accountNumber: "4001858819",
    branchCode: "",
    reference: "Your name + Tithe",
    swiftCode: "",
    hidden: false,
  },
  {
    title: "Building / Projects",
    description: "Help us build and develop the church and its projects.",
    atChurch: "Use a building offering envelope. Envelopes are available at church.",
    accountName: "Church BUilding Funds",
    bank: "Capitec Bank",
    accountType: "Cheque / Savings",
    accountNumber: "4001858870",
    branchCode: "",
    reference: "Your name + Building",
    swiftCode: "",
    hidden: false,
  },
  {
    title: "Special Projects",
    description: "Fixing of musical instruments in the church",
    atChurch: "Use a projects envelope. Envelopes are available at church.",
    accountName: "Special Projects Fund",
    bank: "Capitec Bank",
    accountType: "Cheque / Savings",
    accountNumber: "4001858919",
    branchCode: "",
    reference: "Your name",
    swiftCode: "",
    hidden: true, // change to false once you have named it and filled in the details
  },
];

export const site = {
  name: "Healing Center True Gospel Church",
  tagline: "Your healing is here",
  motto: "",
  vision: "",
  mission:
    "To bring healing, hope and the true gospel of Jesus Christ to every person who walks through our doors and to our community.",
  address: "5649 True Gospel Street, Cuba Section, Lethabong, 0263",
  mapQuery: "True Gospel Church, 5649 True Gospel Street, Cuba Section, Lethabong, 0263, South Africa",
  phone: "+27 (81) 273 3341",
  whatsapp: "", // international format, no + or spaces, e.g. 27821234567
  email: "truegospel.healingcentre@gmail.com",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/share/14bYeAAkG77/" },
    { label: "Instagram", href: "" },
    { label: "YouTube", href: "" },
  ],
  giving: {
    proofEmail: "truegospel.healingcentre@gmail.com",
    accounts,
  },
  services,
  monthly,
  nav,
};

export const whatsappUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I found you through your website.")}`
  : "";