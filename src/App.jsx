import React, { useState } from 'react'
import manoImage from './assets/mano.png';


function App() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "Conatct", link: "/" }
  ];

  let [menuOpen, setMenuOpen] = useState(false);


  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <div className='text-white'>
      <nav className='flex w-full justify-between p-8'>
        <div>
          <a href="#">
            <h1 className='text-[20px] font-bold'>mano<span className='text-color-second'>.dev</span></h1>
          </a>
        </div>
        <ul className='hidden md:flex gap-12'>
          {
            Links.map((link) => (
              <li key={link.name} className='hover:text-color-second ease-in duration-100'>
                <a id='hLink' href={link.link}>{link.name}</a>
              </li>
            ))
          }
        </ul>

        {/* Mobile Screen */}

        <div onClick={openMenu} className={`icon-open md:hidden cursor-pointer z-50 ${menuOpen ? 'hidden' : ''}`}>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        </div>

        <div onClick={closeMenu} className={`icon-close md:hidden cursor-pointer z-50 ${menuOpen ? '' : 'hidden'}`}>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        </div>

        <div id="menu" className={`bg-[#18181B] h-[100vh] absolute inset-0 transition-opacity duration-300 ${menuOpen ? '' : 'hidden'}`}>
          <ul className='h-full grid place-items-center py-20'>
            {
              Links.map((link) => (
                <li key={link.name} className='hover:text-color-second ease-in duration-100 opa'>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>

      <header className='relative'>
        <div className='w-80 h-80 bg-color-second absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full'></div>
        <div className='w-80 h-80 bg-color-second absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full'></div>
        
        <div className="relative flex flex-col justify-evenly p-10 md:flex-row items-center">
          <div className='w-[55%] md:w-[30%]'>
            <h1 className='font-bold text-[30px]'>Hey, I'm <span className='text-color-second'>Manoj Kumar</span></h1>
            <p>Data Scientist, Data Analyst, Web Developer, Google DSC Lead</p>
            <button className='bg-color-second px-7 py-3 my-3 rounded-md font-bold hover:opacity-80 ease-in duration-200'>Learn More</button>
          </div>
          <div>
            <img className='w-96' src={manoImage} alt="Mano" />
          </div>
        </div>
      </header>

    </div>

  )
}

export default App