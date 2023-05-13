import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";
import ReturnBar from "@/components/ReturnBar";
import Link from "next/link";

export default function AddTeamProject() {
  return (
    <div>
      <ReturnBar link="/" />
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">팀플 추가하기</h1>
      <div className="h-[50px]"></div>
      <ProjectRoutingBox
        link="addteamproject/add"
        title="아직 팀플을 만들지 않았나요?"
        buttonText="새 팀플 만들기"
      />
      <div className="h-[80px]"> </div>
      <ProjectRoutingBox
        link="addteamproject/addnew"
        title="새 팀플이 만들어졌나요?"
        buttonText="코드 입력하고 합류하기"
      />
    </div>
  );
}
