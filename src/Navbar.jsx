import { memo } from "react";
import { NavbarStyle } from "./style/Navbar-Style";

function Navbar(proms) {
    console.log("Navbar")
    return (
        <NavbarStyle>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="Salomon Logo" />
                </div>
                <div className="navbar-search">
                    <input type="text" placeholder="Search" /> 
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
                </div>
            </div>
        </NavbarStyle>
    );
}
export default memo(Navbar);


