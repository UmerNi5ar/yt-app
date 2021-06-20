import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';



const App  =() => {
  const [videos, setVideos] = useState([]);
    const [ SelectedVid , setSelectedVid] = useState(null);
    const [term, setTerm]= useState('science');
    const [debouncedTerm , setDebouncedTerm] = useState(term);

    

    useEffect(()=>{
      
      const intervalId = setTimeout(() => {
        setDebouncedTerm(term);
      }, 500);
      
      return()=> {
        clearInterval(intervalId)
      }
      
    },[term])
  
    useEffect(()=> {
      if(!debouncedTerm){
        return;
      }
      const onTermSubmit = async (debouncedTerm) => {
        const response = await youtube.get("/search", {
          params: {
            q: debouncedTerm,
          },
        });
        
        
        setVideos(response.data.items);
        setSelectedVid(response.data.items[0]);
        
    
      };
      onTermSubmit(debouncedTerm);
    },[debouncedTerm])

  


  const onVideoSelect = (video)=> {
    setSelectedVid(video);
  }


    return (
      <div className="ui container">
        <SearchBar term={term} setTerm={setTerm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={SelectedVid} />
        
            </div>
            <div className="five wide column">
            <VideoList selectVid={onVideoSelect} videos={videos}/>
            </div>
          </div>
        </div>
        
        

      </div>
    );
  
}

export default App;
