export interface Template {
  image: string;
  link: string;
  project: string;
  description: string;
};
const one: Template = {
  project: "ElevateMe",
  description: "Crafting a distinctive brand identity for ElevateMe, a fitness app, by capturing its dynamic energy and health-conscious ethos. From logo design to color palette selection, our team ensured a consistent and appealing visual representation.",
  link: "/work/case-study",
  image: "/work1.png",
};
const two: Template = {
  project: "GreenLeaf",
  description: "Transforming GreenLeaf Organic Grocers vision into a recognizable brand. We designed a logo that embodies their commitment to sustainability, and developed comprehensive brand guidelines to maintain a cohesive image across all touchpoints.",
  link: "/work/case-study",
  image: "/work2.png",
};
const three: Template = {
  project: "UrbanWander",
  description: "Breathing new life into UrbanWander, a travel platform, through a comprehensive rebrand. We conducted market analysis, refreshed their visual identity, and aligned their messaging, resulting in increased engagement and user retention.",
  link: "/work/case-study",
  image: "/work3.png",
};
const four: Template = {
  project: "GloGuide",
  description: "Developing GloGuide, a language learning app, that provides immersive experiences for users. Our team integrated real-world scenarios, gamification, and interactive exercises to make language acquisition enjoyable and effective.",
  link: "/work/case-study",
  image: "/work4.png",
};
const five: Template = {
  project: "HealthHub",
  description: "Crafting HealthHub, a wellness app, that empowers users with personalized health insights. Our developers integrated wearable device compatibility and intuitive UI to provide a seamless and insightful experience for tracking health metrics.",
  link: "/work/case-study",
  image: "/work5.png",
};
const six: Template = {
  project: "MarketMingle",
  description: "Creating MarketMingle, a social networking app, where users can connect with professionals in their industry. Our app features secure messaging, profile customization, and a streamlined interface that fosters meaningful networking interactions.",
  link: "/work/case-study",
  image: "/work6.png",
};
const seven: Template = {
  project: "CulinaryDelights",
  description: "Designing and developing CulinaryDelights, a recipe sharing website that celebrates culinary creativity. Our team built a user-friendly platform where food enthusiasts can submit, search, and discover delectable recipes.",
  link: "/work/case-study",
  image: "/work7.png",
};
const eight: Template = {
  project: "EcoLiving",
  description: "Building EcoLiving's e-commerce website, offering sustainable products. We optimized the user journey, implemented secure payment gateways, and ensured a responsive design to provide a seamless shopping experience.",
  link: "/work/case-study",
  image: "/work8.png",
};
const nine: Template = {
  project: "ArtistShowcase",
  description: "Developing ArtistShowcase, a portfolio website that showcases artists' work in a visually appealing manner. Our web design experts focused on creating an elegant layout and smooth navigation to highlight the artists' talents.",
  link: "/work/case-study",
  image: "/work9.png",
};
export const byName = {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine
};
export const work = Object.values(byName);
