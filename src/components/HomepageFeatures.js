import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Getting Started",
    Svg: require("../../static/svgs/duotone/book.svg").default,
    to: `/getting-started/overview`,
    className: styles.featureButton,
    description: <>Learn platform primitives, get your hub configured, and get your first container online.</>,
  },
  {
    title: "Portal Reference",
    Svg: require("../../static/svgs/duotone/book.svg").default,
    to: `/reference/intro`,
    className: styles.featureButton,
    description: <>The portal reference aims to be a single source of truth for all things portal. </>,
  },
  // {
  //   title: "API Docs",
  //   to: "https://api-docs.cycle.io",
  //   Svg: require("../../static/svgs/duotone/book-heart.svg").default,
  //   className: styles.featureButton,
  //   description: <>The full Cycle API documentation.</>,
  // },
];
// onClick={() => (window.location.href = to)}

function Feature({ Svg, title, to, className, description }) {
  return (
    <div className={clsx("col col--5")}>
      <div className={styles.feature}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
          <h6 className={styles.featureTitle}>{title}</h6>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        <div>
          <Link className={clsx("button button--secondary button--lg", className)} to={to}>
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
