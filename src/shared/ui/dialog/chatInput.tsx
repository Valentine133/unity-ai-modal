import { component$, useSignal } from "@builder.io/qwik";

export const ChatInput = component$(() => {
  const message = useSignal("");

  return (
    <div class="flex items-center gap-4 bg-gray-700 rounded-[12px] px-3 py-1 md:py-1.5 lg:py-1">
      <button class="h-[28px] md:h-[48px] lg:h-[28px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 48"
          fill="none"
          class="w-full h-full"
        >
          <path
            d="M28.1507 35.9097C28.1507 35.9097 36.8498 26.4747 39.0245 24.1158C41.1993 21.7571 42.2867 15.8601 38.4809 11.7323C34.675 7.60446 29.2381 8.78384 27.0632 11.1426C24.8885 13.5014 13.4709 25.885 12.3835 27.0644C11.2961 28.2437 9.66506 32.3715 12.9272 35.9097C16.1894 39.4479 19.9953 37.6788 21.0827 36.4994C22.17 35.3201 34.1313 22.3468 35.2186 21.1674C36.3061 19.988 36.8498 17.0396 35.2186 15.2704C33.5876 13.5014 30.8691 14.0911 29.7818 15.2704C28.6944 16.4499 19.4516 26.4747 19.4516 26.4747"
            stroke="#656565"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <input
        type="text"
        class="flex-1 h-full px-3 md:py-2 lg:py-1 text-sm md:text-lg lg:text-sm font-normal bg-dark border-none rounded-[8px] focus:outline-none"
        placeholder="Сообщение"
        value={message.value}
      />

      <button class="bg-purple hover:bg-opacity-70 transition flex items-center justify-center h-full px-2 py-1 md:py-4 md:px-5 lg:py-1 lg:px-3 rounded-[12px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
        >
          <path
            d="M1 10.35C1 10.0738 0.776142 9.84998 0.5 9.84998C0.223858 9.84998 0 10.0738 0 10.35H1ZM18 10.35C18 10.0738 17.7761 9.84998 17.5 9.84998C17.2239 9.84998 17 10.0738 17 10.35H18ZM4.14286 22.5C3.86671 22.5 3.64286 22.7239 3.64286 23C3.64286 23.2761 3.86671 23.5 4.14286 23.5V22.5ZM13.8571 23.5C14.1333 23.5 14.3571 23.2761 14.3571 23C14.3571 22.7239 14.1333 22.5 13.8571 22.5V23.5ZM9 1.5C11.454 1.5 13.3571 3.29146 13.3571 5.40006H14.3571C14.3571 2.64848 11.911 0.5 9 0.5V1.5ZM13.3571 5.40006V12.0002H14.3571V5.40006H13.3571ZM13.3571 12.0002C13.3571 14.1088 11.454 15.9002 9 15.9002V16.9002C11.911 16.9002 14.3571 14.7517 14.3571 12.0002H13.3571ZM9 15.9002C6.54597 15.9002 4.64286 14.1088 4.64286 12.0002H3.64286C3.64286 14.7517 6.08897 16.9002 9 16.9002V15.9002ZM4.64286 12.0002V5.40006H3.64286V12.0002H4.64286ZM4.64286 5.40006C4.64286 3.29146 6.54597 1.5 9 1.5V0.5C6.08897 0.5 3.64286 2.64848 3.64286 5.40006H4.64286ZM0 10.35V12H1V10.35H0ZM0 12C0 16.5741 4.07707 20.2001 9 20.2001V19.2001C4.53407 19.2001 1 15.9312 1 12H0ZM9 20.2001C13.9229 20.2001 18 16.5741 18 12H17C17 15.9312 13.4659 19.2001 9 19.2001V20.2001ZM18 12V10.35H17V12H18ZM8.5 19.7001L8.49996 23L9.49996 23L9.5 19.7001L8.5 19.7001ZM4.14286 23.5H13.8571V22.5H4.14286V23.5Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
});
