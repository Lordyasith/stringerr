import {Error,Loader,SongCard} from "../components"
import {genres} from "../assets/constants"
import "./discover.css"
import { useGetTopChartQuery } from "../redux/services/shazamCore"



const Discover = () => {
    const{data,isFetching,error}=useGetTopChartQuery();
    const genreTitle="Pop"
    /*console.log(data)*/
   
    return(
        <div className="discover_container">
            <div className="discover_container1">
                <h2 className="discoverTitle">Discover {genreTitle}</h2>
                <select onChange={()=>{}} value="" className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                    {genres.map((genre=>
                        <option key={genre.value} value={genre.value}>{genre.title}</option>))}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                        {[1,2,3,4,5,6,7,8,9,10].map((song,i)=>(
                            <SongCard key={song} value={song} i={i}/>
                        ))}
            </div>
        </div>
    );
    
}


export default Discover;
