
import Sidebar from "@/components/Sidebar";
import About from "./pages/About/page";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div>
        <About />
      </div>
    </div>
  );
}
