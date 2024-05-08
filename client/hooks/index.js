import { useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';

import { UserContext } from '@/providers/UserProvider';
import { PlaceContext } from '@/providers/PlaceProvider';

import {
  getItemFromLocalStorage,
  setItemsInLocalStorage,
  removeItemFromLocalStorage,
} from '@/utils';
import axiosInstance from '@/utils/axios';

// USER CONTROLLER HANDLERS
export const useAuth = () => {
  return useContext(UserContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set user from local storage
  useEffect(() => {
    const storedUser = getItemFromLocalStorage('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Register User
  const register = async (formData) => {
    const { name, email, password } = formData;

    try {
      const { data } = await axiosInstance.post('user/register', {
        name,
        email,
        password,
      });
      if (data.user && data.token) {
        setUser(data.user);
        // save user and token in local storage
        setItemsInLocalStorage('user', data.user);
        setItemsInLocalStorage('token', data.token);
      }
      return { success: true, message: 'Registration successfull' };
    } catch (error) {
      const { message } = error.response.data;
      return { success: false, message };
    }
  };

  // Login User
  const login = async (formData) => {
    const { email, password } = formData;

    try {
      const { data } = await axiosInstance.post('user/login', {
        email,
        password,
      });
      if (data.user && data.token) {
        setUser(data.user);
        // save user and token in local storage
        setItemsInLocalStorage('user', data.user);
        setItemsInLocalStorage('token', data.token);
      }
      return { success: true, message: 'Login successfull' };
    } catch (error) {
      const { message } = error.response.data;
      return { success: false, message };
    }
  };

  // Login Via Google
  const googleLogin = async (credential) => {
    const decoded = jwt_decode(credential);
    try {
      const { data } = await axiosInstance.post('user/google/login', {
        name: `${decoded.given_name} ${decoded.family_name}`,
        email: decoded.email,
      });
      if (data.user && data.token) {
        setUser(data.user);
        // save user and token in local storage
        setItemsInLocalStorage('user', data.user);
        setItemsInLocalStorage('token', data.token);
      }
      return { success: true, message: 'Login successfull' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  // Logout user
  const logout = async () => {
    try {
      const { data } = await axiosInstance.get('/user/logout');
      if (data.success) {
        setUser(null);

        // Clear user data and token from localStorage when logging out
        removeItemFromLocalStorage('user');
        removeItemFromLocalStorage('token');
      }
      return { success: true, message: 'Logout successfull' };
    } catch (error) {
      console.log(error);
      return { success: false, message: 'Something went wrong!' };
    }
  };

  // Upload profile picture
  const uploadPicture = async (picture) => {
    try {
      const formData = new FormData();
      formData.append('picture', picture);
      const { data } = await axiosInstance.post(
        '/user/upload-picture',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // Update user details
  const updateUser = async (userDetails) => {
    const { name, password, picture } = userDetails;
    const email = JSON.parse(getItemFromLocalStorage('user')).email;
    try {
      const { data } = await axiosInstance.put('/user/update-user', {
        name,
        password,
        email,
        picture,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    setUser,
    register,
    login,
    googleLogin,
    logout,
    loading,
    uploadPicture,
    updateUser,
  };
};

// PLACES CONTROLLER HANDLERS
export const usePlaces = () => {
  return useContext(PlaceContext);
};

export const useProvidePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all Places
  const getPlaces = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get('/places');
      setPlaces(data.places);
      setLoading(false);
    } catch (error) {
      console.log('Error in getting all places : ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlaces();
  }, []);

  return {
    places,
    setPlaces,
    loading,
    setLoading,
  };
};
