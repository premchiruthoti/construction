import Image from "next/image";
import classes from "./conferences.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/lib/formatDate";

export default function Conferences(props) {
  const [upcomingConferences, setUpcomingConferences] = useState([]);
  const [pastConferences, setPastConferences] = useState([]);

  const router = useRouter();
  const pathName = router.pathname;
  console.log(props.data);

  // useEffect(() => {
  //   const upcomingEventData = [];
  //   const pastEventData = [];
  //   const getEventData = async () => {
  //     const response = await fetch("http://localhost:3000/api/events/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     // console.log(data.rows);
  //     data.rows.map((row) => {
  //       // console.log(row);
  //       const date = row.date.split("T");
  //       const givenDate = date[0];
  //       // console.log(givenDate);
  //       const currentDate = new Date();
  //       // console.log(currentDate);
  //       let eventDate = new Date(givenDate);
  //       // console.log(eventDate);
  //       if (eventDate > currentDate) {
  //         // console.log(row);
  //         upcomingEventData.push(row);
  //         setUpcomingConferences(upcomingEventData);
  //         // console.log("Upcomming conference");
  //       } else {
  //         pastEventData.push(row);
  //         // console.log("Past conference");
  //         setPastConferences(pastEventData);
  //       }
  //     });
  //   };
  //   getEventData();
  // }, []);

  // console.log(pastConferences);
  // console.log(upcomingConferences);

  return (
    <>
      <section className='max-w-[1200px] m-auto py-5'>
        <h1 className='text-2xl text-center font-bold'>{props.title}</h1>
        <div className='flex justify-center items-center flex-wrap my-5'>
          {props.data.length > 0 &&
            props.data.map((item) => (
              <div
                key={item.id}
                className='max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 hover:shadow-2xl hover:bg-violet-200'
              >
                <a href={`${item.slug}`} target='_blank'>
                  <Image
                    className='rounded-t-lg w-full'
                    src={`https://construction-network-bucket.s3.ap-south-1.amazonaws.com/${item.event_image_path}`}
                    alt=''
                    width={400}
                    height={400}
                  />
                </a>
                <div className='p-5'>
                  <a href={`${item.slug}`} target='_blank'>
                    <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white leading-none'>
                      {item.edition_title}
                    </h5>
                    <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-none'>
                      {item.main_title}
                    </h4>
                  </a>
                  <p className='mb-3 font-normal text-amber-600'>
                    {`${formatDate(item.start_date, item.end_date)} ${
                      item.city
                    }, ${item.country}`}
                  </p>
                  <a
                    href={`${item.slug}`}
                    target='_blank'
                    className='inline-flex items-center text-blue-600 hover:underline'
                  >
                    Read More
                    <svg
                      className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 18 18'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}

          {(pathName === "/upcoming-conferences" ||
            props.title === "Upcoming Conferences") &&
            upcomingConferences.map((conf) => {
              return (
                <>
                  <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 hover:shadow-2xl'>
                    <a href={`${conf.slug}`} target='_blank'>
                      <Image
                        className='rounded-t-lg w-full'
                        src={`https://construction-network-bucket.s3.ap-south-1.amazonaws.com/${conf.event_image_path}`}
                        alt=''
                        width={400}
                        height={400}
                      />
                    </a>
                    <div className='p-5'>
                      <a href='#'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                          {conf.event_title}
                        </h5>
                      </a>
                      <p className='mb-3 font-normal text-amber-600'>
                        {conf.event_date}
                      </p>
                      <a
                        href={`${conf.slug}`}
                        target='_blank'
                        className='inline-flex items-center text-blue-600 hover:underline'
                      >
                        Read More
                        <svg
                          className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 18 18'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}

          {/* {pathName === "/past-conferences" &&
            pastConferences.map((conf) => {
              return (
                <>
                  <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 hover:shadow-2xl'>
                    <a href={`${conf.slug}`} target='_blank'>
                      <Image
                        className='rounded-t-lg w-full'
                        src={`https://construction-network-bucket.s3.ap-south-1.amazonaws.com/${conf.event_image_path}`}
                        alt=''
                        width={400}
                        height={400}
                      />
                    </a>
                    <div className='p-5'>
                      <a href='#'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                          {conf.event_title}
                        </h5>
                      </a>
                      <p className='mb-3 font-normal text-amber-600'>
                        {conf.event_date}
                      </p>
                      <a
                        href={`${conf.slug}`}
                        target='_blank'
                        className='inline-flex items-center text-blue-600 hover:underline'
                      >
                        Read More
                        <svg
                          className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 18 18'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })} */}
        </div>
      </section>
    </>
  );
}
