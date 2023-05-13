import HomeOngoingItem from "./HomeOngoingItem";

export default function HomeOngoing() {
  const dummyData = [
    {
      group: "건축학개론",
      firstText: "민유 : 그러면 발표 준비는 언제까지 할까요?",
      endDate: "6월 11일",
      unReadMessage: "3",
    },
    {
      group: "인생쓰조",
      firstText: "유정 : 저희 자료조사 혹시 어디까지 됐나요??",
      endDate: "5월 29일",
      unReadMessage: "15",
    },
    {
      group: "교수님저맘에안들조",
      firstText: "민주 : 저 오늘 가족 일이 있어서 회의 참여가 어려울 것 같습니다...ㅠㅠ",
      endDate: "6월 15일",
      unReadMessage: "8",
    },
    {
      group: "블랙핑크인유얼에리어",
      firstText: "지호 : 조장 누가 하실래요...?",
      endDate: "6월 12일",
      unReadMessage: "158",
    },
    {
      group: "제왚삐",
      firstText: "진영 : 제왚삐 렛츠기릿",
      endDate: "6월 22일",
      unReadMessage: "1",
    },
  ];
  return (
    <div>
      <h1 className="mb-[14px] font-bold text-[20px]">진행중인 팀플</h1>
      {dummyData.map((data, i) => {
        return (
          <HomeOngoingItem
            key={i}
            group={data.group}
            firstText={data.firstText}
            endDate={data.endDate}
            unreadMeassage={data.unReadMessage}
          />
        );
      })}
    </div>
  );
}
