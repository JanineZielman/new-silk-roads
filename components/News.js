import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export const News = ({
  items
}) => {

  return (

    <div className="grid">
      <div className="row">
        {items.map((item, i) => { 
          return(
            i % 3 === 0 &&
            <Link href={`/news/${item.uid}`} key={`news1-${i}`}>
              <div className="grid-item">
                <img src={item.data.image.url}/>
                {item.data.date &&
                  <div className="date">
                    {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                  </div>
                } 
                <PrismicRichText field={item.data.title}/>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="row">
        {items.map((item, i) => { 
          return(
            i % 3 === 1 &&
            <Link href={`/news/${item.uid}`} key={`news2-${i}`}>
              <div className="grid-item">
                <img src={item.data.image.url}/>
                {item.data.date &&
                  <div className="date">
                    {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                  </div>
                } 
                <PrismicRichText field={item.data.title}/>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="row">
        {items.map((item, i) => { 
          return(
            i % 3 === 2 &&
            <Link href={`/news/${item.uid}`} key={`news3-${i}`}>
              <div className="grid-item">
                <img src={item.data.image.url}/>
                {item.data.date &&
                  <div className="date">
                    {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                  </div>
                } 
                <PrismicRichText field={item.data.title}/>
              </div>
            </Link>
          )
        })}
      </div>
    </div>

  );
};
