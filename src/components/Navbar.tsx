import WeatherLocation from "./WeatherLocation";
import { WeatherSearch } from "./WeatherSearch";

export const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between border-b p-3">
      <h1 className="text-lg font-bold text-neutral-950">Weather App</h1>
      <WeatherSearch />
    </nav>
  );
};

