import { PrismicLink } from "@prismicio/react";
import { useRouter } from "next/router";

export const Layout = ({
  children,
  navigation
}) => {
  const router = useRouter();
  console.log(router.asPath.replaceAll('/', ''))
  return (
    <>
      <header>
        <div className="left-menu">
          {navigation.data.menu.map((item, i) => {
            let label;
            if (item.label == 'Home'){
              label = ''
            } else {
              label = item.label;
            }
            return(
              <div className={`menu-item ${router.asPath.replaceAll('/', '') == label.toLowerCase() ? 'active' : ''}`}>
                <PrismicLink field={item.link}>{item.label}</PrismicLink>
              </div>
            )
          })}
        </div>
        <div className="right-menu">
          <div className={`menu-item ${router.asPath.replaceAll('/', '') == 'news' ? 'active' : ''}`}>
            <a href="/news">News</a>
          </div>
        </div>
      </header>
      <main className="wrapper">
        {children}
      </main>
    </>
  );
};
