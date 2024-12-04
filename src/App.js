import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './Header';
import Footer from './Footer';
import Authorization from './Autorization'; // Import Authorization component
import Wishlist from './Wishlist';


function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow bg-primary-white">
          <Routes>
            <Route path='/wishlist' element={<Wishlist />}></Route>
            <Route path="/authorization" element={<Authorization />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
