import { Colors } from "@/assets/Colors";
import Link from "next/link";
import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundShapes from "../BackgroundShapes";

type Props = {};

export const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Greetings!, My name's Abel Luzemba",
      "A passionate Software <Developer/>",
      "And a guy that loves challenges and learning🤓",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-8 text-center overflow-hidden">
      <BackgroundShapes />
      <img
        className="relative rounded-full self-center w-32 h-32 shadow-lg shadow-[#1e1e]/10"
        src="https://avatars.githubusercontent.com/u/85404813?v=4"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[14px] ">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-6 mb-4">
          <span className="mr-3">{text}</span>
          <Cursor cursorBlinking cursorColor={Colors.green} />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
