import Image from "next/image";
import classes from "./conferences.module.css";

export default function Conferences(props) {
  return (
    <>
      <section className='max-w-[1200px] m-auto py-5'>
        <h1 className='text-2xl text-center font-bold'>{props.title}</h1>
        <div className="flex justify-between items-center flex-wrap my-5">
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 hover:shadow-2xl'>
            <a href='#'>
              <Image
                className='rounded-t-lg w-full'
                src='/images/image-1.jpg'
                alt=''
                width={400}
                height={400}
              />
            </a>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-amber-600'>
                March 18-20 | Hyderabad, India
              </p>
              <a
                href='#'
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
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 hover:shadow-2xl'>
            <a href='#'>
              <Image
                className='rounded-t-lg w-full'
                src='/images/image-1.jpg'
                alt=''
                width={400}
                height={400}
              />
            </a>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-amber-600'>
                March 18-20 | Hyderabad, India
              </p>
              <a
                href='#'
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
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 hover:shadow-2xl'>
            <a href='#'>
              <Image
                className='rounded-t-lg w-full'
                src='/images/image-1.jpg'
                alt=''
                width={400}
                height={400}
              />
            </a>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-amber-600'>
                March 18-20 | Hyderabad, India
              </p>
              <a
                href='#'
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
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 hover:shadow-2xl'>
            <a href='#'>
              <Image
                className='rounded-t-lg w-full'
                src='/images/image-1.jpg'
                alt=''
                width={400}
                height={400}
              />
            </a>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-amber-600'>
                March 18-20 | Hyderabad, India
              </p>
              <a
                href='#'
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
          
          
        </div>
      </section>
    </>
  );
}
