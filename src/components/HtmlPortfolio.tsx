import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import WaveImage from "../images/wave-html.jpg";
import MaxImage from "../images/max-html.jpg";
import RevsonImage from "../images/revson-html.jpg";
import DreamImage from "../images/dream-construction.jpg";
import OtheloImage from "../images/othelo-onepage.jpg";
import PalaceImage from "../images/palace-interior.jpg";
import BondingImage from "../images/bonding-personal.jpg";
import RestauraImage from "../images/restaura.jpg";
import BuilderImage from "../images/builder.jpg";

const HtmlPortfolio = () => {
  return (
    <div id="htmlCssPortfolio" className="portfolio-section  py-12 md:py-20">
      <div className="container">
        <SectionTitle title="HTML CSS Portfolio" position="text-center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="border border-gray-200">
            <Image src={WaveImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Wave - Multipurpose HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/wave-html"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://wave-html-shahriyar.netlify.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src={MaxImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Max - Multipurpose HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/max-html"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://max-html-shahriyar.netlify.app/"
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
                Builder - Construction HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/builder-free-html"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://builder-html-shahriyar.netlify.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src={RevsonImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Revson - Multipurpose HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/revson-html"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://revson-html-shahriyar.netlify.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src={DreamImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Dream - Construction HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/dream-html"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://dream-html-shahriyar.netlify.app/"
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
                Othelo - Onepage HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/othelo-HTML-SCSS"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://othelo-html-shahriyar.netlify.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src={PalaceImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Palace - Multipurpose HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/palace-html"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://palace-html-shahriyar.netlify.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src={BondingImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Bonding - Onepage HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/bonding-HTML-SCSS"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://bonding-html-shahriyar.netlify.app/"
                  target="_blank"
                  className="bg-primary px-4 py-2 text-white rounded-md font-semibold"
                >
                  Preview Link
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src={RestauraImage} alt="Shahriyar Ahmed Portfolio" />
            <div className="p-4">
              <h3 className="pb-4 text-sky-500 text-sm">
                Restaura - Restaurant HTML5 Bootstrap Template
              </h3>
              <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              <div className="mt-6 text-sm space-x-4">
                <Link
                  href="https://github.com/TheShahriyar/restaura-HTML"
                  target="_blank"
                  className="bg-slate-500 px-4 py-2 text-white rounded-md font-semibold"
                >
                  Github Repo
                </Link>
                <Link
                  href="https://restaura-html-shahriyar.netlify.app/"
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

export default HtmlPortfolio;
