import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
export const navLinks = [
  { id: 1, href: "#home", content: "home" },
  { id: 2, href: "#about", content: "about" },
  { id: 3, href: "#service", content: "service" },
  { id: 4, href: "#tour", content: "tour" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const servicesList = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    header: "saving money",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    header: "endless hiking",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    header: "amazing comfort",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tourList = [
  {
    id: 1,
    img: tour1,
    date: "August 26th, 2020",
    tourTitle: "Tibet Adventure",
    tourContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: "October 1th, 2020",
    tourTitle: "Best Of Indonesia",
    tourContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "September 15th, 2020",
    tourTitle: "Explore Hong Kong",
    tourContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "December 5th, 2019",
    tourTitle: "Kenya Highlights",
    tourContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: 20,
    price: 3300,
  },
];
