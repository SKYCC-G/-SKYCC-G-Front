import ReturnBar from "@/components/ReturnBar";
import TeamMember from "@/components/TeamMember";
import member from "../../../public/member.png";
import leader from "../../../public/leader.png";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";

export default function ReviewMember() {
  const team = [
    {
      icon: member,
      name: "김지호",
      role: ["자료조사"],
    },
    {
      icon: leader,
      name: "김채영",
      role: ["팀장", "발표자료 제작"],
    },
    {
      icon: member,
      name: "민유",
      role: ["앞구르기"],
    },
    {
      icon: member,
      name: "박성철",
      role: ["발표", "발표"],
    },
  ];
  return (
    <>
      <ReturnBar link="/review" text="팀플 후기 보내기" />
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">함께한 팀원들의</h1>
      <h1 className="font-semibold text-[26px]">후기를 남겨주세요</h1>
      <div className="h-[25px]"></div>
      <div>
        <div>
          <div className="text-[20px] font-bold mb-[14px]">팀원 </div>
          {team.map((member, i) => {
            return <TeamMember key={i} icon={member.icon} name={member.name} roles={member.role} />;
          })}
        </div>
      </div>
      <ProjectRoutingBox link="/review/member/rating" buttonText="보내기 시작" isBottom={true} />
    </>
  );
}
