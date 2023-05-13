import ReturnBar from "@/components/ReturnBar";
import member from "../../../../../public/member.png";
import leader from "../../../../../public/leader.png";
import Image from "next/image";
import Role from "@/components/Role";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";

export default function Final() {
  const team = [
    {
      icon: member,
      name: "김지호",
      role: ["자료조사"],
      rating: "최고예요!",
    },
    {
      icon: leader,
      name: "김채영",
      role: ["팀장", "발표자료 제작"],
      rating: "좋아요!",
    },
    {
      icon: member,
      name: "민유",
      role: ["앞구르기"],
      rating: "별로예요",
    },
    {
      icon: member,
      name: "박성철",
      role: ["발표", "발표"],
      rating: "최고예요!",
    },
  ];
  return (
    <>
      <div>
        <ReturnBar link="/member/rating" text="팀플 후기 보내기" />
        <div className="h-[50px]"></div>
        <h1 className="font-semibold text-[26px]">작성한 후기</h1>
        <div>
          {team.map((m, i) => {
            return (
              <div key={i} className="flex gap-[20px] my-[11px] border-2 p-[15px] rounded-xl">
                <Image src={m.icon} width={35} height={35} alt="icon" />
                <div>
                  <div>{m.name}</div>
                  <div className="text-[14px] text-[#00AF60]">{m.rating}</div>
                </div>
                {m.role.map((r, i) => {
                  return <Role key={i} role={r} />;
                })}
              </div>
            );
          })}
        </div>
        <ProjectRoutingBox link="/review/ending" buttonText="후기 보내기!" isBottom={true} />
      </div>
    </>
  );
}
