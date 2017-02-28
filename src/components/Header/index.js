import React from 'react';
import FaUser from 'react-icons/lib/fa/user';
import FaSignOut from 'react-icons/lib/fa/sign-out';


const Header = ({}) =>
    <div className="header">
        <p>Astoria Hotel. Quick fix</p><span>
        <a href="#" title="User">
            <FaUser />
        </a>
        Chad Engle
        <a href="#" title="Sign out">
            <FaSignOut />
        </a></span>
    </div>

export default Header;