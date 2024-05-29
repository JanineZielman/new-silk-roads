import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { useRouter } from "next/router";

export const Layout = ({
  children,
  navigation
}) => {
  const router = useRouter();

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
      <main className="wrapper">
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
