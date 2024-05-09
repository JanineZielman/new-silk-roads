import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Layout = ({
  children,
  navigation
}) => {
  const router = useRouter();

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
              <div key={`menu-item${i}`} className={`menu-item ${router.asPath.replaceAll('/', '') == label.toLowerCase() ? 'active' : ''}`}>
                <PrismicLink field={item.link}>{item.label}</PrismicLink>
              </div>
            )
          })}
        </div>
        <div className="right-menu">
          <div className={`menu-item ${router.asPath.replaceAll('/', '') == 'news' ? 'active' : ''}`}>
            <Link href="/news">News</Link>
          </div>
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
