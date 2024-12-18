import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Footer from './components/Footer';
import Authorization from './components/Autorization';
import Wishlist from './components/Wishlist';
import MyAccount from './components/MyAccount';
import EditProfile from './components/EditProfile';
import ChangePassword from './components/ChangePassword';
import ProductPage from './components/ProductPage';
import Cart from './components/cart/Cart';





function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow bg-primary-white">
          <Routes>
			<Route path='/product' element={<ProductPage />}></Route>
			<Route path='/wishlist' element={<Wishlist />}></Route>
			<Route path='/myaccount' element={<MyAccount />}></Route>
			<Route path="/authorization" element={<Authorization />} />
			<Route path="/edit-profile" element={<EditProfile />} />
			<Route path="/change-password" element={<ChangePassword />}/>
			<Route path="/cart" element={<Cart />}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
