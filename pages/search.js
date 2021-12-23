import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

const Search = ({ rooms }) => {
  const router = useRouter();
  const { startDate, endDate, numGuests, location } = router.query;
  const formattedStartDate = startDate
    ? format(new Date(startDate), 'dd MMMM yy')
    : '';
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'dd MMMM yy')
    : '';
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numGuests}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays / {range} / for {numGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays In {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {rooms.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                price={item.price}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const promise = await fetch('https://json.psty.io/api_v1/stores/rooms', {
    headers: {
      'Api-Key': process.env.API_KEY,
    },
  });
  const { data: rooms } = await promise.json();
  return { props: { rooms } };
}

export default Search;
