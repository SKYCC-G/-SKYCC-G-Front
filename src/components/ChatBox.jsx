export default function ChatBox(props) {
  const { isMe, children } = props;
  const boxColor = isMe ? "bg-yellow-400" : "bg-white";
  const boxPosition = isMe ? "justify-end" : "justify-start";

  return (
    <div className={`flex ${boxPosition} w-full px-5`}>
      <div className={`${boxColor}   rounded-xl w-fit px-4 py-1 mb-2 `}>{children}</div>
    </div>
  );
}
