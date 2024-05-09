import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Slider from "react-slick";
import { PrismicNextImage } from "@prismicio/next";
import Collapsible from 'react-collapsible';

const Index = ({ settings, navigation, items}) => {
  console.log(items)
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
        <div className="grid">
          <div className="row">
            {items.map((item, i) => { 
              return(
                i % 3 === 0 &&
                <div className="grid-item">
                  <img src={item.data.image.url}/>
                  {item.data.date &&
                    <div className="date">
                      {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                    </div>
                  } 
                  <PrismicRichText field={item.data.title}/>
                </div>
              )
            })}
          </div>
          <div className="row">
            {items.map((item, i) => { 
              return(
                i % 3 === 1 &&
                <div className="grid-item">
                  <img src={item.data.image.url}/>
                  {item.data.date &&
                    <div className="date">
                      {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                    </div>
                  } 
                  <PrismicRichText field={item.data.title}/>
                </div>
              )
            })}
          </div>
          <div className="row">
            {items.map((item, i) => { 
              return(
                i % 3 === 2 &&
                <div className="grid-item">
                  <img src={item.data.image.url}/>
                  {item.data.date &&
                    <div className="date">
                      {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                    </div>
                  } 
                  <PrismicRichText field={item.data.title}/>
                </div>
              )
            })}
          </div>
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
  const items = await client.getAllByType("news_item");

  return {
    props: {
      navigation,
      settings,
      items
    },
  };
}
