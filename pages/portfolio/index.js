import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Portfolio } from "../../components/Portfolio";
import React, { useEffect } from "react";

const Index = ({ settings, navigation, items, categories}) => {
  
  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('*')

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope('.grid', {
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
        gutter: 20
      }
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])

  // handling filter key change
  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
      
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  useEffect(() => {
    document.getElementsByClassName('active')?.[0].classList.remove('active')
    document.getElementById(filterKey).classList.add('active')
  })

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
        <h2 className="page-title">Portfolio</h2>
        <div className="filters">
          <div className="filter active" id="*" onClick={handleFilterKeyChange('*')}>All</div>
          {categories.map((item, i) => {
            return(
              <div key={`category${i}`} className="filter" id={item.uid} onClick={handleFilterKeyChange(item.uid)}>{item.data.title}</div>
            )
          })}
        </div>
        <div className="masonry">
          <Portfolio items={items}/>
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
  const items = await client.getAllByType("project");
  const categories = await client.getAllByType("category");

  return {
    props: {
      navigation,
      settings,
      items,
      categories
    },
  };
}
