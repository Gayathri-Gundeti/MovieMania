import { Login } from "./Login/login";
import { Home } from "./Home/home";
import { Player } from "./Player/player";
import { EntryPage } from "./Entry-Page/entry";
import { BrowserRouter, Route,Routes } from "react-router-dom";

export function Index(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<EntryPage/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="player/:id" element={<Player/>}/>
                <Route path="*" element={<h2 className="text-danger">Not Found</h2>}/>
            </Routes>
            
            </BrowserRouter>
        </div>
    )
}




