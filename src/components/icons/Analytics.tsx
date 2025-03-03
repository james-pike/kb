import { component$ } from '@builder.io/qwik';

export const AnimatedSVG = component$(() => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Inline styles */}
      <style>
        {`
          .drawable {
            stroke-dasharray: 1000; /* Large initial value; refine with JS if needed */
            stroke-dashoffset: 1000;
            animation: draw 2s ease-in-out forwards;
          }

          /* Staggered delays */
          #path1 { animation-delay: 0s; }
          #path2 { animation-delay: 0.5s; }
          #path3 { animation-delay: 1s; }
          #path4 { animation-delay: 1.5s; }
          #path5 { animation-delay: 2s; }
          #path6 { animation-delay: 2.5s; }
          #path7 { animation-delay: 3s; }
          #path8 { animation-delay: 3.5s; }
          #path9 { animation-delay: 4s; }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }

          .filled {
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            animation: none;
          }
        `}
      </style>

      {/* SVG Paths */}
      <path
        id="path1"
        class="filled"
        d="M670.1 857.7H206.2c-27.6 0-50-22.4-50-50V331.1c0-27.6 22.4-50 50-50H670c27.6 0 50 22.4 50 50v476.6c0.1 27.7-22.3 50-49.9 50z"
        fill="#FFFFFF"
      />
      <path
        id="path2"
        class="filled"
        d="M669 299.3H205.1c-16.5 0-30 13.5-30 30v75.9H699v-75.9c0-16.5-13.5-30-30-30z"
        fill="#E6E6E6"
      />
      <path
        id="path3"
        class="drawable"
        d="M859 159.3c-15.4-12.3-35.5-19-56.7-19H363.6c-21.2 0-41.4 6.8-56.7 19-16.4 13.1-25.9 31.7-25.9 51v49h-75.9c-38.6 0-70 31.4-70 70v476.6c0 38.6 31.4 70 70 70H669c38.6 0 70-31.4 70-70v-49h63.3c21.2 0 41.4-6.8 56.7-19 16.4-13.1 25.9-31.7 25.9-51V210.3c0-19.3-9.5-37.9-25.9-51zM699 405.2H175.1v-75.9c0-16.5 13.5-30 30-30H669c16.5 0 30 13.5 30 30v75.9z m0 400.7c0 16.5-13.5 30-30 30H205.1c-16.5 0-30-13.5-30-30V425.2H699v380.7z m145.9-119c0 16.3-19.5 30-42.6 30H739V329.3c0-38.6-31.4-70-70-70H321v-49c0-16.3 19.5-30 42.6-30h438.7c23.1 0 42.6 13.7 42.6 30v476.6z"
        fill="#005BFF"
        stroke="#005BFF"
        stroke-width="2"
      />
      <path
        id="path4"
        class="drawable"
        d="M537.3 369.2H393.1c-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9h144.2c9.9 0 17.9 8 17.9 17.9 0 9.9-8 17.9-17.9 17.9z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        stroke-width="2"
      />
      <path
        id="path5"
        class="filled"
        d="M320.4 802.3h-82.1c-16.6 0-30-13.4-30-30V454.4h112.1v347.9zM636.2 802.3H355V454.4h311.3v317.9c-0.1 16.6-13.5 30-30.1 30z"
        fill="#E6E6E6"
      />
      <path
        id="path6"
        class="drawable"
        d="M230.2 351.3m-18.7 0a18.7 18.7 0 1 0 37.4 0 18.7 18.7 0 1 0-37.4 0Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        stroke-width="2"
      />
      <path
        id="path7"
        class="drawable"
        d="M290.6 351.3m-18.7 0a18.7 18.7 0 1 0 37.4 0 18.7 18.7 0 1 0-37.4 0Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        stroke-width="2"
      />
      <path
        id="path8"
        class="drawable"
        d="M225.3 749.2c-2.4 0-4.7-0.8-6.6-2.5-4.1-3.7-4.5-10-0.8-14.1l120.8-136 121 34.4 191.7-132.3c4.5-3.1 10.8-2 13.9 2.5 3.1 4.5 2 10.8-2.5 13.9L463.2 652.7l-118-33.5-112.5 126.6c-1.9 2.2-4.7 3.4-7.4 3.4z"
        fill="#005BFF"
        stroke="#005BFF"
        stroke-width="2"
      />
      <path
        id="path9"
        class="drawable"
        d="M469.9 740.3L338.6 566.7l-123.2 51.8c-5.1 2.1-11-0.2-13.1-5.3-2.1-5.1 0.2-11 5.3-13.1l137.5-57.9 124 164.1L638 463.6c3.2-4.5 9.4-5.7 13.9-2.5s5.7 9.4 2.5 13.9L469.9 740.3z"
        fill="#06F3FF"
        stroke="#06F3FF"
        stroke-width="2"
      />
    </svg>
  );
});

export default AnimatedSVG;