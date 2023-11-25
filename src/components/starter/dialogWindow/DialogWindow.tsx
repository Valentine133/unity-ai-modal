// DialogWindow.tsx
import { component$ } from "@builder.io/qwik";

interface DialogWindowProps {
  isOpen: boolean;
}

const DialogWindow: component$<DialogWindowProps> = ({ isOpen }) => {
  const dialogClasses = isOpen ? "h-[500px]" : "h-0";

  return (
    <div
      class={`${dialogClasses} bg-white transition-all`}
    >
      <p>Dialog Content Goes Here</p>
    </div>
  );
};

export default DialogWindow;
