import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function RootLayout() {
  return (
    <div className='min-h-screen bg-base-200'>
      <Navbar />
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <div className='pt-24'>
            <Outlet />
          </div>
        </div>
        <div className='drawer-side'>
          <label className='drawer-overlay' htmlFor='my-drawer' aria-label='close sidebar'></label>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
