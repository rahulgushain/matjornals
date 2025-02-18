import { useEffect } from "react";
import data from "../data";
import About from "./About";
import Blogs from "./Blogs";
import Cards from "./cards";
import Contact from "./contact";
import FirstSlider from "./firstSlider";
import Footer from "./Footer";
import BrandSlider from "./IndexingSlider";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div>
      {<FirstSlider item={data.slider} />}
      <div className="p-8">
        <div className="">
          <h2
            className="text-4xl text-blue-600 font-bold text-center my-9 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            JOURNALS
          </h2>

          <p
            className="text-center mb-9 text-lg text-gray-500  w-[80%] mx-auto "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            MAT Journals Pvt. Ltd. publishes 90+ peer-reviewed, indexed journals
            across various domains of Engineering, Pharmacy, Nursing, and
            Management. We are committed to providing high-quality content
            solutions to students, researchers, academicians, faculties,
            scientists, and stakeholders. Our mission is to foster innovation,
            support scholarly communication, and enhance knowledge dissemination
            through rigorous editorial standards and extensive indexing,
            ensuring global accessibility and impact.
          </p>
        </div>
        <div className="mt-5">
          <Cards />
        </div>
        <div>
          <About />
        </div>
        <div className="text-center ">
          <p
            className="text-4xl text-blue-600 font-bold my-8"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            INDEXING
          </p>
          <p
            className="mb-7 text-lg text-gray-500 w-[80%] mx-auto "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            We ensure higher scientific quality by offering a comprehensive
            citation service for all published articles across various indexing
            sites, maximizing their visibility and accessibility to a wider
            audience. By strategically enhancing article reach, we support
            authors in gaining greater recognition, increasing citations, and
            contributing to the global exchange of knowledge. Our commitment to
            indexing ensures that research remains discoverable, impactful, and
            widely referenced, fostering academic growth and innovation. Through
            continuous efforts to expand our network, we help researchers,
            institutions, and scholars connect with a broader scientific
            community, ultimately advancing the dissemination of valuable
            research findings worldwide.
          </p>
        </div>

        <div>{<BrandSlider data={data.clients} />}</div>
        <p
          className="my-9 text-4xl font-bold  text-blue-600  text-center "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          EDITORIAL BLOG
        </p>
        <div className="min-h-[200px] ">
          <Blogs />
        </div>
        <div>
          <h2
            className="text-4xl my-9 text-center font-semibold text-blue-600"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            CONTACT US
          </h2>

          <Contact />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
