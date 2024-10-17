import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { EntryPage } from './Components/Entry-Page/entry';
import { Home } from './Components/Home/home';
import { Player } from './Components/Player/player';
import { Login } from './Components/Login/login';
import './App.css';

function App() {
  return (
   <div className='container-fluid'>
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

export default App;

