import Image from "next/image";
import person from "../../public/person.png";

export default function HomeOngoingItem(props) {
  const { group, firstText, endDate, unreadMeassage } = props;
  const unReadColor = "#FF7ACD";

  return (
    <div className="flex justify-around py-[16px] px-[10px] my-4 border-2 h-[92px] rounded-xl">
      <div className="flex items-center">
        <Image src={person} width={52} height={52} alt="user" />
      </div>
      <div className="w-4/6 ">
        <div style={{ color: "#616161" }} className="text-[12px]">{`<${group}> 조`}</div>
        <div className="truncate text-[13px] my-[2px]">{`${firstText}`}</div>
        <div style={{ color: "#252525" }} className="text-[10px]">{`마감 : ${endDate}`}</div>
      </div>
      <div
        style={{
          backgroundColor: `${unReadColor}`,
          minWidth: "16px",
          height: "16px",
        }}
        className="relative top-0 flex items-center justify-center p-[5px] text-xs text-white rounded-full w-fit left-2"
      >{`${unreadMeassage}`}</div>
    </div>
  );
}
