import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import clsx from "clsx"
import styles from "./index.module.css";
import MainIcon from "@site/static/imgs/cycle/logo/cycle-platform-diagram.svg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.headerItemImage}>
        <MainIcon
            style={{ width: "20rem", height: "20rem"}}
          className={styles.bannerImage}
        />
      </div>
      <div
        className={styles.headerItemText}
        style={{ flexDirection: "column" }}
      >
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Cycle is a SaaS platform that makes running containerized applications
          on cloud infrastructure simple.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
