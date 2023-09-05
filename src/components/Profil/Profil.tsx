import { useState, useEffect } from 'react';
import { axiosInstance } from '../../utils/axios';
import DeleteProfil from '../Delete/DeleteProfil';


const ProfilePage = () => {
  const initialUserData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '', 
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [lastName, setlastName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        
        const userName = await axiosInstance.get('/api/users');
        setlastName(userName.data.userInfo.lastName)
        setfirstName(userName.data.userInfo.firstName)
        setEmail(userName.data.userInfo.email)


      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };
  
    fetchPortfolios();
  }, []); 

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md w-96">
        <div className="text-center mb-4">
          
          <h1 className="text-2xl font-semibold">
            {firstName} {lastName}
          </h1>
        </div>
        <div className="mt-6">
          <div className="mb-2">
            <label className="text-gray-600 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              readOnly={!isEditing}
              onChange={handleChange}
              className={`w-full bg-gray-100 border ${
                isEditing ? 'border-blue-500' : 'border-gray-300'
              } py-2 px-3 rounded ${
                isEditing ? 'bg-white' : 'bg-gray-100'
              }`}
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-600 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              readOnly={!isEditing}
              onChange={handleChange}
              className={`w-full bg-gray-100 border ${
                isEditing ? 'border-blue-500' : 'border-gray-300'
              } py-2 px-3 rounded ${
                isEditing ? 'bg-white' : 'bg-gray-100'
              }`}
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              readOnly={!isEditing}
              onChange={handleChange}
              className={`w-full bg-gray-100 border ${
                isEditing ? 'border-blue-500' : 'border-gray-300'
              } py-2 px-3 rounded ${
                isEditing ? 'bg-white' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
              <DeleteProfil />
          </div>
          
        </div>
      
      </div>
    </div>
  );
};

export default ProfilePage;
