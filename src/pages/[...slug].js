import { useRouter } from "next/router";

function EventsPages() {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.slug}</h1>
    </>
  );
}

export default EventsPages;
