import {
  afcon,
  airok,
  cygni,
  shibaura,
  mentorinfocom,
  siqsess,
  caterpillar,
  enoah,
  wendt,
  youtopian,
  iitm,
  iccw,
  iiot,
  supply,
  construct,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  
  {
    id: "work",
    title: "Works",
  },
  {
    id: "feedback",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {

    icon: airok,
  },
  {
    icon: afcon,
  },
  {
    icon: cygni,
  },
  {
    icon: shibaura,
  },
  {
    icon: mentorinfocom,
  },
  {
    icon: siqsess,
  },
  {
    icon: caterpillar,
  },
  {
    icon: enoah,
  },
  {
    icon: wendt,
  },
  {
    icon: iitm,
  },
  {
    icon: iccw,
  },
  {
    icon: youtopian,
  },
];




const testimonials = [
  {
    testimonial:
      "Beebox team’s quality of work, dedication & responsiveness is everything one would hope for when working with an agile & nimble startup.",
    name: "Mr. Nikhil Bhagath",
    designation: "Aftermarket Services",
    company: "Caterpillar Inc",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
      "Beebox team has done a great job for 3D/AR content creation. I believe this concept can be very useful for future projects for client marketing, internal training etc.",
    name: "Mr. Pralhad Pawar",
    designation: "Chief Technology&Engg Officer",
    company: "TATA Projects Ltd",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "It was a pleasure working with Beebox. The responses have been on time, quick in understanding the requirement. Beebox has been an embodiment to the freshness and creativity, similar to the product the offer.",
    name: "Mr. Sundariya.S",
    designation: "AVP Business Head",
    company: "Wendt India Ltd",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const projects = [
  {
    name: "Real Time 3D Digital Twins - IIOT",
    description:
      "Live Monitoring and 3D visual representation of status of systems",

    image: iiot,
    source_code_link: "https://github.com/",
  },
  {
    name: "Procurement & Supply Chain",
    description:
      "3D enabled Spare Parts Management Platform for exhaustive parts catalogue of complex equipments",

    image: supply,
    source_code_link: "https://github.com/",
  },
  {
    name: "Operations & Maintenance Training",
    description:
      "Simulate complex construction operations in advance & reduce the risks and potential delays",

    image: construct,
    source_code_link: "https://github.com/",
  },
];

export { services, testimonials, projects };
