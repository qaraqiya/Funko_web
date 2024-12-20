<<<<<<< HEAD
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
=======
import React, { useState } from 'react';
import SearchInput from './common/SearchInput';
import { Link } from 'react-router-dom';
>>>>>>> bc2d5b10c402bc01f45cc337e72a8dda6aa0fe4c

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="relative bg-black text-white py-5">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Burger Menu Icon */}
                <button
                    className="block lg:hidden p-2 bg-black text-white rounded focus:outline-none"
                    onClick={toggleMenu}>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>

<<<<<<< HEAD
                {/* Left Navigation */}
                <div className="hidden lg:flex space-x-4">
                    <Link to="/main-page">
                        <button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                            Main
                        </button>
                    </Link>
                    <button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                        Product
                    </button>
                    <Link to="/wishlist">
                        <button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                            Wish List
                        </button>
                    </Link>
                </div>
=======
		{/* Left Navigation */}
		<div className="hidden lg:flex space-x-4">
			<button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
			Main
			</button>
			<Link to="/product">
			<button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
			Product
			</button>
			</Link>
			<Link to="/wishlist">
			<button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
			Wish List
			</button>
			</Link>
		</div>
>>>>>>> bc2d5b10c402bc01f45cc337e72a8dda6aa0fe4c

                {/* SearchInput */}
                <div className="flex-grow lg:mx-4 flex justify-end">
                    <SearchInput />
                </div>

                {/* Right Navigation */}
                <div className="hidden lg:flex space-x-4">
                    <Link
                        to="/authorization"
                        className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                        Log in/Register
                    </Link>
                    <Link
                        to="/myaccount"
                        className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                        Profile
                    </Link>
                </div>
            </div>

<<<<<<< HEAD
            {/* Mobile Navigation Menu */}
            <nav
                className={`${
                    menuOpen ? "block" : "hidden"
                } lg:hidden flex flex-col items-center bg-black p-4 w-full absolute top-full left-0 z-20`}>
                <button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                    Main
                </button>
                <button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                    Product
                </button>
                <Link to="/wishlist">
                    <button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                        Wish List
                    </button>
                </Link>
                <Link
                    to="/authorization"
                    className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                    Log in/Register
                </Link>
                <Link
                    to="/myaccount"
                    className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
                    Profile
                </Link>
            </nav>
=======
		{/* Mobile Navigation Menu */}
		<nav
			className={`${
				menuOpen ? 'block' : 'hidden'
			} lg:hidden flex flex-col items-center bg-black p-4 w-full absolute top-full left-0 z-20`}
		>
			<button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
				Main
			</button>
			<Link to="/product">
				<button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
					Product
				</button>
			</Link>
			<Link to="/wishlist">
				<button className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
				Wish List
				</button>
			</Link>
			<Link
				to="/authorization"
				className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
				Log in/Register
			</Link>
			<Link
				to="/myaccount"
				className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black">
				Profile
			</Link>
		</nav>
>>>>>>> bc2d5b10c402bc01f45cc337e72a8dda6aa0fe4c

            {/* Overlay for Mobile Menu */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={closeMenu}></div>
            )}
        </header>
    );
};

export default Header;
