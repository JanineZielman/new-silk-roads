import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export const ServicesPreview = ({
  items
}) => {

  return (
    <div className="services-preview">
      {items.map((item, i) => { 
        return(
          <div className='service-item' key={`serviceitem${i}`}>
              <img src={item.category.data.image?.url}/>
              <h2>{item.category.data.title}</h2>
              <PrismicRichText field={item.category.data.description}/>
          </div>
        )
      })}
    </div>
  );
};
