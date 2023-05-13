import ReturnBar from "@/components/ReturnBar";
import TeamMember from "@/components/TeamMember";
import member from "../../../public/member.png";
import leader from "../../../public/leader.png";
import HomeUpcoming from "@/components/Home/HomeUpcoming";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";

export default function PageDetail() {
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
      <ReturnBar link="/chat" text="건축학개론 중간 발표 2조" />
      <div className="border-b-[1px] py-[20px] flex justify-between ">
        <div className="text-[20px] font-bold">마감</div>
        <div>2023년 6월 11일 오후 6시</div>
        <div className="text-[16px] text-[#606060]">수정</div>
      </div>
      <div>
        <div className="text-[20px] font-bold mb-[14px]">팀원 </div>
        {team.map((member, i) => {
          return <TeamMember key={i} icon={member.icon} name={member.name} roles={member.role} />;
        })}
      </div>
      <div className="flex justify-between items-center border-y-[1px] mt-[10px] mb-[25px] py-[20px]">
        <div className="text-[20px] font-bold">공유된 파일</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <HomeUpcoming />
      <ProjectRoutingBox link="/review" buttonText="팀플 끝내기!" isBottom={true} />
    </>
  );
}
