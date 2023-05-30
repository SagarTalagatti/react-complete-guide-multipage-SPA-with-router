import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* className prop of NavLink receives a function which should return the CSS class name that should be added to the underlying anchor tag. This function when called receives an object as an argument and this object has a property isActive (which we can extract using object destructuring as in below example), which is true if the link is currently active, i.e., it led to the currently active route  */}
            {/* the end prop of NavLink is used to tell React that the link should be considered to be active only if the currently active route ends with the specified path. This prop can have value as true or false, and the default value it takes is true as in below example. */}
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
