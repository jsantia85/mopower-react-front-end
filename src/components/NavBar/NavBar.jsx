import { NavLink,Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {/* Sets up initial color of navbar */}
      <nav class="navbar navbar-dark bg-dark fixed-top">
        {/* container for home btn and navBar toggle */}
        <div class="container-fluid">
          <NavLink to='/' className={styles.link}>
            Home
          </NavLink>
          {/* code for navBar toggle */}
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* code allows horizontal tab to open */}
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            {/* Code creates header for tab and adds close btn */}
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            {user ?
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <NavLink to="/profiles">
                  Profiles
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="" onClick={handleLogout}>
                  LOG OUT
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/changePassword">
                  Change Password
                </NavLink>
              </li>
            </ul>
            :
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <NavLink to="/login">
                  Log In
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/signup">
                  Sign Up
                </NavLink>
              </li>
            </ul>
            }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
