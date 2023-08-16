import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import WaveImage from "../images/wave-html.jpg";

const NextPortfolio = () => {
  return (
    <div
      id="NextPortfolio"
      className="portfolio-section bg-stone-50  py-12 md:py-20"
    >
      <div className="container">
        <SectionTitle title="Next JS Portfolio" position="text-center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="border border-gray-200">
            <Image src={WaveImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Wave - Company website with NEXT JS
              </h3>
              <p className="text-sm">React, NEXT JS, TypeScript, TailwindCSS</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/wave-company-website-next"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://wave-company-website-nextjs.vercel.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextPortfolio;
