import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header>
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://www.linkedin.com/in/abel-paulo-5394311bb/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/AbelPaulo18"
          bgColor="transparent"
          fgColor="gray"
        />
      </div>
      <div>
        <SocialIcon
          className="cursor-pointer"
          bgColor="transparent"
          fgColor="gray"
          network="email"
        />
        <p className="uppercase font-semibold text-stone-500 hidden md:inline-flex ">
          Contact me
        </p>
      </div>
    </header>
  );
};
