import Image from "next/image";
import person from "../../public/person.png";

export function HomeHeader() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>Logo</div>
        <Image src={person} width={40} height={40} alt="user" />
      </div>
    </>
  );
}
