import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Slider from "react-slick";
import { PrismicNextImage } from "@prismicio/next";
import Collapsible from 'react-collapsible';

const Index = ({ page, settings, navigation}) => {
  
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
      <div className="hero">
        <video muted autoPlay loop playsInline>
          <source src={page.data.hero?.url} type="video/mp4"/>
        </video>
      </div>
      <div className="container">
        <div className="intro">
          <PrismicRichText field={page.data.intro}/>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getSingle("home");

  return {
    props: {
      navigation,
      page,
      settings
    },
  };
}
