import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';

export default function Home({ exploreData, cardInfo }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((city) => (
              <SmallCard
                key={city.location}
                image={city.img}
                location={city.location}
                distance={city.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardInfo.map((item) => (
              <MediumCard
                key={item.title}
                image={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          title="The Greatest Outdoors"
          image="/images/sight.webp"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const promise = await fetch('https://json.psty.io/api_v1/stores/Airbnb', {
    headers: {
      'Api-Key': process.env.API_KEY,
    },
  });
  const { data: exploreData } = await promise.json();

  const cardData = await fetch('https://json.psty.io/api_v1/stores/cardData', {
    headers: {
      'Api-Key': process.env.API_KEY,
    },
  });
  const { data: cardInfo } = await cardData.json();

  return { props: { exploreData, cardInfo } };
}
