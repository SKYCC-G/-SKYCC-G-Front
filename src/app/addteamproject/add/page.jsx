import ReturnBar from "@/components/ReturnBar";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";
import { green } from "@/components/ColorPallete";

export default function Add() {
  return (
    <div>
      <div>
        <ReturnBar link="/addteamproject" />
      </div>
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">팀플 합류 코드를 입력해주세요.</h1>
      <h3
        style={{ color: "#606060", textShadow: "0.5px 1px 0px #d0d0d0" }}
        className="text-[18px] font-light"
      >
        * 코드는 3시간만 유효합니다.
      </h3>
      <div className="h-[50px]"></div>
      <div>
        <input
          type="text"
          placeholder="123-456"
          className={`w-full border-0 border-b-2 border-slate-300 focus:ring-0 focus:border-[${green}]`}
        />
      </div>
      <div className="h-[70px]"></div>
      <ProjectRoutingBox link="/addteamproject/add/code" title="" buttonText="입력 완료" />
    </div>
  );
}
