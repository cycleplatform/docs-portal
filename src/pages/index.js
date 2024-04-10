import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.css";
import clsx from "clsx";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.heroBanner}>
      <div className="container" style={{"maxWidth": "90%"}}>
        <div className={"row"}>
          <div className={"col col--7"}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
            Cycle is the leading LowOps platform built to simplify containers, standardize infrastructure, and automate DevOps. Deploy to your own infrastructure whether it's in the cloud, on-prem, or a mixture of both.
            </p>
            <HomepageFeatures />
          </div>
          <div className={clsx("col col--5", styles.heroImageDiv)}>
            <img
              src="imgs/cycle/platform.svg"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
