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
  function handleMouseover(e) {


  }
  useEffect(() => {
    LoadData();


  }, [])

  const chunkedData = [];
  for (let i = 0; i < data.length; i += 6) {
    chunkedData.push(data.slice(i, i + 6));
  }
  return (
    <div className="container-fluid">
      <header>
        <nav className="home-nav">
          <div >
            <span id="menu">
              <button className="bi bi-justify" data-bs-toggle="dropdown" data-bs-target="#menu"></button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Home</li>
                <li className="dropdown-item">TVShows</li>
                <li className="dropdown-item">Movies</li>
                <li className="dropdown-item">New&Popular</li>
                <li className="dropdown-item">MyList</li>
                <li className="dropdown-item">BrowseByLanguages</li>
              </ul>
            </span>
            <span className="title ms-4">NETFLIX</span>
          </div>
          <div className="list-items">
           <span>Home</span>
            <span>TVShows</span>
            <span>Movies</span>
            <span>New&Popular</span>
            <span>MyList</span>
            <span>BrowseByLanguages</span>
          </div>
          <div className="nav-icons">
            <span className="bi bi-search"></span>
            <span className="bi bi-bell"></span>
            <span className="bi bi-power" title="SignOut" onClick={handleSignoutClick}></span>
          </div>
        </nav>
        <div className="movie-title">

          <p className="lion-the"> THE</p>
          <p className="lion-title">LION KING</p>
          <p className="lion-des">Disney's The Lion King is about a young lion named Simba,<br /> who is the crown prince of an African Savanna. When his father dies in an accident staged by his uncle, <br />Simba is made to feel responsible for his father's death and must overcome his fear of taking responsibility as the rightful heir to the throne.</p>
        </div>
        <div className="buttons">
          <button className=" btn bi bi-play-fill" id="play">Play</button>
          <button className=" btn bi bi-info-circle" id="more-info">More Info</button>
        </div>
      </header>
      <main className="home-main">
        <section>
          <div >
            <h2 className="mb-4 ms-3">Popular on Netflix</h2>
            <div className="card-flex" id="scrolling-image">
              <div className="card-track">
                {
                  data.map(item =>
                    <div>
                      <div><img key={item.id} src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} height="200" onMouseOver={handleMouseover} /> </div>
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

        <section className="carousel-section">
          <div id="banners1" className="carousel slide" data-bs-theme="dark">
            <div className="carousel-inner">
              {chunkedData.map((chunk, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <h2 className="mb-4 ms-3">Blockbuster Movies</h2>
                  <div className="card-flex d-flex justify-content-around" id="resp-cards">
                    {chunk.map((item) => (
                      <div key={item.id} className="card" id="movie-cards">
                        <img
                          src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                          className="card-img-top"
                          alt={item.original_title}
                        />
                        <div className="card-body ">
                          <span className="card-title" >{item.original_title}</span>
                          <Link to={`/player/${item.id}`}><span className="bi bi-play"></span></Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#banners1"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#banners1"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>

        <section className="carousel-section">
          <div id="banners2" className="carousel slide" data-bs-theme="dark">
            <div className="carousel-inner">
              {chunkedData.map((chunk, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <h2 className="mb-4 ms-3">Only on Netflix</h2>
                  <div className="card-flex d-flex justify-content-around" id="resp-cards">
                    {chunk.map((item) => (
                      <div key={item.id} className="card" id="movie-cards">
                        <img
                          src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                          className="card-img-top"
                          alt={item.original_title}
                        />
                        <div className="card-body ">
                          <span className="card-title" >{item.original_title}</span>
                          <Link to={`/player/${item.id}`}><span className="bi bi-play"></span></Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#banners2"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#banners2"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>


        <section className="carousel-section">
          <div id="banners3" className="carousel slide" data-bs-theme="dark">
            <div className="carousel-inner">
              {chunkedData.map((chunk, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <h2 className="mb-4 ms-3">Top Pics for You</h2>
                  <div className="card-flex d-flex justify-content-around" id="resp-cards">
                    {chunk.map((item) => (
                      <div key={item.id} className="card" id="movie-cards">
                        <img
                          src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                          className="card-img-top"
                          alt={item.original_title}
                        />
                        <div className="card-body ">
                          <span className="card-title" >{item.original_title}</span>
                          <Link to={`/player/${item.id}`}><span className="bi bi-play"></span></Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#banners3"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#banners3"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
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

