import { Download, Award, Shield, GraduationCap, Users, Headphones } from "lucide-react";
import article01 from '../assets/articles/1.jpg';
import article02 from '../assets/articles/2.jpg';
import article03 from '../assets/articles/3.jpg';
import intro1 from '../assets/intro/2.png';
import intro2 from '../assets/intro/3.png';

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

//Intro section
export const intro = [
  {
    title: "Grow your business with enterprise-grade solutions",
    description: "Unleash the potential of your small or medium business with Cisco's scalable, easy-to-operate solutions featuring intuitive IT management and round-the-clock support.",
    image: intro1,
    right: true,
  },
  {
    title: "Build network assurance expertise with Cisco U.",
    description: "Harness the power of end-to-end visibility and proactive monitoring with our free tutorials. ",
    image: intro2,
    right: false,
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
