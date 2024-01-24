import React from 'react';
const Navbar = () => {
    return (
        <div>

            <nav className='container'>
                {/* importing logo */}
                <div className='logo'>
                    <img src="/images/brand_logo.png" alt='logo' />
                </div>

                {/* creating links and button  */}

                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <button>Login</button>


            </nav>
        </div>
    )
}

export default Navbar;