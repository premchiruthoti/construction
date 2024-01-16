import Image from "next/image";
import { Inter } from "next/font/google";
import SimpleSlider from "@/components/slider/slider";
import Conferences from "@/components/conferences/conferences";
import classes from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <SimpleSlider />
      <section className={classes["aboutus-section"]}>
        <div className={classes["aboutus-container"]}>
          <h1 className={classes["aboutus-heading"]}>About Us</h1>
          <p className={classes["aboutus-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque a odio in nunc vulputate semper in eget arcu. Fusce
            facilisis massa malesuada tellus faucibus sagittis. Aenean justo
            mauris, tristique non faucibus nec, dignissim eget est. Vivamus mi
            metus, finibus ut enim quis, facilisis auctor tortor. Quisque
            convallis pharetra vulputate. Aliquam eu molestie diam, quis
            dignissim erat. Nunc auctor sit amet enim ut iaculis. Nunc quis
            tincidunt nulla, eu finibus nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aenean quis sem
            non est vehicula vestibulum. Nam euismod ex nec mattis consectetur.
            Praesent accumsan a libero in venenatis. Vestibulum bibendum, leo id
            interdum dictum, ipsum est aliquet tellus, sit amet tincidunt urna
            turpis et magna. Nam pulvinar, urna et placerat rutrum, justo odio
            hendrerit erat, non congue risus nisi eu metus.
          </p>
          <p className={classes["aboutus-description"]}>
            Maecenas ultricies, ipsum et pellentesque eleifend, libero arcu
            fringilla diam, a consequat elit eros eget ante. Sed congue diam et
            nisl rhoncus aliquam. Sed vel condimentum nibh. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vestibulum ultrices ornare
            risus, sed pulvinar ex feugiat eget. Vestibulum ut nisl id libero
            vulputate sagittis.{" "}
          </p>
        </div>
      </section>
      <Conferences title="Upcoming Conferences" />
    </main>
  );
}