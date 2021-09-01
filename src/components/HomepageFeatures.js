import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Portal",
    Svg: require("../../static/imgs/cycle/logo/logo-gear.svg").default,
    to: `/docs/intro`,
    description: (
      <>
        The portal is Cycle's graphical user interface that allows you to easily
        and quickly manage environments, containers, and deployment.
      </>
    ),
  },
  {
    title: "API",
    to: "https://docs.cycle.io/api/introduction/",
    Svg: require("../../static/imgs/cycle/logo/brand-container.svg").default,
    description: (
      <>
        The Cycle API is a REST-based, resource-oriented API designed to be easy
        to use and understand. Using this API, you are able to fully interact
        with the Cycle Platform. In fact, this is the same API used by our
        Portal.
      </>
    ),
  },
];

function Feature({ Svg, title, description, to }) {
  return (
    <div
      className={clsx("col col--6")}
      onClick={() => (window.location.href = to)}
    >
      <div className={styles.feature}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.featureButton
            )}
            style={{ margin: "2rem" }}
            to={to}
          >
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
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
