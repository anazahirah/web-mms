import {
  LucideYoutube,
  LucideInstagram,
  LucidePhone,
  LucideMail,
} from "lucide-vue-next";

export const client = [
  {
    image: "/lg.png",
    alt: "Logo LG",
    url: "/client/lg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat!",
  },
  {
    image: "/mayora.png",
    alt: "Logo Mayora",
    url: "/client/mayora",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat!",
  },
  {
    image: "/loreal.svg",
    alt: "Logo Loreal",
    url: "/client/loreal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat!",
  },
  {
    image: "/cabot.png",
    alt: "Logo Cabot",
    url: "/client/cabot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat!",
  },
  {
    image: "/nestle.png",
    alt: "Logo Nestle",
    url: "/client/nestle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat!",
  },
  {
    image: "/yamaha.png",
    alt: "Logo Yamaha",
    url: "/client/yamaha",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat!",
  },
];

export const service = [
  {
    title: "Engineering Service",
    description:
      "Solusi lengkap untuk kebutuhan teknik mesin, listrik, pemeliharaan sistem, konsultasi, dan desain segel mekanis.",
    slogan: "Fast",
    number: "01",
    image: "/mekanikal.webp",
    url: "/business/mekanikal",
  },
  {
    title: "Steel Works and Pipe Works",
    description:
      "Layanan fabrikasi dan pemasangan baja serta instalasi sistem perpipaan",
    slogan: "Steel and Pipe",
    number: "02",
    image: "/electrical.webp",
    url: "/business/electrical",
  },
  {
    title: "Plumbing and Refrigeration",
    description:
      "Instalasi, perbaikan, dan pemeliharaan sistem pipa air bersih/kotor serta sistem pendingin ruangan/industri.",
    slogan: " Pipe Protection",
    number: "03",
    image: "/mekanikal.webp",
    url: "/business/konsultan",
  },
  {
    title: "Contractor and Supplier",
    description:
      "Penyedia jasa konstruksi dan pengadaan material/peralatan untuk berbagai proyek.",
    slogan: "Construction",
    number: "04",
    image: "/mekanikal.webp",
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
      "Solusi lengkap untuk kebutuhan teknik mesin, listrik, pemeliharaan sistem, konsultasi, dan desain segel mekanis.",
  },
  {
    title: "Electrical",
    href: "/business/electrical",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Konsultan",
    href: "/business/konsultan",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Informatika",
    href: "/business/informatika",
    description: "Visually or semantically separates content.",
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
    url: "https://www.instagram.com/",
    icon: LucideInstagram,
  },
  {
    url: "https://www.youtube.com/",
    icon: LucideYoutube,
  },
  {
    url: "mailto:info@mechatronicgroup.com",
    icon: LucideMail,
  },
  {
    url: "tel:+628123456789",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
    ],
  },
  {
    flag: "electrical",
    url: "/business/electrical",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
    ],
  },
  {
    flag: "konsultan",
    url: "/business/konsultan",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
    ],
  },
  {
    flag: "informatika",
    url: "/business/informatika",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
    ],
  },
];
