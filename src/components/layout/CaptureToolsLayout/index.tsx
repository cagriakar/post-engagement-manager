import { Outlet } from 'react-router-dom';
import CaptureToolsMenu from './CaptureToolsMenu';

export default function CaptureToolsLayout() {
  return (
    <div className='grid grid-cols-1 gap-0 lg:grid-cols-9'>
      <div className='col-span-2 hidden px-6 lg:block'>
        <CaptureToolsMenu />
      </div>
      <div className='lg:col-span-7'>
        <div className='px-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
