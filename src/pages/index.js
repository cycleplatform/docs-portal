import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import clsx from "clsx";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      className={
        "bg-cycle-black flex justify-center p-8 text-white mb-[4rem] flex-1"
      }
    >
      <div className="container max-w-[90%]">
        <div className={"flex h-full"}>
          <div className={"w-full mb-16"}>
            <h1 className={"font-semibold text-[3rem] mb-0"}>
              {siteConfig.title}
            </h1>
            <p className={"pt-6 pb-8 text-[1.25rem]"}>
              Cycle is the leading LowOps platform built to simplify containers,
              standardize infrastructure, and automate DevOps. Deploy to your
              own infrastructure whether it's in the cloud, on-prem, or a
              mixture of both.
            </p>
            <HomepageFeatures />
          </div>
          <div
            className={clsx("p-16 w-1/3 xl:flex hidden h-full items-center")}
          >
            <img src="imgs/cycle/platform.svg" />
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
