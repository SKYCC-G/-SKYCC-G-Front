import Link from "next/link";
import { green } from "../ColorPallete";

export default function ProjectRoutingBox(props) {
  const { link, title, buttonText, isBottom } = props;

  const position = isBottom ? "absolute bottom-7 w-[calc(100%-40px)]" : "w-full";

  return (
    <div className={`h-[160px]`}>
      {title && <h1 className="font-semilbold text-[20px] text-center mb-[20px]">{title}</h1>}
      <Link href={link}>
        <button
          style={{ backgroundColor: `${green}` }}
          className={`h-[66px] py-[10px] text-center text-white text-[20px] rounded-xl ${position}`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
