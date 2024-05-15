import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Slider from "react-slick";
import { PrismicNextImage } from "@prismicio/next";
import { Portfolio } from "../components/Portfolio";
import { News } from "../components/News";

const Index = ({ page, settings, navigation, portfolio_items, news_items}) => {
  console.log(page)
  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  
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
        <div className="spinning-logo">
          <h1>{settings.data.site_title}  &nbsp; {settings.data.site_title}</h1>
        </div>
        <div className="images">
          <Slider {...sliderSettings}>
            {page.data.header_slider.map((item, i) => {
              return(
              <PrismicNextImage key={`img-slide${i}`} field={item.image}/>
              )
            })}
          </Slider>
        </div>
      </div>
      <div className="container">
        <div className="intro">
          <PrismicRichText field={page.data.intro}/>
        </div>
        <div className="preview">
          <div className="preview-bar">
            <div className="subtitle">PORTFOLIO</div>
            <div className="read-more-button">Explore our portfolio</div>
          </div>
          <Portfolio items={portfolio_items.slice(0,6)}/>
        </div>
        <div className="preview">
          <div className="preview-bar">
            <div className="subtitle">NEWS</div>
            <div className="read-more-button">Read all news</div>
          </div>
          <News items={news_items.slice(0,6)}/>
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
  const portfolio_items = await client.getAllByType("project");
  const news_items = await client.getAllByType("news_item");

  return {
    props: {
      navigation,
      page,
      settings,
      portfolio_items,
      news_items
    },
  };
}
