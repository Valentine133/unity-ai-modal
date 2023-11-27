import { component$ } from "@builder.io/qwik";

import AiMobile from "~/media/im-unity.png?jsx";

export default component$(() => {
  return (
    <div class="top-section relative overflow-hidden">
      <div class="absolute right-1/2 md:right-0 top-[110px] translate-x-[50%] md:translate-x-[45%] w-[301px] h-[301px] lg:w-[591px] lg:h-[591px] rounded-full bg-radial-gradient-blur"></div>
      <div class="container-custom">
        <div class="flex flex-col md:hidden gap-4 h-screen text-center items-center justify-center">
          <AiMobile class="w-[220px]" />
          <h3 class="">Unique AI</h3>
          <h2 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-purple to-blue">
            Hi _)
            <br /> i am unity
          </h2>
          <h4>
            AI Unity is UWP Digital's own development for everyday life and
            business
          </h4>
        </div>
        <div class="hidden md:flex h-screen text-center flex-col gap-10 items-center justify-center relative">
          <h1 class="2xl:text-[120px]">
            Your reliable digital marketing partner
          </h1>
          <h4 class="max-w-[661px] mx-auto text-center">
            We are a full-service digital marketing agency focused on your
            success. We do not sell ideas. We sell a solution for your business
            needs.
          </h4>
          <a
            href="#"
            target="_blank"
            class="xl:absolute mr-auto ml-16 xl:ml-0 left-12 bottom-[24vh] 2xl:left-[15vw] 2xl:bottom-[18vh] hidden md:flex flex-col btn-red-circle leading-5 w-[133px] xl:w-[177px] aspect-square"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6083 4.72828L11.6083 14.4478L14 14.4478L14 0.353759L0.84559 0.353759L0.84559 2.91631L9.91709 2.91631L1.82814e-06 13.5418L1.69118 15.3538L11.6083 4.72828Z"
                fill="white"
              />
            </svg>
            Discuss the project
          </a>
        </div>
      </div>
    </div>
  );
});
