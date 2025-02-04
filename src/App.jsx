import { useState } from "react";
import video from "../src/packages/Video-pfe.mp4";
import photo from "../src/packages/911.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header
        className="fixed w-full bg-[#0d0d0d] border-b-2 border-b-amber-50"
        id="Accueil"
      >

        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span class="title1" className="text-slate-50 font-bold text-xl ">
                Garage-Essalam
              </span>
            </a>
          </div>

          <div className="flex justify-between w-6/12 flex-wrap">
            <a href="#" className="text-slate-50 font-bold p-1">
              Accueil
            </a>
            <a href="Accueil" className="text-slate-50 font-bold p-1">
              Nos Voitures
            </a>
            <a href="#" className="text-slate-50 font-bold p-1">
              Espace Garagiste
            </a>
            <a href="#" className="text-slate-50 font-bold p-1">
              Contactez-nous
            </a>
          </div>
        </nav>
      </header>

      <main className="h-[2000px]">
        {/* //Video */}
        <div>
          <video src={video} className="" autoPlay muted loop></video>
        </div>
        {/* <div>
          <img src={photo} alt="car" className="w-full h-[500px]" />
        </div> */}

        {/* Dynamic list */}
        <section></section>

        <h1 className="text-center font-bold text-6xl mt-96">Nos Voitures</h1>
        <div className="w-40 h-2 bg-slate-100 m-auto mt-10 rounded-[12px]"></div>



        {/* Tableau des Voitures */}
        <div class="flex flex-wrap justify-center bg-neutral-400 w-full my-8 py-10">
          <div class="size-[350px] border-1 rounded-xl drop-shadow-xl m-6">
            <img
              src="/src/packages/bmw-6935139.jpg"
              alt=""
              class="rounded-xl size-[350px]"
            />
          </div>
          <div class="size-[350px] border-1 rounded-xl drop-shadow-xl m-6">
            <img
              src="/src/packages/audi-3985578.jpg"
              alt=""
              class="rounded-xl size-[350px]"
            />
          </div>
          <div class="size-[350px] border-1 rounded-xl drop-shadow-xl m-6">
            <img src="/src/packages/mercedes-6216129_1280.jpg" 
            alt=""
            class="rounded-xl size-[350px]"
            />
          </div>
          <div class="size-[350px] border-1 rounded-xl drop-shadow-xl m-6">
            <img src="/src/packages/mercedes-6216129_1280.jpg" 
            alt=""
            class="rounded-xl size-[350px]"
            />
          </div>
        </div>

        <section className="grid grid-rows-3"></section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
