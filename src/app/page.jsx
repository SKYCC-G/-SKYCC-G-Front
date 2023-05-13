import { HomeHeader } from "@/components/Home/HomeHeader";
import HomeOngoing from "@/components/Home/HomeOngoing";
import HomeUpcoming from "@/components/Home/HomeUpcoming";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-[20px] mt-[25px]">
      <HomeHeader></HomeHeader>
      <HomeUpcoming></HomeUpcoming>
      <HomeOngoing></HomeOngoing>
      <Link href="/addteamproject">
        <button
          style={{
            backgroundColor: "#00AF60",
            position: "fixed",
            bottom: "30px",
            right: "40px",
          }}
          className="w-[100px] h-[48px] font-bold text-[21px] text-white rounded-xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
        >
          + 추가
        </button>
      </Link>
      {/* <Link href="/chat">Move to Chat</Link> */}
    </div>
  );
}
