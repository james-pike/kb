import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Menu from "~/components/sections/Gallery";




import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<Menu title="Explore Our Menu"
        subtitle="Featuring expertly crafted coffee, tea lattes, and cold drinks."
        highlight="Menu"
        items={[
          {
            title: "Do you have vegetarian or gluten-free options?",
            description:
              "Yes! We offer a variety of vegetarian, vegan, and gluten-free options. Just ask our staff for recommendations!",
          },
      
          {
            title: "Do you offer takeout?",
            description:
              "Yes, all of our food and drinks are available for takeout. Just let us know when you place your order, and we’ll pack it up for you.",
          },
          {
            title: "Can I bring my laptop and work from the café?",
            description:
              "Of course! We have free Wi-Fi and plenty of outlets, making our café a great spot for remote work or studying.",
          },
          {
            title: "Do you take reservations?",
            description:
              "We operate mostly on a walk-in basis, but for larger groups or special occasions, feel free to give us a call to arrange a reservation.",
          },
          {
            title: "Is there outdoor seating available?",
            description:
              "Absolutely! Enjoy your coffee or meal in our cozy outdoor seating area, perfect for sunny days and fresh air.",
          },
          {
            title: "What are your opening hours?",
            description:
              "We’re open daily from 7 AM to 8 PM. Join us for a morning coffee, a relaxed lunch, or an evening treat!",
          },
          {
            title: "Do you have vegetarian or gluten-free options?",
            description:
              "Yes! We offer a variety of vegetarian, vegan, and gluten-free options. Just ask our staff for recommendations!",
          },
      
          {
            title: "Do you offer takeout?",
            description:
              "Yes, all of our food and drinks are available for takeout. Just let us know when you place your order, and we’ll pack it up for you.",
          },
          {
            title: "Can I bring my laptop and work from the café?",
            description:
              "Of course! We have free Wi-Fi and plenty of outlets, making our café a great spot for remote work or studying.",
          },
          {
            title: "Do you take reservations?",
            description:
              "We operate mostly on a walk-in basis, but for larger groups or special occasions, feel free to give us a call to arrange a reservation.",
          },
    
        ]}/>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
