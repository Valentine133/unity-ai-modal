// DialogButton.tsx
import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import DialogWindow from "../dialogWindow/DialogWindow";

import AiIcon from "~/media/ai-icon.png?jsx";

export default component$(() => {
  const isOpen = useSignal(false);
  const isActive = useSignal(false);
  const isSpeech = useSignal(true);
  const isLangChange = useSignal(false);

  useTask$(({ track, cleanup }) => {
    const activeValue = track(() => isActive.value);

    const debounced = setTimeout(() => {
      isOpen.value = activeValue;
    }, 2000);

    cleanup(() => clearTimeout(debounced));
  });

  return (
    <div class="container-custom justify-end fixed right-[50%] translate-x-[50%] bottom-[30px] xl:bottom-[52px] pointer-events-none">
      <div class="flex flex-col items-center lg:items-end ">
        <div
          class={`w-[310px] flex pointer-events-auto items-center justify-center lg:mr-10 bg-dark rounded-[30px] border-[6px] border-black outline outline-2 outline-purple transition relative z-10
          ${isActive.value ? "visible h-[80px] p-3" : "invisible p-0"}
          ${isOpen.value ? "translate-y-[50%]" : ""}
        `}
        >
          <button
            class="btn-gray-circle px-2 -mr-4 w-[86px]"
            onClick$={() => {
              isSpeech.value = !isSpeech.value;
            }}
          >
            {isSpeech.value ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11.0002 2.75V19.25C7.79183 19.25 5.40781 15.0513 5.40781 15.0513H2.75016C2.2439 15.0513 1.8335 14.6409 1.8335 14.1346V7.79662C1.8335 7.29034 2.2439 6.87995 2.75016 6.87995H5.40781C5.40781 6.87995 7.79183 2.75 11.0002 2.75Z"
                    fill="#8B5CF6"
                    stroke="#8B5CF6"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6665 6.875C14.9521 7.13006 15.2111 7.4157 15.4384 7.72695C16.1051 8.63977 16.4998 9.77272 16.4998 11C16.4998 12.2166 16.1119 13.3406 15.4557 14.2493C15.2242 14.5697 14.9594 14.8634 14.6665 15.125"
                    stroke="#8B5CF6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.6914 18.8773C18.3716 17.2775 20.1666 14.3486 20.1666 11.0005C20.1666 7.70438 18.4269 4.81459 15.8157 3.19922"
                    stroke="#8B5CF6"
                    stroke-linecap="round"
                  />
                </svg>
                ON
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.9997 2.75V19.25C7.79134 19.25 5.40732 15.0513 5.40732 15.0513H2.74967C2.24341 15.0513 1.83301 14.6409 1.83301 14.1346V7.79662C1.83301 7.29034 2.24341 6.87995 2.74967 6.87995H5.40732C5.40732 6.87995 7.79134 2.75 10.9997 2.75Z"
                    fill="#404040"
                    stroke="#404040"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 8L19 15"
                    stroke="#404040"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19 8L14 15"
                    stroke="#404040"
                    stroke-linecap="round"
                  />
                </svg>
                OFF
              </>
            )}
          </button>

          <button
            onClick$={() => {
              isActive.value = !isActive.value;
            }}
            class={`transition-all duration-500 z-5 ${
              isActive.value ? "scale-50 -translate-y-2" : "h-[124px] w-[124px]"
            }`}
            disabled={isOpen.value ? true : false}
          >
            <AiIcon
              class={`animate-pulse max-w-[inherit] ${
                isActive.value ? "" : "visible"
              }`}
            />
          </button>

          <div class="flex items-center gap-2 -ml-5">
            <button
              class={`btn-gray-circle`}
              onClick$={() => {
                isLangChange.value = !isLangChange.value;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                class={`rounded-full border border-white`}
              >
                <rect
                  x="-6.72266"
                  y="-0.5"
                  width="44.4444"
                  height="32"
                  rx="1.77778"
                  fill="white"
                />
                <mask
                  id="mask0_4311_879"
                  style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="-7"
                  y="-1"
                  width="45"
                  height="33"
                >
                  <rect
                    x="-6.72266"
                    y="-0.5"
                    width="44.4444"
                    height="32"
                    rx="1.77778"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_4311_879)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M-6.72266 16.5667H37.7218V-0.5H-6.72266V16.5667Z"
                    fill="#156DD1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M-6.72266 31.5002H37.7218V16.5669H-6.72266V31.5002Z"
                    fill="#FFD948"
                  />
                </g>
              </svg>
            </button>

            <button
              class="btn-gray-circle aspect-square"
              onClick$={() => {
                isOpen.value = !isOpen.value;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                class={`transition ${isOpen.value ? "rotate-0" : "rotate-180"}`}
              >
                <path
                  d="M11 1L11 21M11 21L21 11M11 21L1 11"
                  stroke="#767676"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <DialogWindow isOpen={isOpen.value} />
      </div>
    </div>
  );
});
function createEffect(arg0: () => () => void, arg1: import("@builder.io/qwik").Signal<boolean>[]) {
  throw new Error("Function not implemented.");
}

