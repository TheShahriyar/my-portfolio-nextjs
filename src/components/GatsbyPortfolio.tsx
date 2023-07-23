import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import RevsonImage from "../images/revson-html.jpg";
import BuilderImage from "../images/builder.jpg";
import OtheloImage from "../images/othelo-onepage.jpg";

const GatsbyPortfolio = () => {
  return (
    <div
      id="GatsbyPortfolio"
      className="portfolio-section bg-stone-50  py-12 md:py-20"
    >
      <div className="container">
        <SectionTitle title="React Gatsby Portfolio" position="text-center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="border border-gray-200">
            <Image src={RevsonImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Revson - Multipurpose React Gatsby Template
              </h3>
              <p className="text-sm">React, Gatsby, CSS3, SCSS, Bootstrap</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/revson-gatsby"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://revson-gatsby-shahriar.netlify.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src={OtheloImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Othelo - Onepage React Gatsby Template
              </h3>
              <p className="text-sm">React, Gatsby, CSS3, SCSS, Bootstrap</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/Othelo-React"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://othelo-gatsby-shahriar.netlify.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src={BuilderImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Builder - Multipurpose React Gatsby Template
              </h3>
              <p className="text-sm">React, Gatsby, CSS3, SCSS, Bootstrap</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/Builder-construction-website-GatsbyJs"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://builder-construction-gatsby-shahriyar.netlify.app/"
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

export default GatsbyPortfolio;
