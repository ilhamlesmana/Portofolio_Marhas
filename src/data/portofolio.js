import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

export const profile = {
  name: 'Ilham Lesmana',
  initials: 'Il',
  role: "Techear",
  tagline: " Passionate about creating innovative solutions",
  cvUrl: "",
  photo: "/public/ilham.jpg",
  about: [
    "I am a passionate and dedicated software engineer with a strong background in web development. I have experience working with various technologies and frameworks, and I am always eager to learn and explore new tools and techniques.",
    "I have a proven track record of delivering high-quality software solutions that meet the needs of clients and end-users. I am a team player who enjoys collaborating with others to solve complex problems and create innovative solutions.",
    "In my free time, I enjoy contributing to open-source projects, attending tech meetups, and staying up-to-date with the latest trends in the software development industry."
  ],
  stats: [
    { value: 10, label: "Projects" },
    { value: 5, label: "Clients" },
    { value: 3, label: "Years of Experience" }
  ],
  focusArea: [
    { 
      title: "Web Development", 
      description: "Building responsive and user-friendly web applications using modern technologies." },
    { 
      title: "UI/UX Design", description: "Creating intuitive and visually appealing user interfaces and experiences." },
    { title: "Backend Development", description: "Designing and implementing robust backend systems and APIs." }
  ],
  domains: ["Web Development", "UI/UX Design", "Backend Development"

  ]


};

export const skills = [
  {
    title: "Education",
    description: "Bachelor's degree in Computer Science",
    items: ["JavaScript", "Python", "React", "Node.js"],
  },
  {
    title: "Work Experience",
    description: "3 years of experience in software development",
    items: ["Frontend Development", "Backend Development", "Database Management"],
  },
  {
    title: "Certifications",
    description: "Certified Web Developer",
    items: ["AWS Certified Developer", "Microsoft Certified: Azure Developer Associate", "Google Cloud Certified - Professional Cloud Developer"],
  }
]
export const projects = [
  {
    id: 1,
    title: "LMS KodeAm",
    description:
      "A Learning Management System (LMS) designed for KodeAm, an educational platform that provides online courses and resources for students and educators.",
    category: "Curriculum",
    tags: ["STEM", "Kurikulum Merdeka", "Grades 7–8"],
    link: "#",
    image: "/public/s2.png",
    color: "from-blue-500 to-cyan-400",
  },
]


export const socials = [
  {
    label: "LinkedIn",
    handle: "Ilham Lesmana",
    url: "https://www.linkedin.com/in/nida-khairunnisa-kusumawardhani-192b59363",
    icon: FaLinkedinIn,
    color: "group-hover:bg-sky-700",
  },
  {
    label: "Instagram",
    handle: "@ilhmlsmn",
    // URL Instagram ditulis TANPA tanda @
    url: "https://instagram.com/nida.khairunnisa",
    icon: FaInstagram,
    color: "group-hover:bg-pink-600",
  },
  {
    label: "WhatsApp",
    handle: "0822-404-87638",
    // Format wa.me: kode negara 62 + nomor TANPA angka 0 di depan, TANPA tanda hubung
    // 081323664628 → 6281323664628
    url: "https://wa.me/6281323664628",
    icon: FaWhatsapp,
    color: "group-hover:bg-green-600",
  },
  {
    label: "GitHub",
    handle: "ilhamlesmana",
    url: "https://github.com/ilhamlesmana",
    icon: FaGithub,
    color: "group-hover:bg-slate-900",
  },
  {
    label: "Email",
    handle: "ilhamlesmana33@gmail.com",
    // mailto: → membuka aplikasi email pengunjung dengan alamat tujuan terisi otomatis
    url: "mailto:ndakhairunnisa94@gmail.com",
    icon: FaEnvelope,
    color: "group-hover:bg-brand",
  },
];