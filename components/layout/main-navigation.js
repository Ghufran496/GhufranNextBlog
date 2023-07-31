import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

const MainNavigation = (props) => {
  // //<Link href="/">
  // <Logo />
  // </Link>  lINK ONLY WORKS ON PLAIN TEXT IN ORDER TO WORK THIS ON ANY COMPONENTS OR ANY HTML TAGS YOU NEED TO WRAP IT AROUND ANCHOR TAG. AND DONT NEED TO SET HREF HERE AGAIN
  return (
    <header className={classes.header}>
      <Link href="/" legacyBehavior>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
