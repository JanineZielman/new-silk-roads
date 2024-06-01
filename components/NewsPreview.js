import { PrismicLink, PrismicRichText } from "@prismicio/react";

export const NewsPreview = ({
  items
}) => {

  return (

    <div className="news-preview">
      {items.map((item, i) => { 
        return(

          <a className="grid-item" href={`/news/${item.uid}`} key={`news1-${i}`}>
            <img src={item.data.image.url}/>
            <div className="info">
              {item.data.date &&
                <div className="date">
                  {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                </div>
              } 
              <PrismicRichText field={item.data.title}/>
            </div>
          </a>
        )
      })}
    </div>

  );
};
