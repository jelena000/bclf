import React from "react";
import { Link } from "react-router-dom";
import mne from '../../assets/mne-zastava.png'
import eng from '../../assets/eng-zastava.png'

export default function Header({ isMain }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const onRegister = () => {

  }
  const handleLanguageMne = () => {
    localStorage.setItem('BCFL_LANG', JSON.stringify("MNE"));
    window.location.reload();
  }
  const handleLanguageEng = () => {
    localStorage.setItem('BCFL_LANG', JSON.stringify("ENG"));
    window.location.reload();
  }

  return (
    <header>
      <nav className={" flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3 absolute top-0 left-0 z-50 w-full "} style={{zIndex: 999, backgroundColor: (isMain ? "transparent" : "#001746")}}>
        <div className="container px-4 mx-auto py-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to='/' 
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-3 whitespace-nowrap uppercase text-white"
            >
              BCLF
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="material-icons">menu</i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center transition-all rounded-lg " +
              (navbarOpen ? " flex bg-blue-500 lg:bg-transparent" : " hidden bg-transparent")
            }
            id="example-navbar-danger"
          >
            <ul className={"flex flex-col lg:flex-row list-none lg:ml-auto py-2"}>
              <li className="nav-item">
                <a
                  className="px-1 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href=""
                >
                  <span className="ml-1 text-blue-100 text-xs" style={{ fontSize: 10}}>Meeting Information</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href=""
                >
                  <span className="ml-1 text-blue-100" style={{ fontSize: 10}}>Scientific Information</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href=""
                >
                  <span className="ml-1 text-blue-100" style={{ fontSize: 10}}>Accommodation</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href=""
                >
                  <span className="ml-1 text-blue-100" style={{ fontSize: 10}}>E-posters</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to='/Registration' className="p-2 border border-blue-200 rounded-md text-blue-200  text-xs cursor-pointer hover:opacity-75" >REGISTRATION</Link>
              </li>
              <li className="flag" onClick={handleLanguageMne}>
                <a href="#">
                  <img alt="crnogorski" className="cg-language" src={mne}></img>
                </a>
              </li>
              <li className="flag" onClick={handleLanguageEng}>
                <a href="#">
                  <img alt="engleski" className="eng-language" src={eng}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}