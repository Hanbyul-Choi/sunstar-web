import Banner from './src/components/Main/Banner';
import Service from './src/components/Main/Service';

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="max-w-[1296px] mx-auto px-2">
        <Service />
      </div>
    </div>
  );
}
