import React, { useState } from 'react';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
setMenuOpen(!menuOpen);
};

const closeMenu = () => {
setMenuOpen(false);
};

return (
<header className="relative bg-black text-white">
	{/* Burger Menu Icon */}
	<button
	className="block md:hidden p-2 bg-black text-white rounded focus:outline-none"
	onClick={toggleMenu}
	>
	<span className="block w-6 h-0.5 bg-white mb-1"></span>
	<span className="block w-6 h-0.5 bg-white mb-1"></span>
	<span className="block w-6 h-0.5 bg-white"></span>
	</button>

	{/* Navigation Menu */}
	<nav
	className={`${
		menuOpen ? 'block' : 'hidden'
	} md:flex flex-col md:flex-row md:justify-between items-center bg-black p-4 md:p-0 absolute md:static top-full left-0 w-full z-20`}
	>
	{/* Left Navigation */}
	<div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
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
	</div>

	{/* Right Navigation */}
	<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
		<SearchInput />
		<div className="flex space-x-4">
		<Link
		to="/authorization"
		className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black"
		>
		Log in/Register
		</Link>
		<Link
		to="/myaccount"
		className="px-4 py-2 bg-transparent rounded hover:bg-white hover:text-black"
		>
		Profile
		</Link>
		</div>
	</div>
	</nav>

	{/* Overlay for Mobile Menu */}
	{menuOpen && (
	<div
		className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
		onClick={closeMenu}
	></div>
	)}
</header>
);
};

export default Header;
