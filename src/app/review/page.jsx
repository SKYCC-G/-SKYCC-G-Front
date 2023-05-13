import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";
import { green, lightgreen } from "@/components/ColorPallete";
import ReturnBar from "@/components/ReturnBar";

export default function Review() {
  const dummyData = [
    ["기간", "56일"],
    ["나눈 대화", "762개"],
    ["진행한 일정", "17개"],
    ["공유한 파일", "42개"],
  ];
  return (
    <div>
      <div>
        <ReturnBar link="/chat/detail" text="팀플 끝내기" />
      </div>
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">지금까지 진행한 팀플입니다!</h1>
      <div className="h-[50px]"></div>
      <div>
        <div className="text-[20px] font-bold mb-[14px]">팀플 이름</div>
        <div className="text-[18px] font-normal">건축학개론 중간 발표 2조</div>
      </div>
      <div className="h-[50px]"></div>
      <div>
        <div className="text-[20px] font-bold mb-[14px]">진행 기록 </div>
        <div
          style={{ backgroundColor: `${lightgreen}` }}
          className="py-[11.5px] px-[20px] rounded-xl"
        >
          {dummyData.map((data, i) => {
            return (
              <div key={i} className="flex justify-between items-center my-[13.5px]">
                <span className="text-[15px] ">{data[0]}</span>
                <span style={{ color: `${green}` }} className="font-bold text-[20px]">
                  {data[1]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <ProjectRoutingBox link="/review/member" buttonText="팀플 완전 끝내기!!" isBottom={true} />
    </div>
  );
}
