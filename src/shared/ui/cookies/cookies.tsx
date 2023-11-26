import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const isOpen = useSignal(true);
  const cookiesOpen = isOpen.value ? "block opacity-100" : "hidden opacity-0";

  return (
    <div
      class={`${cookiesOpen} grid grid-flow-row-dense grid-cols-2 md:grid-cols-1 lg:grid-cols-3 grid-rows-2 md:gap-2 items-center py-4 px-5 lg:px-4 lg:pl-8 min-w-full md:min-w-[200px] md:w-fit bg-black md:bg-grayCustom rounded-[20px] lg:rounded-full pointer-events-auto`}
    >
      <p class="col-span-2 md:col-span-1 lg:col-span-2 uppercase font-[14px]">
        THIS WEBSITE USES COOKIES.
      </p>
      <a
        href="#"
        class="col-span-1 lg:col-span-2 text-white font-bold uppercase"
      >
        Learn more
      </a>
      <button
        onClick$={() => {
          isOpen.value = !isOpen.value;
        }}
        class="col-span-1 lg:row-span-2 lg:ml-4 uppercase p-[10px] h-[52px] rounded-[50px] bg-gray-700"
      >
        accept
      </button>
    </div>
  );
});