import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.headerItemImage}>
        <img
          src="static/imgs/cycle/logo/cycle-platform-diagram.svg"
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
