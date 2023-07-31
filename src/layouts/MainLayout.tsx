import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 px-10 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
