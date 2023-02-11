import tour_1 from "./images/tour-1.jpeg";
import tour_2 from "./images/tour-2.jpeg";
import tour_3 from "./images/tour-3.jpeg";
import tour_4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", className: "facebook" },
  { id: 2, href: "https://www.twitter.com", className: "twitter" },
  { id: 3, href: "https://www.twitter.com", className: "squarespace" },
];

export const services = [
  { id: 1, className: "wallet", text: "saving money" },
  { id: 2, className: "tree", text: "endless hiking" },
  { id: 3, className: "socks", text: "amazing comfort" },
];

export const tours = [
  {
    id: 1,
    image: tour_1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "china",
    duration: "6",
    price: "2100",
  },
  {
    id: 2,
    image: tour_2,
    date: "october 1st, 2022",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "indonesia",
    duration: "11",
    price: "1400",
  },
  {
    id: 3,
    image: tour_3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "hong kong",
    duration: "8",
    price: "5000",
  },
  {
    id: 4,
    image: tour_4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "kenya",
    duration: "20",
    price: "3300",
  },
];
