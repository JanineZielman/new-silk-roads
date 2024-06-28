import Head from "next/head";
import { PrismicLink, SliceZone } from "@prismicio/react";
import React, { useState, useEffect } from 'react';
import * as prismicH from "@prismicio/helpers";
import { Layout } from "../../components/Layout";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { PrismicRichText } from '@prismicio/react'
import Link from "next/link";


const Page = ({ settings, page, navigation }) => {
  let categories = page.data.categories
  console.log(page)
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
      <div className='project'>
      <div className={`hero page-hero ${page.data.image.url ? 'has-img' : 'no-img'}`}>
        <img src={page.data.image.full ? page.data.image.full.url : page.data.image.url }/>
        {(page.data.gradient == true || !page.data.image.url) &&<div className={`gradient ${page.data.color} ${page.data.image.url ? 'img' : ''}`}></div>}
      </div>
      <div className="content-right">
          <div className="categories">
            {categories.map((item, i) => {
              return(
                <div className="category" key={`category${i}`}><Link href={`/services/${item.category.uid}`}>{item.category.uid.replaceAll('-', ' ')}</Link></div>
              )
            })}
          </div>
          <PrismicRichText field={page.data.title}/>
          <PrismicRichText field={page.data.description}/>
          <SliceZone slices={page.data.slices} components={components} />
          <section className='text-section'>
            <div className='subtitle'>Partners</div>

            <div className='description'>
              <p>
                {page.data.partners.map((item, i) => {
                  return(
                    <Link key={`partner${i}`} href={`/partners/${item.partner.uid}`}>{item.partner.uid}</Link>
                  )
                })}
              </p>
            </div>
          </section>
        </div>
      </div>    
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("project", params.uid);
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return {
    props: {
      page,
      settings,
      navigation
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("project");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
