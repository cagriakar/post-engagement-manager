import Table from '@/components/Table';
import { SearchIcon } from '@/components/icons';
import BulkActionsMenu from './components/BulkActionsMenu';

export default function PostEngagements() {
  return (
    <>
      <div className='mb-2 flex flex-row items-end gap-2'>
        <div className='grow truncate'>
          <h4 className='truncate text-xl'>Post Engagements</h4>
        </div>
        <div className='form-control hidden md:flex'>
          <div className='join items-center border border-neutral bg-base-100'>
            <input
              placeholder='Search…'
              type='text'
              className='input input-sm h-[30px] focus:outline-none join-item border-0'
              value=''
            />
            <span className='join-item px-1'>
              <SearchIcon />
            </span>
          </div>
        </div>
        <BulkActionsMenu />
      </div>
      <Table />
    </>
  );
}
