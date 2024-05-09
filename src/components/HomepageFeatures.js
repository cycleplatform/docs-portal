import React from "react";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Getting Started",
    Svg: require("../../static/svgs/duotone/book.svg").default,
    to: `/getting-started/overview`,
    description: (
      <>
        Learn platform primitives, get your hub configured, and get your first
        container online.
      </>
    ),
  },
  {
    title: "Portal Reference",
    Svg: require("../../static/svgs/duotone/book.svg").default,
    to: `/reference/intro`,
    description: (
      <>
        The portal reference aims to be a single source of truth for all things
        portal.{" "}
      </>
    ),
  },

  {
    title: "Guides",
    to: "/guides/intro",
    Svg: require("../../static/svgs/duotone/book-open.svg").default,
    description: (
      <>
        Tutorials and video guides for integrations and more advanced use cases.
      </>
    ),
  },
  {
    title: "Public API Docs",
    to: "https://api.docs.cycle.io",
    Svg: require("../../static/svgs/duotone/book-heart.svg").default,
    description: <>Complete API documentation for public API.</>,
  },
  {
    title: "Internal API Docs",
    to: "https://internal-api.docs.cycle.io",
    Svg: require("../../static/svgs/duotone/book-heart.svg").default,
    description: <>Complete API documentation for internal API.</>,
  },
  {
    title: "Scheduler API Docs",
    to: "https://scheduler-api.docs.cycle.io",
    Svg: require("../../static/svgs/duotone/book-heart.svg").default,
    description: <>Complete API documentation for scheduler API.</>,
  },
];
// onClick={() => (window.location.href = to)}
function Feature({ Svg, title, to, className, description }) {
  return (
    <div
      className={
        "rounded-md bg-cycle-black-accent flex flex-col justify-between h-full p-8 cursor-pointer items-center text-[1.2rem]"
      }
    >
      <div className="text--center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Svg className="h-[24px] mb-2 w-[31px] fill-cycle-blue" alt={title} />
          <h6 className="text-2xl mb-2">{title}</h6>
        </div>
        <p className="mb-2 text-[1.2rem] leading-[1.5rem]">{description}</p>
      </div>
      <div>
        <Link className={"cta-button primary"} to={to}>
          {title}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section
      className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[2rem]"}
    >
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
