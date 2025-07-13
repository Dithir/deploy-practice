import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Uwu" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
        <div>Welcome to the Home Page</div>   
        </>;
}
