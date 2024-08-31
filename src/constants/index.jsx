import { Wallet, Banknote, Globe, ShieldCheck, UserCheck, PieChart } from "lucide-react"; 
import {  UserPlus, CreditCard, User, MapPin } from "lucide-react";

//Navbar
export const navItems = [
  { label: "Products & Services", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Support", href: "#" },
];

//features section
export const features = [
  {
    icon: <Wallet />,
    text: "Secure Transactions",
    description:
      "Ensure your financial transactions are secure with top-notch encryption and security protocols.",
  },
  {
    icon: <Banknote />,
    text: "Account Management",
    description:
      "Easily manage your accounts, view statements, and track your spending with our intuitive account management tools.",
  },
  {
    icon: <Globe />,
    text: "Global Accessibility",
    description:
      "Access your account and perform transactions from anywhere in the world with our global banking services.",
  },
  {
    icon: <ShieldCheck />,
    text: "Fraud Protection",
    description:
      "Benefit from advanced fraud detection and protection measures to keep your account safe from unauthorized access.",
  },
  {
    icon: <UserCheck />,
    text: "Customer Support",
    description:
      "Get assistance whenever you need it with our 24/7 customer support and personalized help.",
  },
  {
    icon: <PieChart />,
    text: "Financial Insights",
    description:
      "Analyze your spending habits and get financial insights with our easy-to-use analytics dashboard.",
  },
];

//offers section
export const offers = [
  {
    title: "Earn 5% Interest on Your Savings",
    description: "Boost your savings with a 5% annual interest rate on all savings accounts. Limited time offer!",
    buttonText: "Open Account",
    buttonColor: "bg-blue-800",
    newLabel: true
  },
  {
    title: "No Fees for New Checking Accounts",
    description: "Open a new checking account with no monthly fees for the first year. Act now!",
    buttonText: "Sign Up",
    buttonColor: "bg-green-600",
    newLabel: false
  },
  {
    title: "Get a $100 Bonus for Referrals",
    description: "Refer a friend to our bank and get a $100 bonus when they open a new account. There's no limit to how many you can earn!",
    buttonText: "Refer Now",
    buttonColor: "bg-yellow-500",
    newLabel: true
  }
];

//services section
export const services = [
  {
    title: "Open an Account",
    icon: <UserPlus />
  },
  {
    title: "Make a Loan Payment",
    icon: <CreditCard />
  },
  {
    title: "Find a Mortgage Loan Officer",
    icon: <User />
  },
  {
    title: "Visit a Branch",
    icon: <MapPin />
  }
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
