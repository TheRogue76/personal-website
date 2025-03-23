import type { Route } from "./+types/home";
import { Home } from "~/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Parsa Nasirimehr" },
    { name: "description", content: "Welcome to my personal website" },
    { lang: 'en' }
  ];
}

export default function HomeRoute() {
  return <Home />;
}
