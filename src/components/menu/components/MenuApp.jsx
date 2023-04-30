import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import { useGlobalContext } from "@/context/useContext";

import { Link, useNavigate } from "react-router-dom";

import { HiBars3CenterLeft } from "react-icons/hi2";

import { RiMapPinUserFill } from "react-icons/ri";

import ReactCountryFlag from "react-country-flag";

import { TfiWorld } from "react-icons/tfi";

function MenuApp() {
  const { open_nav, close_nav, user, sign_out_user } = useGlobalContext();
  const movePage = useNavigate();
  function sign_out() {
    sign_out_user();
    movePage("/");
  }
  return (
    <>
      <aside id='sub-menu'>
        <ul>
          <li onClick={() => open_nav()}>
            <HiBars3CenterLeft size={20}></HiBars3CenterLeft>
            <h4>All</h4>
          </li>
          <li>
            <Link to={"/today-deals"}>
              <p>Today's Deals</p>
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <p>Customer Service</p>
            </Link>
          </li>
          <li>
            <Link to={"/signup"}>
              <p>Registry</p>
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <p>Gift Cards</p>
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <p>Sell</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/today-deals"}>
              <p>Shop deals in Electronics</p>
            </Link>
          </li>
        </ul>
      </aside>
      {/* side nav */}
      <nav
        id='mySidenav'
        className='sidenav'>
        <div className='side-profile-nav'>
          {user.auth ? (
            <Link
              to={"/account"}
              className='side-profile-nav-link'>
              <RiMapPinUserFill size={20} />
            </Link>
          ) : (
            <Link
              to={"/login"}
              className='side-profile-nav-link'>
              <RiMapPinUserFill size={20} />
            </Link>
          )}
          <h4>
            {user.auth
              ? user.name.length <= 6
                ? `Hello, ${user.name}`
                : `Hello, ${user.name.substring(0, 5) + "..."}`
              : "Hello, guest "}
          </h4>
        </div>
        <div
          className='side-profile-closeNav'
          onClick={() => close_nav()}>
          <button>Close Menu</button>
        </div>
        <div className='side-content-nav'>
          <div>
            <h3>Trending</h3>
            <li>
              <Link to={"/today-deals"}>Today's Deals</Link>
            </li>
            <li>Best Sellers</li>
            <li>New Releases</li>
            <li>Movers and Shakers</li>
          </div>
        </div>
        <div className='side-content-nav-with-arrow'>
          <div>
            <h3>Digital Content & Devices</h3>
            <li>
              <p>Prime Video</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Amazon Music</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Echo & Alexa</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Fire Tablets</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Fire Tv</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Kindle E-readers & Books</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Audible Books & Originals</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Amazon Photos</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Amazon Appstore</p> <MdKeyboardArrowRight />
            </li>
          </div>
        </div>
        <div className='side-content-nav-with-arrow'>
          <div>
            <h3>Shop By Department</h3>
            <li>
              <p>Clothing, Shoes, Jewelry & Watches</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Books</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Movies, Music & Games</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Electronics</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>See All</p> <MdKeyboardArrowDown />
            </li>
          </div>
        </div>
        <div className='side-content-nav-with-arrow'>
          <div>
            <h3>Programs & Features</h3>
            <li>
              <p>Same-Day Delivery</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Whole Foods Market</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>One Medical</p>
            </li>
            <li>
              <p>Pharmacy</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>See All</p> <MdKeyboardArrowDown />
            </li>
          </div>
        </div>
        <div className='side-content-nav'>
          <div>
            <h3>Help & Setting</h3>
            <li>
              {user.auth ? (
                <Link to={"/account"}>Your Account</Link>
              ) : (
                <Link to={"/login"}>Your Account</Link>
              )}
            </li>
            <li>
              {user.auth ? (
                <Link to={"/orders"}>Returns & Orderst</Link>
              ) : (
                <Link to={"/login"}>Returns & Orderst</Link>
              )}
            </li>
            <li className='display-flex'>
              <TfiWorld />
              <p className='mx-2'>English</p>
            </li>
            <li className='display-flex'>
              <ReactCountryFlag
                countryCode='US'
                svg
              />
              <p className='mx-2'>United States</p>
            </li>
            <li onClick={() => sign_out()}>Sign Out</li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuApp;
