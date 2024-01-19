/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Must have VS Code Extensions for Developers",
    description:
      "Hey everyone! I’m here with another Blog Post aimed at making your coding experience more efficient. This time, I’ve gathered tips and tricks that will save you heaps of time while you’re knee-deep in coding projects.",
    url: "https://medium.com/gitconnected/10-must-have-vs-code-extensions-for-developers-7ddc22d81117",
  },
  {
    title: "Top 9 Free Hosting Providers for Web Developers",
    description:
      "Let’s talk about Top Free & Paid Hosting Providers for Developers. Which will be surely helpful for you all.",
    url: "https://medium.com/gitconnected/top-9-free-hosting-providers-for-web-developers-73d31713f19e",
  },
  {
    title: "Making Your Web Development Better with TypeScript",
    description:
      "In this article, I’ll explain how TypeScript can make your web development projects better and more effective.",
    url: "https://medium.com/gitconnected/making-your-web-development-better-with-typescript-ad55286126c5",
  },
  {
    title: "A Step-by-Step Guide for Learning Regular Expressions : A Guide with Real-Life Usage",
    description:
      "Regular expressions, often referred to as regex, function by establishing patterns that enable you to seek out specific characters or words within strings.",
    url: "https://medium.com/gitconnected/practical-examples-for-learning-regular-expressions-a-guide-with-real-life-usage-46aff5f409ab",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
