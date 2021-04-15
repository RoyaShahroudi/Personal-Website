import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "./Logo";

import { useTranslation } from "next-i18next";

const MainNavbar = () => {
  const { t } = useTranslation("mainNavbar");
  const router = useRouter();

  const menuBtn = () => {
    let openIcon = document.getElementById("openIcon");
    let closeIcon = document.getElementById("closeIcon");
    let navigation = document.getElementById("navigation");

    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navigation.classList.toggle("hidden");
  };

  const toggleLang = () => {
    // let faBtn = document.getElementById("fa");
    // let enBtn = document.getElementById("en");

    // if(router.locale === "en") {
    //   enBtn.classList.addClass("active-lang");

    // } else if(router.locale === "fa") {
    //   faBtn.classList.addClass("active-lang");
    // }
    
  };

  return (
    <header className="bg-primary">
      <nav className="container mx-auto flex justify-between content-center py-3">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div className="w-auto block" id="navigation">
          <ul className="list-none flex flex-end justify-between content-center">
            <li className="main-nav-li">
              <Link href="/">{t("home")}</Link>
            </li>
            <li className="main-nav-li">
              <Link href="/contact">{t("contact")}</Link>
            </li>
            <li className="main-nav-li">
              <Link href="/posts">{t("posts")}</Link>
            </li>
            <li className="ml-5 text-center text-white">
              <div className="border-2 border-gray-200 rounded-full">
                <Link href={router.asPath} locale={router.locale === "fa" ? "en" : "fa"}>
                  <button
                    onClick={toggleLang}
                    id="en"
                    className={router.locale === "en" ? "px-2 rounded-l-full active-lang" : "px-2 rounded-l-full"}
                  >
                    En
                  </button>
                </Link>
                <Link href={router.asPath} locale={router.locale === "en" ? "fa" : "en"}>
                  <button
                    onClick={toggleLang}
                    id="fa"
                    className={router.locale === "fa" ? "px-2 rounded-r-full active-lang" : "px-2 rounded-r-full"}
                  >
                    Fa
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavbar;
