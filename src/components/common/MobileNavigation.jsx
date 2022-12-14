import { BasketToggle } from 'components/basket';
import { HOME, SIGNIN } from 'constants/routes';
import PropType from 'prop-types';
import React,{useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UserNav from 'views/account/components/UserAvatar';
import Badge from './Badge';
import FiltersToggle from './FiltersToggle';
import SearchBar from './SearchBar';
import close from '../../images/ham.svg';
import menu from '../../images/menu.svg';
import { FilterOutlined, ShoppingOutlined } from '@ant-design/icons';
import MobileModal from './mobilemodal';
import MobileToggle from 'components/basket/mobiletoggle';
import Popup from './popup';
import { UserOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

const Navigation = (props) => {
  const [toggle, setToggle] = useState(false);
  const {
    isAuthenticating, basketLength, disabledPaths, user
  } = props;
  const { pathname } = useLocation();

  const onClickLink = (e) => {
    if (isAuthenticating) e.preventDefault();
  };

  return (
    <nav className="mobile-navigation py-3 mx-5  bg-plat">
      <div className="mobile-navigation-main bg-plat relative">
        <div className="mobile-navigation-logo">
          <a onClick={onClickLink} href={'https://capital-2db91.web.app/'}>
            <h2 className='text-blk'>MEDIK420</h2>
          </a>
        </div>
         <div className=' m'>
          {/* <Popup toggle={toggle} setToggle={setToggle}/> */}

        <BasketToggle>
          {({ onClickToggle }) => (
            <button
              className=" basket-toggle stroke-white mr-20 flex items-center "
              onClick={onClickToggle}
              disabled={disabledPaths.includes(pathname)}
              type="button"
            >

              <Badge count={basketLength}>
                {/* <i className="fa fa-shopping-bag" style={{ fontSize: '2rem' }} /> */}
                <ShoppingOutlined style={{ fontSize: '2.4rem ' ,color: '#1a1a1a'  }} className="stroke-white" />
              </Badge>
            </button>
          )}
        </BasketToggle>
         </div>
        <ul className="mobile-navigation-menu ">
          {user ? (
            <li className="mobile-navigation-item">
              <UserNav />
            </li>
          ) : (
            <>
              {pathname !== SIGNIN && (
                <li className="mobile-navigation-item ">
                  <Link
                    className="navigation-menu-link bg-plat rounded-2xl mr-3"
                    onClick={onClickLink}
                    to={SIGNIN}
                  >
                    <UserOutlined style={{ fontSize: '2rem ',color: '#1a1a1a'  }}/>
                  </Link>
                  
                </li>
              )}
            </>
          )}
        </ul>
        <Link
                    className="navigation-menu-link bg-plat rounded-2xl mr-3"
                    onClick={onClickLink}
                    to={HOME}
                  >
                    <HomeOutlined style={{ fontSize: '2rem ',color: '#1a1a1a'  }}/>
                  </Link>
        {/* <div className="ilk">
   { !toggle? (<svg width="20" height="12" viewBox="0 0 20 12" fill="#FFF" xmlns="http://www.w3.org/2000/svg " className='[28px] h-[28px] object-contain stroke-blk fill-blk ' onClick={() => setToggle(!toggle)}>
<path d="M9 2L19 2C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.480429 19.7071 0.292892C19.5196 0.105356 19.2652 0 19 0L9 0C8.73478 0 8.48043 0.105356 8.29289 0.292892C8.10536 0.480429 8 0.734784 8 1C8 1.26522 8.10536 1.51957 8.29289 1.70711C8.48043 1.89464 8.73478 2 9 2ZM19 10L1 10C0.734784 10 0.480429 10.1054 0.292892 10.2929C0.105356 10.4804 0 10.7348 0 11C0 11.2652 0.105356 11.5196 0.292892 11.7071C0.480429 11.8946 0.734784 12 1 12L19 12C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10V10ZM1 7L19 7C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5L1 5C0.734784 5 0.480429 5.10536 0.292892 5.29289C0.105356 5.48043 0 5.73478 0 6C0 6.26522 0.105356 6.51957 0.292892 6.70711C0.480429 6.89464 0.734784 7 1 7Z" fill="#FFFFFF"/>
</svg>) : <svg width="18" height="18" viewBox="0 0 18 18" fill="#FFF" xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(!toggle)} className="stroke-blk fill-blk">
<path d="M10.4099 9L16.7099 2.71C16.8982 2.5217 17.004 2.2663 17.004 2C17.004 1.7337 16.8982 1.47831 16.7099 1.29C16.5216 1.1017 16.2662 0.995911 15.9999 0.995911C15.7336 0.995911 15.4782 1.1017 15.2899 1.29L8.99994 7.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L7.58994 9L1.28994 15.29C1.19621 15.383 1.12182 15.4936 1.07105 15.6154C1.02028 15.7373 0.994141 15.868 0.994141 16C0.994141 16.132 1.02028 16.2627 1.07105 16.3846C1.12182 16.5064 1.19621 16.617 1.28994 16.71C1.3829 16.8037 1.4935 16.8781 1.61536 16.9289C1.73722 16.9797 1.86793 17.0058 1.99994 17.0058C2.13195 17.0058 2.26266 16.9797 2.38452 16.9289C2.50638 16.8781 2.61698 16.8037 2.70994 16.71L8.99994 10.41L15.2899 16.71C15.3829 16.8037 15.4935 16.8781 15.6154 16.9289C15.7372 16.9797 15.8679 17.0058 15.9999 17.0058C16.132 17.0058 16.2627 16.9797 16.3845 16.9289C16.5064 16.8781 16.617 16.8037 16.7099 16.71C16.8037 16.617 16.8781 16.5064 16.9288 16.3846C16.9796 16.2627 17.0057 16.132 17.0057 16C17.0057 15.868 16.9796 15.7373 16.9288 15.6154C16.8781 15.4936 16.8037 15.383 16.7099 15.29L10.4099 9Z" fill="#FFFFFF"/>
</svg>   }
      </div> */}
        <div className="ilk">
   { !toggle? <MenuOutlined style={{ fontSize: '2rem ' ,color: '#1a1a1a'  }} onClick={() => setToggle(!toggle)} /> : <CloseOutlined  style={{ fontSize: '2rem ' ,color: '#1a1a1a'  }} onClick={() => setToggle(!toggle)}/>   }
      </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }  bg-blk absolute top-20 right-0 left-0  mx-4 my-2 min-w-[140px] h-min pt-10 pb-20 rounded-xl  z-50 sid   px-5 `}
        >
          
          <ul className="list-none flex justify-end items-start flex-1 flex-col -z-50  gap-8">
            {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))} */}
          <NavLink to='/' name='Home' className={'text-white'}>HOME</NavLink>
          {/* <Navlink to='/dashboard' name='Dashboard'/> */}
          {/* <Navlink to='/https://products-31e31.web.app' name='Packages'/> */}
          {/* <a href="https://products-31e31.web.app" target='blank' className="font-poppins text-xl font-bold text-white">SHOP CBD</a> */}
          {/* <Navlink to='/aboutus' name='About Us'/> */}
         {<NavLink to="/featured"  className="font-poppins text-xl font-bold text-white">Featured</NavLink>}
        { <NavLink to="/recommended"  className="font-poppins text-xl font-bold text-white">Recommended</NavLink>}
        {<NavLink to="/shop"  className="font-poppins text-xl font-bold text-white">SHOP CBD</NavLink>}

          </ul>
        </div>
      </div>
      {/* <div className="mobile-navigation-sec">
      <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div> */}
      {/* <div className="mobile-navigation-sec">
        <SearchBar />
        <FiltersToggle>
          <button className="button-link button-small" type="button">
            <i className="fa fa-filter" />
          </button>
        </FiltersToggle>
      </div> */}
      <div></div>
    </nav>
  );  
};

Navigation.propTypes = {
  isAuthenticating: PropType.bool.isRequired,
  basketLength: PropType.number.isRequired,
  disabledPaths: PropType.arrayOf(PropType.string).isRequired,
  user: PropType.oneOfType([
    PropType.bool,
    PropType.object
  ]).isRequired
};

export default Navigation;





