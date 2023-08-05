"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import handleScroll from "./handleScroll";

const About = () => {
  const handleScrolling = handleScroll;
  return (
    <div id="aboutSection" className="about-section py-12 md:py-24">
      <div className="container mx-auto">
        <SectionTitle title="About Me" position="text-center" />
        <div className="flex flex-col lg:flex-row lg:gap-x-20 gap-y-8 lg:gap-y-0">
          <div className="image-part lg:w-1/4">
            <Image
              src="/me.jpg"
              alt="Shahriyar Ahmed"
              width={250}
              height={250}
              className="text-center rounded-full mx-auto border-8 border-slate-100"
            />
            <div className="flex justify-center space-x-5 mt-10">
              <Link
                href="https://www.linkedin.com/in/theshahriyar/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-5" />
              </Link>
              <Link href="https://github.com/TheShahriyar" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/TheShahriyar"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-5" />
              </Link>
              <Link href="https://twitter.com/Shahriyar31dec" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="h-5" />
              </Link>
              <Link href="mailto:shahriyar.31dec@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="h-5" />
              </Link>
            </div>
          </div>

          <div className="details-part lg:w-3/4">
            <div>
              <p className="mb-4">
                {`I'm a Frontend Web Developer with 6+ years of experience. I'm an
                expert in HTML, CSS3 (SCSS, LESS), jQuery, JavaScript(ES6),
                TailwindCSS, Bootstrap, React (Gatsby, Next), Figma, Photoshop,
                WordPress, Git, Postman, Gulp, NPM, and many more. `}
              </p>

              <p className="mb-4">
                {`Generally, I develop
                UI of an application and website. I also convert any Figma or
                Photoshop design to pixel perfect HTML website with BEM CSS
                methodologies. All of my websites are 100% responsive and
                mobile-first developed, and all of those are cross-browser
                supported. My HTML markup is W3C validated and SEO-friendly.`}
              </p>

              <p>{`My professional experience includes bringing the wireframes of the UX designer to life 
              through HTML5 and CSS3, as well as collaborating with Back End Developers to create a
              stellar finished product.`}</p>
            </div>
            <div className="mt-8">
              <div className="flex flex-col md:flex-row mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  Programming Skills:
                </h4>
                <ul className="flex flex-wrap space-x-3 text-red-600 italic">
                  <li>HTML5,</li>
                  <li>CSS3,</li>
                  <li>SCSS,</li>
                  <li>LESS,</li>
                  <li>JavaScript,</li>
                  <li>TypeScript,</li>
                  <li>React JS,</li>
                  <li>Next JS,</li>
                  <li>Gatsby JS,</li>
                  <li>Node,</li>
                  <li>Express,</li>
                  <li>jQuery</li>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  CSS Frameworks:
                </h4>
                <ul className="flex flex-wrap space-x-3 text-red-600 italic">
                  <li>TailwindCSS,</li>
                  <li>Bootstrap,</li>
                  <li>Material UI,</li>
                  <li>Daisy UI</li>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  Database:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>MongoDB,</li>
                  <li>SQL,</li>
                  <li>GraphQL,</li>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  CMS:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>WordPress,</li>
                  <li>Shopify,</li>
                  <li>Contentful</li>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  Design Tools:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>Figma,</li>
                  <li>Adobe XD,</li>
                  <li>Photoshop</li>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  Working Tools:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>Git, Github, GitLab,</li>
                  <li>VS Code,</li>
                  <li>Postman,</li>
                  <li>Slack</li>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  PM Tools:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>Clickup,</li>
                  <li>Youtrack,</li>
                  <li>Trello,</li>
                  <li>Asana</li>
                </ul>
              </div>
            </div>

            <div className="mt-20 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <Link
                href="#htmlCssPortfolio"
                onClick={handleScrolling}
                className="inline-block text-center bg-primary py-4 px-10 rounded-sm text-white text-sm font-semibold"
              >
                HTML CSS Portfolio
              </Link>
              <Link
                href="#NextPortfolio"
                onClick={handleScrolling}
                className="inline-block text-center bg-primary py-4 px-10 rounded-sm text-white text-sm font-semibold"
              >
                NEXT JS Portfolio
              </Link>
              <Link
                href="#GatsbyPortfolio"
                onClick={handleScrolling}
                className="inline-block text-center bg-primary py-4 px-10 rounded-sm text-white text-sm font-semibold"
              >
                React Gatsby JS Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
