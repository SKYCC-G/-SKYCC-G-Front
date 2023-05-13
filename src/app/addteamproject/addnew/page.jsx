import ReturnBar from "@/components/ReturnBar";
import { green } from "@/components/ColorPallete";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";

export default function AddNew() {
  return (
    <div>
      <div>
        <ReturnBar link="/addteamproject" />
      </div>
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">팀플 이름을 입력해주세요</h1>
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
          placeholder="건축학 개론 2조"
          className={`w-full border-0 border-b-2 border-slate-300 focus:ring-0 focus:border-[${green}]`}
        />
      </div>
      <div className="h-[70px]"></div>
      <ProjectRoutingBox link="/addteamproject/addnew/setdate" title="" buttonText="입력 완료" />
    </div>
  );
}
