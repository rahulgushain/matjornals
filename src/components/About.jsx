import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imgAbout from "../Photos/about-img.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-wrap justify-between gap-5 w-full mt-5 min-h-[400px]" data-aos="zoom-in">
      <div className="w-full md:w-[45%] h-full shadow-xl p-8 text-lg text-gray-500">
        <h1 className="text-center text-blue-600 text-4xl mb-4 font-bold">ABOUT US</h1>
        <p className="mt-2 ">
          MAT Journal is a prominent solution for quality scientific content in academia,
          scientific institutions, and corporate R&D departments through innovative information,
          products, and services.
        </p>
        <p className="mt-2">✔️ MAT Journals Pvt. Ltd. was established in 2015.</p>
        <p className="mt-2">
          ✔️ The sole aim is to provide a platform for knowledge creation and dissemination to stakeholders.
        </p>
        <p className="mt-2">
          ✔️ MAT Journals has 90+ peer-reviewed journals in various disciplines, including Engineering, Pharmacy, and Nursing.
        </p>
        <p className="mt-2">✔️ Committed to maintaining high ethical publishing standards and promoting open-access research.</p>
        <p className="mt-2">
          ✔️ Dedicated to fostering a global research community by connecting scholars, researchers, and industry experts.
        </p>
      </div>
      <div className="flex justify-center w-full md:w-[50%]">
        <img src={imgAbout} alt="About MAT Journals" className="rounded-lg shadow-lg w-full h-auto" />
      </div>
    </div>
  );
}
