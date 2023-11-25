import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/starter/hero/hero";
import Modal from "~/components/starter/dialogButton/DialogButton";

export default component$(() => {
  return (
    <>
      <Hero />
      <Modal/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Unity AI",
  meta: [
    {
      name: "Valentyn Zhyvotchenko",
      content: "Qwik modal window",
    },
  ],
};
