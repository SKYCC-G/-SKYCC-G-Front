import ReturnBar from "@/components/ReturnBar";
import bad from "../../../../public/bad.png";
import good from "../../../../public/good.png";
import best from "../../../../public/best.png";

import Image from "next/image";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";

export default function MemberRating() {
  const questions = [
    "메시지 응답이 빨라요",
    "앞구르기를 예술적으로 해요",
    "말빨이 엄청나요",
    "계획을 철저히 지켜요",
    "열정이 넘쳐흘러요",
    "열심히 하려는 마음이 없어보여요",
  ];
  return (
    <>
      <ReturnBar link="/review/member" text="팀플 후기 보내기" />
      {/* 넘버링은 시간 남으면 */}
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">김지호(자료조사) 팀원은</h1>
      <h1 className="font-semibold text-[26px]">어땠나요?</h1>
      <div className="h-[25px]"></div>
      <div className="flex justify-between">
        <div className="flex flex-col items-center gap-[10px]">
          <Image src={bad} alt="bad" />
          <div className="text-[#898989] hover:text-[#00AF60]">별로예요</div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Image src={good} alt="good" />
          <div className="text-[#898989] hover:text-[#00AF60]">좋아요</div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Image src={best} alt="best" />
          <div className="text-[#898989] hover:text-[#00AF60]">최고예요</div>
        </div>
      </div>
      <div className="h-[30px]"></div>
      <div className="text-[20px] font-bold mb-[14px]">어떤 점이 좋았나요?</div>
      <div className="h-[20px]"></div>
      <div className="">
        {questions.map((q, i) => {
          return (
            <div key={i} className="flex items-center gap-[20px] mb-[22px]">
              <input
                type="checkbox"
                className="border-2 border-[#D1D1D1] rounded-xs accent-pink-500"
              />
              <label>{q}</label>
            </div>
          );
        })}
      </div>
      <ProjectRoutingBox link="/review/member/rating/final" buttonText="작성완료" isBottom={true} />
    </>
  );
}
