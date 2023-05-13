import ReturnBar from "@/components/ReturnBar";
import ProjectRoutingBox from "@/components/AddTeamProject/ProjectRoutingBox";
import { green } from "@/components/ColorPallete";

export default function Code() {
  return (
    <div>
      <div>
        <ReturnBar link="/addteamproject/addnew/setdate" />
      </div>
      <div className="h-[50px]"></div>
      <h1 className="font-semibold text-[26px]">새로운 팀플이 생성되었습니다!</h1>
      <h3
        style={{ color: "#606060", textShadow: "0.5px 1px 0px #d0d0d0" }}
        className="text-[18px] font-light"
      >
        팀원들에게 코드를 공유하세요.
      </h3>
      <div className="h-[50px]"></div>
      <div className="text-center">
        <div className="text-[14px] font-light mb-1">건축학개론 2조</div>
        <div className="mb-2">팀플 합류 코드</div>
        <div className="flex justify-between w-full border-2 py-[12px] px-[20px] rounded-xl">
          <div className="w-[20px] font-semibold"></div>
          <div className="text-[30px] font-bold">
            {Math.floor(Math.random() * 999)} {Math.floor(Math.random() * 999)}
          </div>
          <button className="">복사</button>
        </div>
        <div className="mt-4 text-[15px] text-[#606060]">* 코드는 3시간 후 만료됩니다.</div>
      </div>
      <ProjectRoutingBox link="/" title="" buttonText="팀플 시작하기" isBottom={true} />
    </div>
  );
}
