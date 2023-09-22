import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import LandingPage from './route/LandingPage';
import ContactPage from './components/contactPage';
import RegisterPage from './components/registerPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>,
  ),
);
