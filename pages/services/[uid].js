import Head from "next/head";
import { PrismicLink, SliceZone } from "@prismicio/react";
import React, { useState, useEffect } from 'react';
import * as prismicH from "@prismicio/helpers";
import { Layout } from "../../components/Layout";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Portfolio } from "../../components/Portfolio";


const Page = ({ settings, page, navigation, items }) => {
  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{settings.data.site_title}</title>
        <meta name="description" content={settings.data.site_description[0].text} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={settings.data.site_title} />
        <meta property="og:description" content={settings.data.site_description[0].text} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <div className="container">
        <h2 className="page-title">{page.data.title}</h2><br/>
        <Portfolio items={items.filter((cat) => cat.data.categories.some((category) => category?.category?.uid == page.uid))}/>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("category", params.uid);
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");
  const items = await client.getAllByType("project");

  return {
    props: {
      page,
      settings,
      navigation,
      items
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("category");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
