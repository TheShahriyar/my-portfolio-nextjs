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
import RestauraImage from "../images/madison-html.jpg";

const HtmlPortfolio = () => {
  return (
    <div
      id="htmlCssPortfolio"
      className="portfolio-section bg-stone-50  py-12 md:py-20"
    >
      <div className="container">
        <SectionTitle title="HTML CSS Portfolio" position="text-center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="border border-gray-200">
            <Link href="#">
              <Image src={WaveImage} alt="Shahriyar Ahmed Portfolio" />
              <div className="p-4">
                <h3 className="pb-4 text-sky-500 text-sm">
                  Wave - Multipurpose HTML5 Bootstrap Template
                </h3>
                <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              </div>
            </Link>
          </div>
          <div className="border border-gray-200">
            <Link href="#">
              <Image src={MaxImage} alt="Shahriyar Ahmed Portfolio" />
              <div className="p-4">
                <h3 className="pb-4 text-sky-500 text-sm">
                  Wave - Multipurpose HTML5 Bootstrap Template
                </h3>
                <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              </div>
            </Link>
          </div>
          <div className="border border-gray-200">
            <Link href="#">
              <Image src={RevsonImage} alt="Shahriyar Ahmed Portfolio" />
              <div className="p-4">
                <h3 className="pb-4 text-sky-500 text-sm">
                  Wave - Multipurpose HTML5 Bootstrap Template
                </h3>
                <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              </div>
            </Link>
          </div>
          <div className="border border-gray-200">
            <Link href="#">
              <Image src={DreamImage} alt="Shahriyar Ahmed Portfolio" />
              <div className="p-4">
                <h3 className="pb-4 text-sky-500 text-sm">
                  Wave - Multipurpose HTML5 Bootstrap Template
                </h3>
                <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              </div>
            </Link>
          </div>
          <div className="border border-gray-200">
            <Link href="#">
              <Image src={OtheloImage} alt="Shahriyar Ahmed Portfolio" />
              <div className="p-4">
                <h3 className="pb-4 text-sky-500 text-sm">
                  Wave - Multipurpose HTML5 Bootstrap Template
                </h3>
                <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              </div>
            </Link>
          </div>
          <div className="border border-gray-200">
            <Link href="#">
              <Image src={PalaceImage} alt="Shahriyar Ahmed Portfolio" />
              <div className="p-4">
                <h3 className="pb-4 text-sky-500 text-sm">
                  Wave - Multipurpose HTML5 Bootstrap Template
                </h3>
                <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              </div>
            </Link>
          </div>
          <div className="border border-gray-200">
            <Link href="#">
              <Image src={BondingImage} alt="Shahriyar Ahmed Portfolio" />
              <div className="p-4">
                <h3 className="pb-4 text-sky-500 text-sm">
                  Wave - Multipurpose HTML5 Bootstrap Template
                </h3>
                <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              </div>
            </Link>
          </div>
          <div className="border border-gray-200">
            <Link href="#">
              <Image src={RestauraImage} alt="Shahriyar Ahmed Portfolio" />
              <div className="p-4">
                <h3 className="pb-4 text-sky-500 text-sm">
                  Wave - Multipurpose HTML5 Bootstrap Template
                </h3>
                <p className="text-sm">HTML5, CSS3, SCSS, Bootstrap, jQuery</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlPortfolio;
