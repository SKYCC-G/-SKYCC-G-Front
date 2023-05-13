import Link from "next/link";

export default function ReturnBar(props) {
  const { link, text } = props;
  const isTextStyle = text ? "border-b-[1px] pb-[20px]" : null;

  return (
    <div className={`flex justify-between ${isTextStyle} `}>
      <Link href={link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </Link>
      {text && <div className="font-bold text-[20px]">{text}</div>}
      <div className="w-10"></div>
    </div>
  );
}
