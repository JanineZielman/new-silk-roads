import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export const Portfolio = ({
  items
}) => {

  return (

      <div className="grid">
        <div className="row">
          {items.map((item, i) => { 
            let categories = item.data.categories
            return(
              i % 3 === 0 &&
              <Link href={`/portfolio/${item.uid}`}>
                <div className="grid-item">
                  <div className="countries">
                    {item.data.country_codes.map((code, j) => {
                      return(
                        code.country_code &&<div className="country">{code.country_code}</div>
                      )
                    })}
                  </div>
                  <div className="img-wrapper">
                    <img src={item.data.image.url}/>
                    <div className={`gradient ${categories.map((item, i) => item.category.uid)}-1`}></div>
                    <div className={`gradient gradient2 ${categories.map((item, i) => item.category.uid)}-2`}></div>
                  </div>
                  {item.data.date &&
                    <div className="date">
                      {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                    </div>
                  } 
                  <PrismicRichText field={item.data.title}/>
                  <PrismicRichText field={item.data.description}/>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="row">
          {items.map((item, i) => { 
            let categories = item.data.categories
            return(
              i % 3 === 1 &&
              <Link href={`/portfolio/${item.uid}`}>
                <div className="grid-item">
                  <div className="countries">
                    {item.data.country_codes.map((code, j) => {
                      return(
                        code.country_code &&<div className="country">{code.country_code}</div>
                      )
                    })}
                  </div>
                  <div className="img-wrapper">
                    <img src={item.data.image.url}/>
                    <div className={`gradient ${categories.map((item, i) => item.category.uid)}-1`}></div>
                    <div className={`gradient gradient2 ${categories.map((item, i) => item.category.uid)}-2`}></div>
                  </div>
                  {item.data.date &&
                    <div className="date">
                      {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                    </div>
                  } 
                  <PrismicRichText field={item.data.title}/>
                  <PrismicRichText field={item.data.description}/>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="row">
          {items.map((item, i) => { 
            let categories = item.data.categories
            return(
              i % 3 === 2 &&
              <Link href={`/portfolio/${item.uid}`}>
                <div className="grid-item">
                    <div className="countries">
                    {item.data.country_codes.map((code, j) => {
                      return(
                        code.country_code &&<div className="country">{code.country_code}</div>
                      )
                    })}
                  </div>
                  <div className="img-wrapper">
                    <img src={item.data.image.url}/>
                    <div className={`gradient ${categories.map((item, i) => item.category.uid)}-1`}></div>
                    <div className={`gradient gradient2 ${categories.map((item, i) => item.category.uid)}-2`}></div>
                  </div>
                  {item.data.date &&
                    <div className="date">
                      {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                    </div>
                  } 
                  <PrismicRichText field={item.data.title}/>
                  <PrismicRichText field={item.data.description}/>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

  );
};
