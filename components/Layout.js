import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Layout = ({
  children,
  navigation
}) => {
  const router = useRouter();

  useEffect(() => {
    document.getElementById('main').classList.add("load");
    console.log(router.asPath)
  }, [])

  return (
    <>
      <header>
        <div className="menu">
          {navigation.data.menu.map((item, i) => {
            let label;
            if (item.label == 'Home'){
              label = ''
            } else {
              label = item.label;
            }
            return(
              <div key={`menu-item${i}`} className={`menu-item ${router.asPath.replaceAll('/', '') == label.toLowerCase() ? 'active' : ''}`}>
                <PrismicLink field={item.link}>{item.label}</PrismicLink>
              </div>
            )
          })}
        </div>
      </header>
      <main className={`wrapper ${router.asPath != '/' ? 'page-wrapper' : 'home-wrapper'}`} id="main">
        {children}
      </main>
      <footer>
        <div className="footer-content">
          <PrismicRichText field={navigation.data.footer}/>
        </div>
      </footer>
    </>
  );
};
