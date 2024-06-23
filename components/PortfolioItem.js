import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export const PortfolioItem = ({
  item, categories
}) => {
  console.log(categories)
  return (
    <Link href={`/portfolio/${item.uid}`}>
      <div className={`grid-item ${categories.map((item, i) => item.category.uid).join(' ')}`}>
        <div className="img-wrapper">
          <img src={item.data.image.url}/>
          <div className={`gradient`}></div>
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
  );
};
