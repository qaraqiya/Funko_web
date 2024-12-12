import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountMenu from './AccountMenu';

const EditProfile = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Хук для навигации

  const handleSave = () => {
    // Логика сохранения профиля
    console.log("Profile saved");

    navigate('/authorization')
  };

  const handleCancel = () => {
    // Логика отмены
    console.log("Edit cancelled");
    navigate('/authorization')
  };

  const handleChangePassword = () => {
    // Навигация на страницу смены пароля
    navigate('/change-password');
  };

  return (
    <div className="relative bg-primary-white mt-12 mx-auto 2xl:w-full xl:w-[1280px] lg:w-[968px] macbook:w-[900px] md:w-[768px] sm:w-[640px] mobile:w-[340px] transition-all">
      <h1 className="text-6xl ml-4 font-black mb-4 sm:text-5xl lg:text-6xl text-center 2xl:text-left">EDIT PROFILE</h1>

      <div className="flex justify-center mt-[50px]">
        <div className="hidden 2xl:block">
          <AccountMenu />
        </div>
        <div className="w-full lg:w-2/3 p-12 bg-white h-fit flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 gap-6 w-full">
            <div>
              <label className="block font-bold mb-2">First Name<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Last Name<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Phone Number</label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Email<span className='text-red-600'>*</span></label>
              <input
                type="email"
                className="border rounded p-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Current Password<span className='text-red-600'>*</span></label>
              <input
                type="password"
                className="border rounded p-2 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a
                onClick={handleChangePassword} // Перенаправление на ChangePassword
                className="text-blue-500 underline cursor-pointer"
              >
                Change password
              </a>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleCancel}>Cancel</button>
              <button className="bg-black text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
