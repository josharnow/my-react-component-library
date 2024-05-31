import Link from "next/link";
var BackgroundMenu = function (_a) {
    var isOpen = _a.isOpen, toggle = _a.toggle;
    return (<>
      <div className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10" style={{
            opacity: "".concat(isOpen ? "1" : "0"),
            top: " ".concat(isOpen ? "0" : "-100%"),
            color: "black",
        }}>
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about" onClick={toggle}><p>About Us</p></Link>
          </li>
          <li>
            <Link href="/services" onClick={toggle}><p>Services</p></Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}><p>Contacts</p></Link>
          </li>
        </ul>
      </div>
    </>);
};
export default BackgroundMenu;
//# sourceMappingURL=index.jsx.map