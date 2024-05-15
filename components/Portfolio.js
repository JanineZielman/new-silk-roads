import { PrismicLink, PrismicRichText } from "@prismicio/react";

export const Portfolio = ({
  items
}) => {

  return (

      <div className="grid">
        <div className="row">
          {items.map((item, i) => { 
            return(
              i % 3 === 0 &&
              <div className="grid-item">
                <div className="countries">
                  {item.data.country_codes.map((code, j) => {
                    return(
                      code.country_code &&<div className="country">{code.country_code}</div>
                    )
                  })}
                </div>
                <img src={item.data.image.url}/>
                {item.data.date &&
                  <div className="date">
                    {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                  </div>
                } 
                <PrismicRichText field={item.data.title}/>
                <PrismicRichText field={item.data.description}/>
              </div>
            )
          })}
        </div>
        <div className="row">
          {items.map((item, i) => { 
            return(
              i % 3 === 1 &&
              <div className="grid-item">
                <div className="countries">
                  {item.data.country_codes.map((code, j) => {
                    return(
                      code.country_code &&<div className="country">{code.country_code}</div>
                    )
                  })}
                </div>
                <img src={item.data.image.url}/>
                {item.data.date &&
                  <div className="date">
                    {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                  </div>
                } 
                <PrismicRichText field={item.data.title}/>
                <PrismicRichText field={item.data.description}/>
              </div>
            )
          })}
        </div>
        <div className="row">
          {items.map((item, i) => { 
            return(
              i % 3 === 2 &&
              <div className="grid-item">
                  <div className="countries">
                  {item.data.country_codes.map((code, j) => {
                    return(
                      code.country_code &&<div className="country">{code.country_code}</div>
                    )
                  })}
                </div>
                <img src={item.data.image.url}/>
                {item.data.date &&
                  <div className="date">
                    {new Date(item.data.date).toLocaleDateString("en-US", { year: 'numeric' }) } {new Date(item.data.date).toLocaleDateString("en-US", { month: 'long' }) } {new Date(item.data.date).toLocaleDateString("en-US", { day: 'numeric' }) }
                  </div>
                } 
                <PrismicRichText field={item.data.title}/>
                <PrismicRichText field={item.data.description}/>
              </div>
            )
          })}
        </div>
      </div>

  );
};
