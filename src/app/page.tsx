import { WeatherSearch, WeatherInfo, Footer, Navbar } from "@/components";
import WeatherLocation from "@/components/WeatherLocation";
import { fetchWeather } from "@/utils";

interface props {
  searchParams: {
    city: string;
  };
}

const App = async ({ searchParams }: props) => {
  let weather = await fetchWeather(searchParams.city);
  
  return (
    <>
      <Navbar />
      <div className="size-full flex flex-col overflow-y-auto">
      <div className="flex h-[2000px] flex-col md:flex-row items-center justify-center py-2 md:gap-8 p-4">
        <WeatherInfo weather={weather} />
        <WeatherLocation />
      </div>
      <Footer />
      </div>
    </>
  );
};

export default App;
