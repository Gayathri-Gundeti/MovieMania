import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { EntryPage } from './Netflix-Components/Entry-Page/entry';
import { Home } from './Netflix-Components/Home/home';
import { Player } from './Netflix-Components/Player/player';
import { Login } from './Netflix-Components/Login/login';
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

