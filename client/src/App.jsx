import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/ui/Layout';
import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import BookingsPage from './pages/BookingsPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import SingleBookedPlace from './pages/SingleBookedPlace';
import axiosInstance from './utils/axios';
import { getItemFromLocalStorage } from './utils';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  useEffect(() => {
    // set the token on refreshing the website
    axiosInstance.defaults.headers.common['Authorization'] =
      `Bearer ${getItemFromLocalStorage('token')}`;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<SingleBookedPlace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
