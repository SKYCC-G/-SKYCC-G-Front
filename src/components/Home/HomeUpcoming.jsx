export default function HomeUpcoming() {
  const keyColor = "#FF7ACD";
  const textColor = "#949191";
  return (
    <div className="mb-[36px]">
      <h1 className="mb-[25px] font-bold text-[20px]">다가오는 일정</h1>
      <div className="flex items-center justify-start h-32 gap-6 px-2 py-[20px]  border-2 rounded-xl">
        <div style={{ backgroundColor: `${keyColor}` }} className="w-2 h-full rounded-xl"></div>
        <div style={{ color: `${keyColor}` }} className="mx-5 text-2xl">
          <div>23</div>
          <div>NOV</div>
        </div>
        <div>
          <div style={{ color: `${keyColor}` }}>건축학개론 기말 발표</div>
          <div style={{ color: `${textColor}` }}>23 Nov - 24 Nov</div>
          <div style={{ color: `${textColor}` }}> Online Remote</div>
        </div>
      </div>
    </div>
  );
}
