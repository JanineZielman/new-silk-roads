import Head from "next/head";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { PrismicRichText } from "@prismicio/react";
import Slider from "react-slick";
import { PrismicNextImage } from "@prismicio/next";
import { Portfolio } from "../components/Portfolio";
import { NewsPreview } from "../components/NewsPreview";
import { ServicesPreview } from "../components/ServicesPreview";
import Link from "next/link";
import Popup from "../components/Popup";
import { LogoSlider } from "../components/LogoSlider";
import TextSection from "../components/TextSection";

const Index = ({ page, settings, navigation, portfolio_items, news_items, services}) => {

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
        {page.data.slices.map((item, i) => {
          return(
            <>
            {item.primary.page && 
              <div className="preview">
                <div className="preview-bar">
                  <div className="subtitle">{item.primary.page.uid}</div>
                  <Link className="read-more-button" href={`/${item.primary.page.uid}`}>Explore our {item.primary.page.uid}</Link>
                </div>
                {item.primary.page.uid == 'portfolio' &&
                  <Portfolio items={portfolio_items.slice(0,6)}/>
                }
                {item.primary.page.uid == 'news' &&
                  <NewsPreview items={news_items.slice(0,3)}/>
                }
                {item.primary.page.uid == 'services' &&
                  <ServicesPreview items={services.data.services}/>
                }
              </div>
            }
            {item.slice_type == 'logo_slider' && 
              <LogoSlider logos={item}/>
            }
            {item.slice_type == 'text_section' && 
              <TextSection slice={item}/>
            }
            </>
          )
        })}

      </div>
      <Popup/>
    </Layout>
  );logos
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getSingle("home");
  const portfolio_items = await client.getAllByType("project");
  const news_items = await client.getAllByType("news_item");
  const services = await client.getSingle("services", {
    fetchLinks: 'category.title, category.image, category.description'
  });

  return {
    props: {
      navigation,
      page,
      settings,
      portfolio_items,
      news_items,
      services
    },
  };
}
