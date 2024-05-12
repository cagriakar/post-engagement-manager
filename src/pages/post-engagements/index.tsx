/* eslint-disable @typescript-eslint/ban-ts-comment */
import DebouncedInput from '@/components/DebouncedInput';
import { SearchIcon } from '@/components/icons';
import modal from '@/constants/modal';
import { SearchContextProvider, useSearchContext } from '@/contexts/SearchContextProvider';
import AddPostEngagementModal from './components/AddPostEngagementModal';
import BulkActionsMenu from './components/BulkActionsMenu';
import PostEngagementsTable from './components/PostEngagementsTable';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useSearchContext();

  return (
    <div className='form-control hidden md:flex'>
      <div className='join items-center border border-neutral bg-base-100'>
        <DebouncedInput
          placeholder='Search by name…'
          type='text'
          className='input input-sm h-[30px] focus:outline-none join-item border-0'
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <span className='join-item px-1'>
          <SearchIcon />
        </span>
      </div>
    </div>
  );
}
export default function PostEngagements() {
  return (
    <SearchContextProvider>
      <div className='mb-2 flex flex-row items-end gap-2'>
        <div className='grow truncate'>
          <h4 className='truncate text-xl'>Post Engagements</h4>
        </div>
        <button
          className='btn btn-sm btn-outline'
          onClick={() => {
            // @ts-ignore
            document.getElementById(modal.ADD_MODAL).showModal();
          }}
        >
          <svg
            stroke='currentColor'
            fill='none'
            strokeWidth='2'
            viewBox='0 0 24 24'
            aria-hidden='true'
            className='h-4 w-4'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M16,13h-3v3c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-3H8c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V8c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v3h3 c0.552,0,1,0.448,1,1v0C17,12.552,16.552,13,16,13z' />
          </svg>
          New
        </button>
        <AddPostEngagementModal />
        <SearchInput />
        <BulkActionsMenu />
      </div>
      <PostEngagementsTable />
    </SearchContextProvider>
  );
}
