import Conferences from "@/components/conferences/conferences";
import classes from "./index.module.css";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

export default function UpcomingConferencesPage() {
  const [conferenceData, setconferenceData] = useState([]);

  useEffect(() => {
    const getEventData = async () => {
      const response = await fetch("http://localhost:3000/api/events?conf=uconf", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setconferenceData(data)
      // console.log(data)
      // data.map((row) => {
      //   // console.log(row);
      //   // const date = row.date.split("T");
      //   // const givenDate = date[0];
      //   // // console.log(givenDate);
      //   // const currentDate = new Date();
      //   // // console.log(currentDate);
      //   // let eventDate = new Date(givenDate);
      //   // // console.log(eventDate);
      //   // if (eventDate > currentDate) {
      //   //   // console.log(row);
      //   //   upcomingEventData.push(row);
      //   //   setUpcomingConferences(upcomingEventData);
      //   //   // console.log("Upcomming conference");
      //   // } else {
      //   //   pastEventData.push(row);
      //   //   // console.log("Past conference");
      //   //   setPastConferences(pastEventData);
      //   // }
      // });
    };
    getEventData();
  }, []);

  return (
    <>
      <Conferences title='Upcoming Conferences' data={conferenceData} />
    </>
  );
}
