import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export const NewsPreview = ({
  items
}) => {

  return (

    <div className="news-preview panel" data-color="blue">
      {items.map((item, i) => { 
        return(

          <Link href={`/news/${item.uid}`} key={`news1-${i}`}>
            <div className="grid-item">
              <img src={item.data.image.url}/>
              <div className="info">
                {item.data.date &&
                  <div className="date">
                    {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                  </div>
                } 
                <PrismicRichText field={item.data.title}/>
                <PrismicRichText field={item.data.summary}/>
              </div>
            </div>
          </Link>
        )
      })}
    </div>

  );
};
