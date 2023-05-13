import ReturnBar from "@/components/ReturnBar";
import Image from "next/image";
import ending from "../../../public/ending.png";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";

export default function Ending() {
  return (
    <>
      <ReturnBar link="/review/member/rating" text="팀플 끝내기" />
      <div className="h-[150px]"></div>
      <div>
        <div className="flex justify-center">
          <Image src={ending} alt="congratulations" />
        </div>
        <div className="h-[50px]"></div>
        <div className="flex flex-col items-center">
          <div className="text-[20px] font-bold mb-[14px]">이제 팀플이 모두 끝났습니다!!</div>
          <div className="text-[20px] font-bold mb-[14px]">고생 많으셨어요!</div>
        </div>
      </div>
      <ProjectRoutingBox link="/" buttonText="홈으로 돌아가기" isBottom={true} />
    </>
  );
}
