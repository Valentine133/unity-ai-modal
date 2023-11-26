import { component$ } from "@builder.io/qwik";

import { ChatInput } from "~/shared/ui/dialog/chatInput";
import { ChatMessageLeft } from "~/shared/ui/dialog/chatMessageLeft";
import { ChatMessageRight } from "~/shared/ui/dialog/chatMessageRight";

const DialogWindow = component$(({ isOpen }) => {
  const dialogClasses = isOpen
    ? "h-[500px] visible opacity-100"
    : "h-0 invisible opacity-0 py-0";

     const messages = [
       {
         text: "Как заработать миллион деняк уделяя в день 5 минут? ",
         from: "right",
       },
       {
         text: "Добрый день, меня зовут Юнити! Я ваш персональный помошник.",
         from: "left",
       },
       // ...
     ];

  return (
    <div
      class={`${dialogClasses} dialog-card transition-all duration-300 flex flex-col justify-end pointer-events-auto relative z-0`}
    >
      <div class="flex flex-col flex-grow justify-end overflow-y-auto">
        {messages.map((msg, index) =>
          msg.from === "left" ? (
            <ChatMessageLeft key={index} message={msg.text} />
          ) : (
            <ChatMessageRight key={index} message={msg.text} />
          )
        )}
      </div>
      <ChatInput />
    </div>
  );
});

export default DialogWindow;
