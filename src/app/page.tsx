
import Sidebar from "@/components/Sidebar";
import About from "./pages/About/page";
import MyProjects from "./pages/MyProjects/page";
import TechStack from "./pages/TechStack/page";

export default function Home() {
  return (
    <div className="w-full h-screen fixed">
      <Sidebar />
      <div>
        <About />
        <MyProjects />
        <TechStack />
      </div>
    </div>
  );
}
