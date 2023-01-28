import { Colors } from "@/assets/Colors";
import { About } from "@/component/About";
import { Header } from "@/component/Header";
import { Hero } from "@/component/Hero";
import { WorkExperience } from "@/component/WorkExperience";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-[#1e1e1e] h-screen text-white snap-y snap-mandatory overflow-y-scroll z-0 ">
      <Head>
        <title>Abel Luzemba</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}
    </div>
  );
};
export default Home;
