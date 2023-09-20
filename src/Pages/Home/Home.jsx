import React from 'react';
/* import Landscape1 from '../../Img/landscape1.jpg'
import Landscape2 from '../../Img/landscape2.jpg'
import Portrait1 from '../../Img/portrait1.jpg' */
import './Home.css'
import Footer from '../Footer/Footer'
import Carousel1 from '../../Functions/Carousel_1';
/* import Carousel2 from '../../Functions/Carousel_2';
import Carousel3 from '../../Functions/Carousel_3'; */
import { Parallax } from 'react-parallax';
import { NavLink } from "react-router-dom";

function Home() {
  return ( 
  <div className="main-container">
    <div className="main-hero">
        <div className="main-left" >
        <div className="carousel-title">
<h1>Polgar Alex</h1>
<h2>Portré, esküvő és marketing fényképész.</h2>
</div> 
        <Carousel1 />
        </div>  
  
  {/* <div className="main-right">
  <Carousel2 />
  <Carousel3 />
  </div> */}

  </div>

<div className="home-description">
  <div className="left-description">
    <p>Esküvő</p>
    <p>Portré</p>
    <p>Marketing</p>
  </div>

  <div className="right-description">
    <p>Esküvői Fotózás: Az életnek ezen csodálatos napján a szeretet és az összetartozás pillanatait ragadom meg. Az apró részletektől az egész esküvői ceremóniáig, minden kép a nap varázslatos atmoszféráját és az érzelemgazdag eseményeket tükrözi. Az Ön különleges napját örömmel örökítem meg, hogy a későbbiekben újra és újra megélhesse azt.</p>
    <p>Portréfotózás: Az emberek egyedülálló személyiségének és lényegének megörökítésére törekszem. Minden portré egy történetet mesél el az egyénről, legyen szó egy spontán pillanatról vagy egy gondosan megtervezett beállításról. A célom, hogy a képeken keresztül megmutassam a valódi ént, és megörökítsem azokat az értékes pillanatokat, amelyek az idő múlásával csak értékesebbé válnak.</p>
    <p>Marketing Fotózás: A vizuális tartalom kulcsfontosságú a mai piacon. Képeimmel elősegítem a márkákat abban, hogy kiemelkedjenek a tömegből, és mélyebb kapcsolatot alakítsanak ki ügyfeleikkel. A termékek, szolgáltatások vagy akár a cég kultúrájának bemutatása során a célom az, hogy lenyűgöző, hatékony és emlékezetes vizuális anyagokat hozzak létre.</p>

  </div>
  
  

</div>
  <div className="parallax-container">
  
    <Parallax  bgImage="https://images.unsplash.com/photo-1654949004884-cfbbdf200657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" bgImageAlt="the cat">
        <div className="parallax-content">
        <button className="nav-button">
        <NavLink to="/references">Nézd meg a referenciákat</NavLink>
        </button>
        </div>
    </Parallax>

  </div>

  <div className="contact-container">
    <div className="contact-left">
    <Parallax  bgImage="https://images.unsplash.com/photo-1694861651735-555e68428c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" bgImageAlt="the cat">
        <div className="contact-image">

        </div>
    </Parallax>
    {/* <img className="contact-image" src="https://images.unsplash.com/photo-1694861651735-555e68428c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="unsplash stolen" /> */}
    </div>

    <div className="contact-right">
  {/*   <h1>Vedd fel velünk a kapcsolatot!</h1> */}
    <h2>Kérdéseid vannak vagy további információra lenne szükséged? Írj nekünk, és hamarosan válaszolunk!</h2>

{/* <div className="faq">
  <h1>Néhány gyakran ismételt kérdés:</h1>
<p className="question">Hogyan foglalhatok időpontot?</p>
<p className="answer">Az időpontfoglaláshoz kérjük, írj nekünk e-mailt vagy hívj fel.</p>

<p className="question">Mennyi idővel előre kell foglalnom?</p>
<p className="answer">Javasolt legalább 2 héttel az előre tervezett időpont előtt foglalni, de az aktuális rendelkezésre állásunk függően rugalmasak vagyunk.</p>

<p className="question">Milyen fizetési módokat fogadtok el?</p>
<p className="answer">Átutalást vagy készpénzt fogadunk el.</p>

<p className="question">Van lehetőség lemondásra vagy időpont módosításra?</p>
<p className="answer">Igen, az időpontot legkésőbb 48 órával az előre foglalt időpont előtt módosíthatod vagy lemondhatod.</p>

</div> */}

    <button className="nav-button-contact">
        <NavLink to="/references">Lépj velem kapcsolatba</NavLink>
        </button>
</div>
  </div>

  <Footer />
  </div>
  
  );}

export default Home;
