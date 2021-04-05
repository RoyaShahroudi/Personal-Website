import Link from "next/link";
import Logo from "./Logo";

const MainNavbar = () => {
  const menuBtn = () => {
    let openIcon = document.getElementById("openIcon");
    let closeIcon = document.getElementById("closeIcon");
    let navigation = document.getElementById("navigation");

    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navigation.classList.toggle("hidden");
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
              <Link href="/">Home</Link>
            </li>
            <li className="main-nav-li">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="main-nav-li">
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavbar;
