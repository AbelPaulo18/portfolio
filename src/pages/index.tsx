import { Colors } from "@/assets/Colors";
import { Header } from "@/component/Header";
import { Hero } from "@/component/Hero";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-[#1e1e1e] h-screen text-white snap-y snap-mandatory overflow-y-scroll z-0 ">
      <Head>
        <title>Abel Luzemba</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}
    </div>
  );
};
export default Home;
