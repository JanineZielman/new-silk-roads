import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { Portfolio } from "../components/Portfolio";


const Index = ({ settings, navigation, page, items}) => {
  console.log(items)
  // console.log(items.filter((cat) => cat.data.categories[0].category.uid == item.category.uid))
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
        <h2 className="page-title">{page.data.title}</h2>

        <div className="services">
          {page.data.services.map((item, i) => {
            return(
              <div className="preview" key={`service${i}`}>
                <div className="preview-bar">
                  <div className="subtitle">{item.category.data.title}</div>
                </div>
                <div className="text-section">
                  <img src={item.category.data.image?.url}/>
                  <div className="description">
                    <PrismicRichText field={item.category.data.description}/>
                  </div>
                </div>
                <Portfolio items={items.filter((cat) => cat.data.categories.some((category) => category?.category?.uid == item.category.uid)).slice(0,3)}/>
                <Link className="read-more-button" href={`/services/${item.category.uid}`}>More projects</Link>
              </div>
            )
          })}
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
  const page = await client.getSingle("services", {
    fetchLinks: 'category.title, category.image, category.description'
  });
  const items = await client.getAllByType("project");

  return {
    props: {
      navigation,
      settings,
      page,
      items
    },
  };
}
