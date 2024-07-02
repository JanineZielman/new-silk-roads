import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = ({
  items
}) => {

  return (

      <div className="grid panel" data-color="blue">
        <div className="row">
          {items.map((item, i) => { 
            let categories = item.data.categories
            return(
              i % 3 === 0 &&
              <PortfolioItem item={item} categories={categories}/>
            )
          })}
        </div>
        <div className="row">
          {items.map((item, i) => { 
            let categories = item.data.categories
            return(
              i % 3 === 1 &&
              <PortfolioItem item={item} categories={categories}/>
            )
          })}
        </div>
        <div className="row">
          {items.map((item, i) => { 
            let categories = item.data.categories
            return(
              i % 3 === 2 &&
              <PortfolioItem item={item} categories={categories}/>
            )
          })}
        </div>
      </div>

  );
};
