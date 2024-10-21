import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [data, setData] = useState([]);
  const [cookie, setCookie, removeCookie] = useCookies(["email", "password"]);
  let navigate = useNavigate();
  function LoadData() {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9876addda3c86eb99046544d8b96b80a")
      .then(response => {
        setData(response.data.results);

      })
  }
  function handleSignoutClick() {
    removeCookie('email');
    removeCookie('password');
    navigate("/");
  }

  useEffect(() => {
    LoadData();


  }, [])


  return (
    <div id="#container">
      <header>
        <div id="bg-shade">
        <nav className="home-nav">
          <div >
            <span id="menu">
              <button className="bi bi-justify" data-bs-toggle="dropdown" data-bs-target="#menu"></button>
              <ul className="dropdown-menu">
                <li className="dropdown-item"><a href="#">Home</a></li>
                <li className="dropdown-item"><a href="#popular">Popular</a></li>
                <li className="dropdown-item"><a href="#blockbuster">Blockbuster</a></li>
                <li className="dropdown-item"><a href="#latest">Latest</a></li>
                <li className="dropdown-item"><a href="#toppics">TopPics</a></li>
              </ul>
            </span>
            <span className="title ms-4">MovieMania</span>
          </div>
          <div className="list-items">
          <a href="#"><span>Home</span></a>
          <a href="#popular"><span>Popular</span></a>
          <a href="#blockbuster"><span>Blockbuster</span></a>
          <a href="#latest"><span>Latest</span></a>
          <a href="#toppics"><span>TopPics</span></a>
          </div>
          <div className="nav-icons">
            <span className="bi bi-power" title="SignOut" onClick={handleSignoutClick}></span>
          </div>
        </nav>
        <div className="movie-title">
              <p id="main-title">Despicable me 4</p>
              <p id="description">The film sees reformed supervillain and secret agent Gru (Carell) relocate his family to a safe house when his old rival Maxime Le Mal (Ferrell) seeks revenge. Subplots deal with Gru's family adjusting to their new lives, teenage neighbor Poppy Prescott (King) trying to follow in Gru's villainous footsteps, and a group of Gru's Minions (Coffin) becoming superheroes.</p>
              <button className=" btn bi bi-play-fill" id="watch">Watch Now</button>
        </div>
        </div>
      </header>
      <main id="home-main">
        <section id="popular">
          <div >
            <h2 className="mb-4 ms-3">Popular on MovieMonia</h2>
            <div className="card-flex" id="scrolling-image">
              <div className="card-track">
                {
                  data.map(item =>
                    <div>
                      <div><img key={item.id} src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} height="200"  /> </div>
                      <div className="my-3">
                        <span>{item.original_title}</span>
                        <Link to={`/player/${item.id}`}><span className="bi bi-play ms-3"></span></Link>
                      </div>

                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </section>

        <section id="blockbuster">
          <div >
            <h2 className="mb-4 ms-3">Blockbuster Movies</h2>
            <div className="cards">
              
                {
                  data.map(item =>
                    <div>
                      <div id="card-img"><img key={item.id} src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} height="200" /> </div>
                      <div className="my-3">
                        <span>{item.original_title}</span>
                        <Link to={`/player/${item.id}`}><span className="bi bi-play"></span></Link>
                      </div>

                    </div>
                  )
                }
              
            </div>
          </div>
        </section>
        <section id="latest">
          <div >
            <h2 className="mb-4 ms-3">Latest on MovieMonia</h2>
            <div className="cards">
              
                {
                  data.map(item =>
                    <div>
                      <div id="card-img"><img key={item.id} src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} height="200" /> </div>
                      <div className="my-3">
                        <span>{item.original_title}</span>
                        <Link to={`/player/${item.id}`}><span className="bi bi-play"></span></Link>
                      </div>

                    </div>
                  )
                }
              
            </div>
          </div>
        </section>

        <section id="toppics">
          <div >
            <h2 className="mb-4 ms-3">Top Pics for You</h2>
            <div className="cards">
              
                {
                  data.map(item =>
                    <div>
                      <div id="card-img"><img key={item.id} src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} height="200" /> </div>
                      <div className="my-3">
                        <span>{item.original_title}</span>
                        <Link to={`/player/${item.id}`}><span className="bi bi-play"></span></Link>
                      </div>

                    </div>
                  )
                }
              
            </div>
          </div>
        </section>
      </main>
      <footer id="footer-media">
        <div>
          <span className="bi bi-facebook ms-3"></span>
          <span className="bi bi-instagram me-3 ms-3"></span>
          <span className="bi bi-twitter me-3"></span>
          <span className="bi bi-youtube"></span>
        </div>
        <div className="services">
          <div >
            <span className="sub-footer">Audio Description</span>
            <span>Investor Relations</span>
            <span>Legal Notices</span>
          </div>
          <div >
            <span className="sub-footer">Help Centre</span>
            <span>Jobs</span>
            <span>Cookie Preferences</span>
          </div>
          <div >
            <span className="sub-footer">Gift Cards</span>
            <span>Terms of Use</span>
            <span>Corporate Information</span>
          </div>
          <div >
            <span className="sub-footer">Media Centre</span>
            <span>Privacy</span>
            <span>Contact Us</span>
          </div>

        </div>

      </footer>


    </div>
  )
}

