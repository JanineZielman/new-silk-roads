import { PrismicLink, PrismicRichText } from "@prismicio/react";

export const News = ({
  items
}) => {

  return (

    <div className="grid">
      <div className="row">
        {items.map((item, i) => { 
          return(
            i % 3 === 0 &&
            <div className="grid-item" key={`news1-${i}`}>
              <img src={item.data.image.url}/>
              {item.data.date &&
                <div className="date">
                  {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                </div>
              } 
              <PrismicRichText field={item.data.title}/>
            </div>
          )
        })}
      </div>
      <div className="row">
        {items.map((item, i) => { 
          return(
            i % 3 === 1 &&
            <div className="grid-item" key={`news2-${i}`}>
              <img src={item.data.image.url}/>
              {item.data.date &&
                <div className="date">
                  {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                </div>
              } 
              <PrismicRichText field={item.data.title}/>
            </div>
          )
        })}
      </div>
      <div className="row">
        {items.map((item, i) => { 
          return(
            i % 3 === 2 &&
            <div className="grid-item" key={`news3-${i}`}>
              <img src={item.data.image.url}/>
              {item.data.date &&
                <div className="date">
                  {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                </div>
              } 
              <PrismicRichText field={item.data.title}/>
            </div>
          )
        })}
      </div>
    </div>

  );
};