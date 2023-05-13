import Image from "next/image";
import Role from "./Role";

export default function TeamMember(props) {
  const { icon, name, roles } = props;
  return (
    <div className="flex justify-start items-center gap-[12px] my-[10px]">
      <Image src={icon} width={35} height={35} alt="icon" />
      <div>{name}</div>
      {roles.map((role, i) => {
        return <Role role={role} key={i} />;
      })}
    </div>
  );
}
