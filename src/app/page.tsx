import Sidebar from "@/components/Sidebar/page";
import About from "./pages/About/page";
import Projects from "./pages/Projects/page";
import Stack from "./pages/Stack/page";


export default function Home() {
  return (
    <div className="w-full p-2 h-screen flex">
      <div className="w-[300px] h-full p-3">
        <Sidebar />
      </div>
      <div className="bg-white border rounded-xl shadow-sm w-full h-full flex justify-center">
        <About />
        <Projects />
        <Stack />
      </div>
    </div>
  );
}
