// DialogWindow.tsx
import { component$ } from "@builder.io/qwik";

const DialogWindow: component$ = ({ isOpen }) => {
  const dialogClasses = isOpen ? "h-[500px] visible opacity-100" : "h-0 invisible opacity-0 py-0";

  return (
    <div
      class={`${dialogClasses} dialog-card transition-all duration-300 flex flex-col justify-end pointer-events-auto relative z-0`}
    >
      <p>Dialog Content Goes Here</p>
    </div>
  );
};

export default DialogWindow;
