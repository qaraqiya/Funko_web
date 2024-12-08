import React from 'react'
import ProductCard from './ProductCard'
import { useNavigate, Link } from 'react-router-dom';


const wishlistItems = [
    {
      id: 1,
      imgSrc: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw718105db/images/funko/upload/75699_HxH_Chrollo_POP_GLAM-WEB.png?sw=150&sh=150',
      title: 'Hunter x Hunter',
      description: 'Pop! Chrollo',
      price: '$15.00',
    },
    {
      id: 2,
      imgSrc: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw47fc23fe/images/funko/upload/74474-POP-Animation-One-Piece---Marco_GLAM-WEB.png?sw=800&sh=800',
      title: 'One Piece',
      description: 'Pop! Marco',
      price: '$15.00',
    },
  ];

const MyAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-4 lg:mt-8 flex flex-col justify-center mx-auto">
      <h1 className="hidden md:block text-6xl uppercase mb-6 font-black mx-auto">My Account</h1>
      <h1 className="block md:hidden text-3xl uppercase font-black">My Account</h1>

      <div className="search-banner account-banner">
        <div className="flex justify-center relative border-solid border-2">
          {/* <div className="banner-image-wrapper absolute -top-36">
            <picture>
              <source  srcSet="https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dw5c4d6f40/images/funko/content-asset/account-header-freddy.png" />
              <img fetchpriority="high" alt="" title="Welcome!" src="https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dw3e940221/images/funko/content-asset/account-header-freddy-mobile.png" />
            </picture>
          </div> */}
        </div>
      </div>

      <div className="main-content mt-4 lg:mt-6">
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2">
            {/* Profile Section */}
            <div className="card bg-white shadow-md rounded-lg p-4 mb-6">
                <div className="lg:hidden">
                    <button className="side-nav-button flex items-center py-2 text-sm">
                        <img className="w-4 h-4 mr-2 uppercase" 
                        src="https://funko.com/on/demandware.static/Sites-FunkoUS-Site/-/default/dw5426e34c/images/funko/svg/filters.svg" alt="filters" />
                        Account Menu
                    </button>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-black uppercase">Profile</h2>
                    <Link to="/edit-profile" className="text-[#6c6c6c] flex items-center">
                        <img className="w-4 h-4 mr-1" src="https://funko.com/on/demandware.static/Sites-FunkoUS-Site/-/default/dwd48a9e64/images/svg/pencil.svg" alt="edit" />
                        <span className='text-base'>EDIT</span>
                    </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-500">First Name</div>
                  <div className="mt-1 break-words">Aron</div>
                </div>
                <div>
                  <div className="text-gray-500">Last Name</div>
                  <div className="mt-1 break-words">Nurgaliyev</div>
                </div>
                <div className="mt-4">
                  <div className="text-gray-500">Email</div>
                  <div className="mt-1 break-words">230107013@sdu.edu.kz</div>
                </div>
                <div className="mt-4">
                  <div className="text-gray-500">Password</div>
                  <div className="mt-1 break-words">********</div>
                </div>
              </div>
            </div>

            {/* Wishlist Section */}
            <div className="card bg-white shadow-md rounded-lg p-4 mb-6">
              <div className="justify-between items-center mb-4">
                <div className="flex justify-between">
                <h2 className="text-lg font-black">WISHLIST</h2>
                <a onClick={() => navigate('/wishlist')} className="text-[#6c6c6c] text-base">
                    VIEW ALL
                </a>
                </div>
                <div className="flex flex-col"></div>
                {wishlistItems.map(item => (
                <ProductCard
                    key={item.id}
                    imgSrc={item.imgSrc}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
                ))}
              </div>
            </div>

            {/* Address Book Section */}
            <div className="card bg-white shadow-md rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-black uppercase">Address Book</h2>
                <a href="/address-book/" className="text-blue-500 flex items-center">
                  <img className="w-4 h-4 mr-1" 
                   src="https://funko.com/on/demandware.static/Sites-FunkoUS-Site/-/default/dwd48a9e64/images/svg/pencil.svg"
                   alt="edit address book" />
                  <span className='text-[#6c6c6c] text-base uppercase'>Manage</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-500">Home Address</div>
                  <div className="mt-1">123 Funko Street</div>
                </div>
                <div>
                  <div className="text-gray-500">Shipping Address</div>
                  <div className="mt-1">456 Collectible Ave</div>
                </div>
              </div>
            </div>

            {/* Add more sections in similar fashion */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
