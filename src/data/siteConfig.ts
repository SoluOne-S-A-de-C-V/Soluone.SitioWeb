export const siteConfig = {
  name: "SoluONE",
  legalName: "SoluOne Software",
  tagline: "Store Operation Platform for SAP Business One",
  description:
    "Retail One is a point-of-sale system with great adaptability and configuration capabilities to meet the needs of your business.",
  url: "https://soluone.com",
  contact: {
    email: "contact@soluone.com",
    salesEmail: "contacto@soluone.com",
    phone: "(+52) 999 242 0803",
    phoneRaw: "+529992420803",
    address: "Calle 5-D No.311-A x 20A y 20B Col. Xcumpich, Mérida, Yucatán, Mexico",
    mapsUrl: "https://maps.app.goo.gl/L5bAeftcMm99snED6",
  },
  stats: {
    experienceYears: "15+",
    collaborators: "80+",
    countries: "12+",
    licenses: "5,000+",
  },
  products: [
    {
      name: "Retail One",
      slug: "retail-one",
      href: "/pageproductsdetail/retail-one",
      desc: "Point of sale and store operation platform certified for SAP Business One.",
    },
    {
      name: "Invoice One",
      slug: "invoice-one",
      href: "/pageproductsdetail/invoice-one",
      desc: "Electronic invoicing and accounting add-on for Mexican tax regulations.",
    },
  ],
  navLinks: [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/#products",
      dropdown: [
        {
          name: "Retail One",
          href: "/pageproductsdetail/retail-one",
          desc: "Complete POS and retail store operation for SAP Business One.",
        },
        {
          name: "Invoice One",
          href: "/pageproductsdetail/invoice-one",
          desc: "Electronic invoicing and tax compliance Add-On.",
        },
      ],
    },
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
