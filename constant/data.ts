import {
  LucideYoutube,
  LucideInstagram,
  LucidePhone,
  LucideMail,
  LucideLinkedin,
} from "lucide-vue-next";

export const client = [
  {
    image: "/AP2.webp",
    alt: "Logo AP2",
    url: "/client/AP2",
    description:
      "Badan Usaha Milik Negara yang bergerak dalam bidang usaha pelayanan jasa kebandarudaraan.",
  },
  {
    image: "/APS.webp",
    alt: "Logo APS",
    url: "/client/APS",
    description:
      "Anak perusahaan dari Injourney yang menyediakan layanan manajemen fasilitas untuk bandarudara",
  },
  {
    image: "/GT.webp",
    alt: "Logo GT",
    url: "/client/GT",
    description:
      "Produsen ban terbesar di Asia Tenggara",
  },
  {
    image: "/IRC.webp",
    alt: "Logo IRC",
    url: "/client/GT",
    description:
      "Manufacturer of polyurethane, rubber, plastics and composites",
  },
  {
    image: "/YKK.webp",
    alt: "Logo YKK",
    url: "/client/YKK",
    description:
      "Perusahaan manufaktur asal Jepang yang memproduksi ritsleting dan produk pengikat",
  },
  {
    image: "/nestle.png",
    alt: "Logo Nestle",
    url: "/client/nestle",
    description:
      "the world's largest food & beverage company",
  },
  {
    image: "/rinnai.webp",
    alt: "Logo Rinnai",
    url: "/client/rinnai",
    description:
      "Perusahaan multinasional asal Jepang yang memproduksi peralatan berbahan bakar gas",
  },
];

export const service = [
  {
    title: "Engineering Service",
    description:
      "Special Purpose Machine (Conveyor, Oven, Xray, Chiller, Heater), Manufacturing Services, Storage & Handling (Tanks, Piping, Trolley), Workstations & Furniture, Machinery Components",
    slogan: "Mekanikal",
    number: "01",
    image: "/mekanikal.webp",
    url: "/business/mekanikal",
  },
  {
    title: "Electric Service",
    description:
      "Panel, Automation Systems, Power Plants, Electronic Components",
    slogan: "Elektrikal",
    number: "02",
    image: "/electrical.webp",
    url: "/business/electrical",
  },
  {
    title: "Layanan Ahli",
    description:
      "Certification & Compliance Services, Engineering Services, Maintenance & Repair Services",
    slogan: "Konsultan",
    number: "03",
    image: "/konsultan.webp",
    url: "/business/konsultan",
  },
  {
    title: "",
    description:
      "",
    slogan: "Informatika",
    number: "04",
    image: "/informatics.webp",
    url: "/business/informatika",
  },
  // {
  //   title: "Chiller and Heater",
  //   description:
  //     "Penjualan dan pemasangan unit pendingin (chiller) dan pemanas (heater) untuk kebutuhan industri dan komersial.",
  //   slogan: "Comfort Number One",
  //   number: "05",
  //   image: "/mekanikal.webp",
  // },
  // {
  //   title: "Machine Maker",
  //   description:
  //     "Desain dan fabrikasi mesin sesuai kebutuhan spesifik industri.",
  //   slogan: "Your Needs",
  //   number: "06",
  //   image: "/mekanikal.webp",
  // },
];

export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Mekanikal",
    href: "/business/mekanikal",
    description:
      "Special Purpose Machine, Manufacturing Services, Storage & Handling, Workstations & Furniture, Machinery Components"
  },
  {
    title: "Electrical",
    href: "/business/electrical",
    description:
      "Panel, Automation Systems, Power Plants, Electronic Components",
  },
  {
    title: "Consulting & Service",
    href: "/business/konsultan",
    description:
      "Certification & Compliance Services, Engineering Services, Maintenance & Repair Services",
  },
  {
    title: "Informatika",
    href: "/business/informatika",
    description: "",
  },
];

export const heroImage = [
  {
    image: "/mekanikal.webp",
    alt: "image that representative our mechanical works",
    color: "white",
  },
  {
    image: "/electrical.webp",
    alt: "image that representative our electrical works",
    color: "white",
  },
  {
    image: "/konsultan.webp",
    alt: "image that representative our consultation works",
    color: "black",
  },
  {
    image: "/informatics.webp",
    alt: "image that representative our informatics works",
    color: "white",
  },
];

export const socialMedia = [
  {
    url: "https://id.linkedin.com/company/pt-mechatronic-mitra-solusi",
    icon: LucideLinkedin,
  },
  {
    url: "https://www.youtube.com/@mechatronicmitrasolusi1780",
    icon: LucideYoutube,
  },
  {
    url: "mailto:info@mechatronicgroup.com",
    icon: LucideMail,
  },
  {
    url: "tel:+6287776667129",
    icon: LucidePhone,
  },
];

// Business Page

export const listNavigationBusiness = [
  {
    flag: "mekanikal",
    url: "/business/mekanikal",
  },
  {
    flag: "electrical",
    url: "/business/electrical",
  },
  {
    flag: "konsultan",
    url: "/business/konsultan",
  },
  {
    flag: "informatika",
    url: "/business/informatika",
  },
];

// About Page

export const listNavigationAbout = [
  {
    title: "Mechatronic Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis aperiam molestias ipsum voluptatibus numquam illo! Suscipit nam impedit ducimus.",
    url: "/about/visi",
    component: "VisiComp",
  },
  {
    title: "Mechatronic Mission",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis aperiam molestias ipsum voluptatibus numquam illo! Suscipit nam impedit ducimus.",
    url: "/about/misi",
    component: "MisiComp",
  },
];

// Data Untuk Carousel Pada Business Page
export const dataCarousel = [
  {
    flag: "mekanikal",
    url: "/business/mekanikal",
    images: [
      "/M1.webp",
      "/M2.webp",
      "/M3.webp",
      "/M4.webp",
      "/M5.webp",
      "/M6.webp",
    ],
  },
  {
    flag: "electrical",
    url: "/business/electrical",
    images: [
      "/E1.webp",
      "/E2.webp",
      "/E3.webp",
      "/E4.webp",
      "/E5K3.webp",
    ],
  },
  {
    flag: "konsultan",
    url: "/business/konsultan",
    images: [
      "/K1.webp",
      "/K2.webp",
      "/E5K3.webp",
    ],
  },
  {
    flag: "informatika",
    url: "/business/informatika",
    images: [
      
    ],
  },
];
