import ReturnBar from "@/components/ReturnBar";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";
import { green } from "@/components/ColorPallete";

export default function SetDate() {
  return (
    <div>
      <div>
        <ReturnBar link="/addteamproject/addnew" />
      </div>
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">마감 기한을 입력해주세요</h1>
      <h3
        style={{ color: "#606060", textShadow: "0.5px 1px 0px #d0d0d0" }}
        className="text-[18px] font-light"
      >
        * 추후 수정 가능합니다
      </h3>
      <div className="h-[50px]"></div>
      <div>
        <input
          type="text"
          placeholder="2023년 05월 30일"
          className={`w-full border-0 border-b-2 border-slate-300 focus:ring-0 focus:border-[${green}]`}
        />
      </div>
      <div className="h-[70px]"></div>
      <ProjectRoutingBox link="/addteamproject/addnew/code" title="" buttonText="입력 완료" />
    </div>
  );
}
