import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export const ServicesPreview = ({
  items
}) => {

  return (
    <div className="services-preview panel" data-color="blue">
      {items.map((item, i) => { 
        return(
            <div className='service-item' key={`serviceitem${i}`}>
               <Link  href={`/services/${item.category.uid}`}>
                <img src={item.category.data.image?.url}/>
                <h2>{item.category.data.title}</h2>
                <PrismicRichText field={item.category.data.description}/>
                </Link>
            </div>
        )
      })}
    </div>
  );
};
