import Head from "next/head";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Link from "next/link";


const Index = ({ settings, navigation, page}) => {
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

        <div className="services panel" data-color="blue">
          {page.data.services.map((item, i) => {
            return(
              <div className="preview" key={`service${i}`}>
                <h2>{item.category.data.title}</h2>
                <div className="text-section">
                  <img src={item.category.data.image?.url}/>
                  <div className="description">
                    <PrismicRichText field={item.category.data.description}/>
                  </div>
                </div>
                <Link className="read-more-button" href={`/services/${item.category.uid}`}>Explore projects</Link>
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

  return {
    props: {
      navigation,
      settings,
      page
    },
  };
}
