import { green } from "@/components/ColorPallete";
import ReturnBar from "@/components/ReturnBar";
import Link from "next/link";

export default function Code() {
  return (
    <div>
      <div>
        <ReturnBar link="/addteamproject/add" />
      </div>
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">합류하게 되는 팀플입니다.</h1>

      <div className="h-[50px]"></div>
      <div>
        <div className="text-[15px] font-bold mb-[13px]">팀플 이름</div>
        <div className="text-[20px] font-bold">건축학개론 중간 발표 2조</div>
      </div>
      <div className="h-[40px]"></div>
      <div>
        <div className="text-[15px] font-bold mb-[13px]">마감 기한</div>
        <div className="text-[20px] font-bold">2023. 06. 11</div>
      </div>

      <div className="h-[70px]"></div>
      <div className="absolute bottom-10 w-[calc(100%-40px)] flex gap-[10px]">
        <div className="flex justify-center items-center w-[calc(50%-10px)] h-[66px] text-[20px] rounded-xl bg-[#EDEDED] text-[#606060]">
          <Link href="/addteamproject/add">다시 입력하기</Link>
        </div>
        <div className="flex justify-center items-center w-[calc(50%-10px)] h-[66px] text-[20px] rounded-xl bg-[#00AF60] text-white">
          <Link href="/">합류하기</Link>
        </div>
      </div>
    </div>
  );
}
