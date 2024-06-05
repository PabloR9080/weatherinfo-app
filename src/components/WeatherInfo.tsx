
interface props{
   weather: any;
}
export const WeatherInfo = ({weather}:props)=>{

    if (!weather || weather === null) {
      return (<>
        <h1 className="text-warn">Something went wrong, try again</h1>
      </>)
    }

    return (
      <div className="p-4 bg-neutral-50 rounded-lg w-max " >
        <div className="flex flex-row gap-2 items-center">

        { weather && weather.sys ?
          <img 
               src={`https://flagsapi.com/${weather.sys.country}/flat/64.png`} alt="flag-icon" width={50} height={30}/>
          : 
          ''
        }
        <h2 className="text-2xl text-neutral-950 font-bold mb-2 self-center text-center">{weather && weather.name ? weather.name : 'Unknown'}</h2>
        </div>
        <div className="flex items-center justify-between gap-6 flex-row-reverse">
          <p className="text-4xl font-bold text-neutral-900">{weather && weather.main ? weather.main.temp : 'N/A'} °C</p>
          <div>
           <p className="uppercase text-xs text-neutral-900"><span className=" text-neutral-500">Humidity:</span> {weather && weather.main ? weather.main.humidity : 'N/A'} %</p>
           <p className="uppercase text-xs text-neutral-900"><span className=" text-neutral-500">Condition:</span> {weather && weather.weather ? weather.weather[0].description : 'Not found'}</p>
          </div>
        </div>
      </div>
    );
}
