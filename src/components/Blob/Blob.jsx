import React from "react";


function Blob({image, pColor, sColor, y}) {
  return (
    <svg class="blob" viewBox="0 0 200 200">
      <svg viewBox="0 0 200 200">
        <mask id="mask0" mask-type="alpha">
          <path
            d="M49.6,-65.8C62.5,-59,70,-42.1,71.6,-25.9C73.3,-9.7,69.1,5.7,63.1,19.3C57,32.9,49,44.7,38.2,55.2C27.3,65.7,13.7,74.9,0.3,74.4C-13,74,-26,63.8,-36.7,53.3C-47.4,42.8,-55.9,31.8,-61.6,18.9C-67.4,6,-70.5,-9,-67.4,-22.9C-64.3,-36.9,-55,-49.9,-42.7,-56.9C-30.4,-63.9,-15.2,-65,1.6,-67.2C18.4,-69.3,36.7,-72.6,49.6,-65.8Z"
            transform="translate(100 100)"
          />
        </mask>

        <g transform="translate(140 120)">
          <path
            fill="var(--secondary-color)"
            d="M30.8,-41.7C36.6,-38.1,35.8,-24.8,40.9,-12.5C45.9,-0.2999999999999998,56.8,10.9,53.5,16.2C50.1,21.6,32.6,21.2,21.3,33.3C10.1,45.4,5,70,-3,74.1C-11,78.3,-22.1,61.9,-29.9,48.7C-37.8,35.5,-42.6,25.4,-48.9,14C-55.3,2.5,-63.3,-10.3,-58,-16.4C-52.7,-22.5,-34,-21.8,-22.1,-23.4C-10.2,-25.1,-5.1,-29,3.7,-34.1C12.5,-39.2,24.9,-45.3,30.8,-41.7Z"
          ></path>
        </g>

        <g transform="translate(70 50)">
          <path
            fill="var(--secondary-color)"
            d="M30.8,-41.7C36.6,-38.1,35.8,-24.8,40.9,-12.5C45.9,-0.2999999999999998,56.8,10.9,53.5,16.2C50.1,21.6,32.6,21.2,21.3,33.3C10.1,45.4,5,70,-3,74.1C-11,78.3,-22.1,61.9,-29.9,48.7C-37.8,35.5,-42.6,25.4,-48.9,14C-55.3,2.5,-63.3,-10.3,-58,-16.4C-52.7,-22.5,-34,-21.8,-22.1,-23.4C-10.2,-25.1,-5.1,-29,3.7,-34.1C12.5,-39.2,24.9,-45.3,30.8,-41.7Z"
          ></path>
        </g>

        <linearGradient id="MyGradient">
        <stop offset="20%" stop-color="var(--primary-color)" />
          <stop offset="100%" stop-color="transparent" />
          
        </linearGradient>

        <g mask="url(#mask0)">
          <path
            fill="url(#MyGradient)"
            d="M49.6,-65.8C62.5,-59,70,-42.1,71.6,-25.9C73.3,-9.7,69.1,5.7,63.1,19.3C57,32.9,49,44.7,38.2,55.2C27.3,65.7,13.7,74.9,0.3,74.4C-13,74,-26,63.8,-36.7,53.3C-47.4,42.8,-55.9,31.8,-61.6,18.9C-67.4,6,-70.5,-9,-67.4,-22.9C-64.3,-36.9,-55,-49.9,-42.7,-56.9C-30.4,-63.9,-15.2,-65,1.6,-67.2C18.4,-69.3,36.7,-72.6,49.6,-65.8Z"
            transform="translate(100 100)"
          />
          <image class="blob-img" x="40" y={y} href={image} />
        </g>
      </svg>
    </svg>
  );
}

export default Blob;
