// DialogButton.tsx
import { $, component$, useSignal } from "@builder.io/qwik";
import DialogWindow from "../dialogWindow/DialogWindow";

import AiIcon from "~/media/ai-icon.png?jsx";

export default component$(() => {
  const isOpen = useSignal(false);

  return (
    <div class="fixed bottom-[54px] right-[100px] w-500">
      <button
        onClick$={() => {
          isOpen.value = !isOpen.value;
        }}
        class="transition"
      >
        {/* {isOpen.value ? "❤️" : "🤍"} */}
        <AiIcon class="" />
      </button>

      <DialogWindow isOpen={isOpen.value} />
    </div>
  );
});
