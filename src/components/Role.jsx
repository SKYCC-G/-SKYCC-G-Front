import { green, lightgreen } from "./ColorPallete";

export default function Role(props) {
  const { role } = props;
  return (
    <div
      style={{ backgroundColor: `${lightgreen}`, color: `${green}` }}
      className="px-[10px] py-[8px] h-fit rounded-xl"
    >
      {role}
    </div>
  );
}
