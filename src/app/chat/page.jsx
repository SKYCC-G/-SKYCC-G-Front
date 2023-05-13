import ChatBox from "@/components/ChatBox";

export default function Chat() {
  return (
    <div className="flex">
      <>
      <ChatHeader conversation={conversation} />

      <div id="chatbot-container">
    <div className="w-full mt-16 pt-5">
      <ChatBox isMe={true}>아니</ChatBox>
      <ChatBox isMe={false}>뭐가</ChatBox>
      <ChatBox isMe={true}>연락 좀 빨리 보라고오오</ChatBox>
      <ChatBox isMe={true}>자료 조사 어디까지 함?</ChatBox>
      <ChatBox isMe={true}>나 저녁 약속이라 빨리 해야됨</ChatBox>
      </div>
      <ChatView
              replyInfo={replyInfo}
              setReplyInfo={setReplyInfo}
              inputSectionOffset={inputSectionOffset}
              conversation={conversation}
      />
      <InputSection
              setInputSectionOffset={setInputSectionOffset}
              replyInfo={replyInfo}
              setReplyInfo={setReplyInfo}
              disabled={false}
      />

    </>
    </div>

  );
}
<div style={{backgroundColor : "rgba(191, 219, 254, 0.1)"}}>
<div style={{backgroundColor : "rgba(191, 219, 254, 0.7)"}} className="gap-5 space-between fixed top-0 box-border bg-blue-100 h-18 w-full p-5">
  <button id="back-button" >⟨⟨</button><strong>블랙팬서</strong>
</div>

  <div id="chatbot-container">
    <div className="w-full mt-16 pt-5">
      <ChatBox isMe={true}>아니</ChatBox>
      <ChatBox isMe={false}>뭐가</ChatBox>
      <ChatBox isMe={true}>연락 좀 빨리 보라고오오</ChatBox>
      <ChatBox isMe={true}>자료 조사 어디까지 함?</ChatBox>
      <ChatBox isMe={true}>나 저녁 약속이라 빨리 해야됨</ChatBox>
  </div>
</div>

<div className="absolute bottom-0 box bg-slate-100 text-white px-2 w-full h-200" id="user-input">
  <input type="text" id="user-message" placeholder="Type your message..." />
  <button id="send-button">Send</button>
</div>
</div>
