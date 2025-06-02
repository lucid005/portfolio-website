import { GoDotFill } from "react-icons/go";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mb-20 md:mb-0">
      <hr className="w-full" />
      <div className="flex items-center gap-5 text-sm text-[#7C7F82]">
        <p>
          Let's{" "}
          <a href="/Contact" className=" underline">
            Chat
          </a>
        </p>
        <GoDotFill />
        <p>@2024 Saurav Shrestha Portfolio</p>
      </div>
    </div>
  );
}
