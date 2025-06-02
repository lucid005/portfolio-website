import {
  techs_backend_tools,
  techs_frontend_tools,
  techs_tools,
} from "@/data/MyData";
import Image from "next/image";

const TechToolCard = () => {
  return (
    <div className="grid grid-cols-2 w-full">
      {techs_tools.map((items, index) => (
        <div key={index} className="flex w-full items-center gap-1 ">
          <Image src={items.dark_logo} width={200} height={200} alt="logo" className="w-[80px]" />
          <div>
            <p>{items.title}</p>
            <span>{items.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const TechFrontendCard = () => {
  return (
    <div  className="grid grid-cols-2 w-full">
      {techs_frontend_tools.map((items, index) => (
        <div key={index}>
          <Image src={items.dark_logo} width={60} height={60} alt="logo" />
          <div>
            <p>{items.title}</p>
            <span>{items.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const TechBackendCard = () => {
  return (
    <div  className="grid grid-cols-2 w-full">
      {techs_backend_tools.map((items, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export { TechToolCard, TechFrontendCard, TechBackendCard };
