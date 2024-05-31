"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import Button from "./Button";
import Device from "@/src/components/Device";
import joshArnowLogo from "@/src/assets/images/josh_arnow_logo.svg";
import joshArnowLogoNoShadows from "@/src/assets/images/josh_arnow_logo_no_shadows.svg";
var Logo = function () {
    //update the size of the logo when the size of the screen changes
    var _a = useState(0), width = _a[0], setWidth = _a[1];
    var updateWidth = function () {
        var newWidth = window.innerWidth;
        setWidth(newWidth);
    };
    useEffect(function () {
        window.addEventListener("resize", updateWidth);
        updateWidth();
    }, []);
    // change between the logo and the button when the user scrolls
    var _b = useState(false), showButton = _b[0], setShowButton = _b[1];
    var changeNavButton = function () {
        if (window.scrollY >= 400 && window.innerWidth < 768) {
            setShowButton(true);
        }
        else {
            setShowButton(false);
        }
    };
    useEffect(function () {
        window.addEventListener("scroll", changeNavButton);
    }, []);
    return (<>
      {/* <Link href="/" style={ { display: showButton ? "none" : "block" } }> */}
        <Device>
          {function (_a) {
            var isSafari = _a.isSafari;
            return <Image src={!isSafari ? joshArnowLogo : joshArnowLogoNoShadows} alt="Logo" quality={100}/>;
        }}
        </Device>
      {/* </Link> */}
      <div style={{
            display: showButton ? "block" : "none",
        }}>
        {/* <Button /> */}
      </div>
    </>);
};
export default Logo;
//# sourceMappingURL=Logo.jsx.map