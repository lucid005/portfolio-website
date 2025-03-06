import Image from "next/image";

export default function Sidebar() {
  return (
    <div>
      <div>
        <Image
          src={"/Profile.jpg"}
          width={60}
          height={60}
          alt="profile-img"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p>Saurav Shrestha</p>
          <span>Web Developer</span>
        </div>
      </div>
      <div></div>
    </div>
  );
}