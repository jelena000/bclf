import React from "react";
import { Link } from "react-router-dom";

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const onRegister = () => {

  }

  return (
    <header>
      <nav className=" flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3 absolute top-0 left-0 z-50 w-full" style={{zIndex: 999,}}>
        <div className="container px-4 mx-auto py-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-3 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              BALKAN CLINICAL LABORATORY FEDERATION MEETING
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-1 text-blue-100 text-xs" style={{ fontSize: 10}}>Meeting Information</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-1 text-blue-100" style={{ fontSize: 10}}>Scientific Information</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-1 text-blue-100" style={{ fontSize: 10}}>Accommodation</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-1 text-blue-100" style={{ fontSize: 10}}>E-posters</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to='Registration' className="p-2 border border-blue-200 rounded-md text-blue-200  text-sm cursor-pointer" >Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}