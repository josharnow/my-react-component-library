// NOTE - https://www.reddit.com/r/reactjs/comments/17i3a1p/what_is_the_benefit_of_the_indextsx_naming/
import React from "react";
import styles from './styles.module.scss';
// import { classNames } from "@/src/app/_utils";
var Navbar = function (_a) {
    var toggle = _a.toggle;
    function classNames() {
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        return classes.filter(Boolean).join(" ");
    }
    return (<>
      <nav className={classNames(styles.navbar, 'sm:hidden h-20')}>
      <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="p-3" style={{ height: '100%', aspectRatio: '1/1' }}>
              {/* <Logo /> */}
            </div>

            {/* <ul className="flex gap-x-6 text-black ">
          <li>
            <Link href="/about">
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <p>Contacts</p>
            </Link>
          </li>
        </ul> */}
            <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="black" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>);
};
export default Navbar;
//# sourceMappingURL=index.jsx.map