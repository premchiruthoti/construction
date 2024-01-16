import Link from "next/link";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes["footer-container"]}>
          <div className={classes["footer-address"]}>
            <h4>Address</h4>
            <h5>Company name</h5>
            <p>Company Address</p>
          </div>
          <div className={classes["footer-links"]}>
            <h4>Important Links</h4>
            <ul>
              <li>
                <Link href='/'>HOME</Link>
              </li>
              <li>
                <Link href='/'>ABOUT US</Link>
              </li>
              <li>
                <Link href='/'>UPCOMING CONFERENCES</Link>
              </li>
              <li>
                <Link href='/'>PAST CONFERENCES</Link>
              </li>
              <li>
                <Link href='/'>REVIEWS</Link>
              </li>
              <li>
                <Link href='/'>WEBINAR</Link>
              </li>
              <li>
                <Link href='/'>GALLERY</Link>
              </li>
              <li>
                <Link href='/'>CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className={classes["footer-conferences"]}>
            <h4>Conference</h4>
            <ul>
              <li>
                <Link href='/'>HOME</Link>
              </li>
              <li>
                <Link href='/'>ABOUT US</Link>
              </li>
              <li>
                <Link href='/'>UPCOMING CONFERENCES</Link>
              </li>
              <li>
                <Link href='/'>PAST CONFERENCES</Link>
              </li>
              <li>
                <Link href='/'>REVIEWS</Link>
              </li>
              <li>
                <Link href='/'>WEBINAR</Link>
              </li>
              <li>
                <Link href='/'>GALLERY</Link>
              </li>
              <li>
                <Link href='/'>CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes["footer-bottom"]}>
          <p className="text-center m-0 py-5 text-white bg-black">Copyright &copy; 2023 - {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
