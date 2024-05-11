import { DownArrow } from '@/components/icons';

export default function BulkActionsMenu() {
  return (
    <div role='listbox' className='dropdown dropdown-end'>
      <label tabIndex={0}>
        <button className='btn btn-sm btn-outline'>
          Bulk Actions
          <DownArrow />
        </button>
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-sm z-[1] mt-1 w-48'
        role='menu'
      >
        <li role='menuitem' className='disabled'>
          <a>Delete</a>
        </li>
      </ul>
    </div>
  );
}
