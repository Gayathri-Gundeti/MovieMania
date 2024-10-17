import { useEffect, useState } from "react";
import "./player.css";
import { Link,useParams } from "react-router-dom";
import axios from "axios";

export function Player(){
    const[id,setId]=useState([]);
    let params=useParams();
    function VideoData(){
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=9876addda3c86eb99046544d8b96b80a`)
        .then(response=>{
         
            setId(response.data.results);
           
            
        })
    }
    
    useEffect(()=>{
        VideoData();
    },[])
    return(
        <div className="player">
              <div className="mb-2">
                <Link to="/home" className="link-light"><span className="bi bi-arrow-left-circle"></span></Link>
                <span className="ms-2 fs-4">Back</span>
            </div>
           {
            id.map(item=>
              
             <div>
                 <div>
            <iframe src={`https://www.youtube.com/embed/${item.key}`} ></iframe>
            </div>
            <div className="d-flex justify-content-around  mt-3">
                <p><span className="fw-bold">Published At:</span> &nbsp;{item.published_at.slice(0,10)}</p>
                <p><span className="fw-bold">Name:</span> &nbsp; {item.name}</p>
                <p><span className="fw-bold">Type:</span> &nbsp;{item.type}</p>
            </div>
                </div>
            )
           }
        </div>
        
    )
}