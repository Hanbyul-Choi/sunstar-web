import Banner from './src/components/Main/Banner';
import Contact from './src/components/Main/Contact';
import Portfolio from './src/components/Main/Portfolio';
import Service from './src/components/Main/Service';

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="max-w-[1296px] mx-auto px-4">
        <Service />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
