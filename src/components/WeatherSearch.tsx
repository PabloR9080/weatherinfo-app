
export const WeatherSearch=()=>{

    return(
       <form 
            method="GET"
            className="flex items-center justify-center gap-2 w-max">
            <input 
                type="text" 
                placeholder="Search a city!" 
                className=" md:px-4 py-2 text-neutral-950 rounded-md border "
                name="city"
                />
            <button className="px-4 py-2 bg-blue-600 text-sm text-white hover:bg-blue-700 font-medium rounded-md">
                Search
            </button>
       </form>
    )
}

