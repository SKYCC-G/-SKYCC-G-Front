import ChatBox from "@/components/ChatBox";

export default function Chat() {
  return (
    <div>
      <div className="w-full pt-5">
        <ChatBox isMe={true}>아니</ChatBox>
        <ChatBox isMe={false}>뭐가</ChatBox>
        <ChatBox isMe={true}>연락 좀 빨리 보라고</ChatBox>
        <ChatBox isMe={true}>자료 조사 어디까지 함?</ChatBox>
        <ChatBox isMe={true}>나 저녁 약속이라 빨리 해야됨</ChatBox>
      </div>
      <div className="absolute bottom-0" id="user-input">
        <input type="text" id="user-message" placeholder="Type your message..." />
        <button id="send-button">Send</button>
      </div>
    </div>
  );
}
