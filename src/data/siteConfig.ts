export const siteConfig = {
  name: "SoluONE",
  legalName: "SoluOne S.A. de C.V.",
  tagline: "Store Operation Platform for SAP Business One",
  description:
    "RetailOne is an enterprise point-of-sale system with great adaptability and configuration capabilities to meet the needs of your business.",
  url: "https://soluone.com",
  contact: {
    email: "contacto@soluone.com",
    salesEmail: "gonzalo.pallares@soluone.com",
    phone: "+52 999 268 1435",
    phoneRaw: "+529992681435",
    whatsappChannel: "@RetailOne | Soluone",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/soluone/",
    facebook: "https://www.facebook.com/pages/SoluOne-SA-de-CV/1530265860528254",
    twitter: "https://twitter.com/SoluOneSACV",
    instagram: "https://www.instagram.com/soluone/",
    youtube: "https://www.youtube.com/channel/UCNCjXFeb6X159oPg_Uty41w",
  },
  stats: {
    experienceYears: "17+",
    collaborators: "80+",
    countries: "15+",
    licenses: "8,000+",
  },
  products: [
    {
      name: "InvoiceOne",
      slug: "invoice-one",
      href: "/pageproductsdetail/invoice-one",
      desc: "Electronic invoicing and accounting add-on for Mexican SAT and international tax compliance.",
    },
    {
      name: "RetailOne",
      slug: "retail-one",
      href: "/pageproductsdetail/retail-one",
      desc: "Point of sale and store operation platform certified for SAP Business One.",
    },
    {
      name: "Voi+",
      slug: "voi",
      href: "https://voi.plus/en",
      desc: "Delivery, e-commerce, customer loyalty, and driver logistics connected to SAP Business One.",
    },
  ],
  navLinks: [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/#products",
      dropdown: [
        {
          name: "InvoiceOne",
          href: "/pageproductsdetail/invoice-one",
          desc: "Electronic invoicing and tax compliance Add-On.",
        },
        {
          name: "RetailOne",
          href: "/pageproductsdetail/retail-one",
          desc: "Complete POS and retail store operation for SAP Business One.",
        },
        {
          name: "Voi+ Delivery",
          href: "https://voi.plus/en",
          desc: "Multi-platform delivery & e-commerce hub for SAP B1.",
        },
      ],
    },
    { name: "Ecosystem", href: "/ecosystem" },
    {
      name: "Industries",
      href: "/industries",
      dropdown: [
        { name: "Autoparts", href: "/autoparts", desc: "Vehicle model search, kits & workshop flows" },
        { name: "Pastry Shops and Ice Cream Parlors", href: "/pastry-shops-and-ice-cream-parlors", desc: "Recipe management and counter production" },
        { name: "Hardware and Building Materials", href: "/hardware", desc: "Scale integration, bulk items & Truper catalogs" },
        { name: "Wines and Spirits", href: "/wines-and-spirits", desc: "Packaging units, wholesale lists & bar sales" },
        { name: "Fashion and Footwear", href: "/fashion-and-footwear", desc: "Size and color matrix, multi-store stock" },
        { name: "Groceries", href: "/groceries", desc: "High-speed checkout, barcode scanning & scales" },
        { name: "Electronics", href: "/electronics", desc: "Serial numbers, warranties & import customs" },
        { name: "Restaurants", href: "/restaurants", desc: "Waiters, table maps, split checks & course timing" },
      ],
    },
    { name: "Customers", href: "/#customers" },
    { name: "About", href: "/about" },
  ],
};
