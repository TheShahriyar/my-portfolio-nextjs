import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="about-section py-24">
      <div className="container mx-auto">
        <SectionTitle title="About Me" position="text-center" />
        <div className="flex items-center">
          <div className="image-part w-1/4">
            <Image
              src="/me.jpg"
              alt="Shahriyar Ahmed"
              width={250}
              height={250}
              className="text-center rounded-full"
            />
          </div>
          <div className="details-part w-3/4">
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
              <div className="flex mb-4">
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
                  <li>React,</li>
                  <li>Next JS,</li>
                  <li>Gatsby JS,</li>
                  <li>Node,</li>
                  <li>Express,</li>
                  <li>jQuery</li>
                </ul>
              </div>
              <div className="flex mb-4">
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
              <div className="flex mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  Database:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>MongoDB,</li>
                  <li>SQL,</li>
                  <li>GraphQL,</li>
                </ul>
              </div>
              <div className="flex mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  CMS:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>WordPress,</li>
                  <li>Shopify,</li>
                  <li>Contentful</li>
                </ul>
              </div>
              <div className="flex mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  Design Tools:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>Figma,</li>
                  <li>Adobe XD,</li>
                  <li>Photoshop</li>
                </ul>
              </div>
              <div className="flex mb-4">
                <h4 className="font-bold mr-3 underline whitespace-nowrap">
                  Working Tools:
                </h4>
                <ul className="flex flex-wrap space-x-4 text-red-600 italic">
                  <li>VS Code,</li>
                  <li>Postman,</li>
                  <li>Slack</li>
                </ul>
              </div>
              <div className="flex mb-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
