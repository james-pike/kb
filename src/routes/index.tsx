import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero3 from "~/components/widgets/Hero3";

import Services from "~/components/sections/Services";
import Menu from "~/components/sections/Menu";
import FAQ from "~/components/sections/FAQ";
import Reviews from "~/components/sections/Reviews";



export default component$(() => {
  return (
    <>
      <Hero3 />
      
  
    
<Services title="What We Do"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="Services"
              items={[]}/>

<Menu title="Gallery Of Past Work"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="Portfolio"
              items={[]}/>

<FAQ title="Frequently Asked Questions"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="FAQ"
              items={[]}/>

<Reviews title="Frequently Asked Questions"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="FAQ"
              items={[]}/>

{/* 


{/*  */}
{/* <Menu title="Gallery Of Past Work"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="Portfolio"
              items={[]}/>
     
<FAQindex title="Gallery Of Past Work"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="Portfolio"
              items={[]}/>
  
    <Contact/>  */}
    
    
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
