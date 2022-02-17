import type { NextPage } from "next";
import React from "react";

interface Props {
	width?: string;
	text?: string;
	icon: any;
}

const CustomButton: NextPage<Props> = ({ width, text, icon }) => {
  return (
    <div className={`flex w-${width}`}>
      <input
        type="text"
        placeholder={text}
        className="bg-[#323645] placeholder-white py-2 px-4
				border-stone-400 border-y-2 border-l-2 rounded-tl-md rounded-bl-md
				w-full
				"
      />
      <div
        className="bg-[#323645] py-2 px-4 border-stone-400 border-y-2 border-r-2
				rounded-tr-md rounded-br-md flex justify-center items-center text-white
				"
      >
				{icon}
      </div>
    </div>
  );
};
export default CustomButton;
