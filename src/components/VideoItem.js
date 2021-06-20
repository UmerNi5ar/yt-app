import React from 'react';
import './VideoItem.css';


const VideoItem = ({video , selectVid}) => {
  return (
    
      <div key={video.id} className="video-item item" onClick={()=> selectVid(video)}>
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        </div>
      </div>
   
    
  );
};

export default VideoItem;
