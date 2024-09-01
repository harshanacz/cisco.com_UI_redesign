import { Download, Award, Shield, GraduationCap, Users, Headphones } from "lucide-react";
import article01 from '../assets/articles/1.jpg';
import article02 from '../assets/articles/2.jpg';
import article03 from '../assets/articles/3.jpg';

//Navbar
export const navItems = [
  { label: "Products & Services", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Support", href: "#" },
];


//services section
export const services = [
  {
    title: "Downloads",
    icon: <Download />
  },
  {
    title: "Certifications",
    icon: <Award />
  },
  {
    title: "Cisco Validated",
    icon: <Shield />
  },
  {
    title: "Training",
    icon: <GraduationCap />
  },
  {
    title: "Community",
    icon: <Users />
  },
  {
    title: "Support",
    icon: <Headphones />
  }
];

//articles section
export const articles = [
  {
    title: "Cisco Networking Cloud",
    description: "Remediate the highest-priority incidents with an AI-first XDR solution.",
    image: article01,
    link: "#"
  },
  {
    title: "Cisco XDR with AI Assistant",
    description: "Remediate the highest-priority incidents with an AI-first XDR solution.",
    image: article02,
    link: "#"
  },
  {
    title: "Secure Firewall 1200 Series",
    description: "Compact, all-in-one firewall for your distributed enterprise branch.",
    image: article03,
    link: "#"
  },
];


// footer
export const resourcesLinks = [
  { href: "#", text: "Online Banking" },
  { href: "#", text: "Mobile Banking" },
  { href: "#", text: "Security Tips" },
  { href: "#", text: "FAQs" },
  { href: "#", text: "Customer Support" },
];

export const platformLinks = [
  { href: "#", text: "Personal Banking" },
  { href: "#", text: "Business Banking" },
  { href: "#", text: "Credit Cards" },
  { href: "#", text: "Loans" },
  { href: "#", text: "Investment Services" },
];

export const communityLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Careers" },
  { href: "#", text: "News & Media" },
  { href: "#", text: "Community Involvement" },
  { href: "#", text: "Contact Us" },
];
