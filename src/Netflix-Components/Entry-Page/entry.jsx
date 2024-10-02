import { Link } from "react-router-dom"
import "./entry.css"

export function EntryPage(){
    return(
            <div className="banner">
              <div className="shade">
              <nav className="entry-nav">
                    <div className="nav-title">MovieMania</div>
                    <div className="d-flex">
                     <select className=" drop-down">
                            <option className="text-dark">English</option>
                            <option className="text-dark">Hindi</option>
                        </select>
                        <Link to="/login"><button className="entry-sign">SignIn</button></Link>  
                    </div>
                </nav>
                <section className="banner-section">
                <p className="title-one">Experience entertainment like never before</p>
                <p className="title-two">Stream your favorite content, anytime, anywhere.</p>
                <main>
                    <p className="main-title">Sign up today for unlimited access to top content.</p>
                    <Link to="/login"><button className="btnStart" >Get Started<span className="bi bi-chevron-right"></span></button></Link>
                  
                </main>
            </section>
              </div>
            </div>
    )
}