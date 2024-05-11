import ThemeToggle from '@/components/ThemeToggle';
import {
  AccountIcon,
  BookIcon,
  CommunityIcon,
  HelpCenterIcon,
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  OnlineIcon,
  WalletIcon,
  WarningIcon
} from '@/components/icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar fixed z-20 border-b border-b-base-300 bg-base-100'>
      <div className='lg:px-2'>
        <Link className='hidden lg:block' to='/home'>
          <div className='avatar cursor-pointer'>
            <div className='w-10 rounded-full'>
              <img src='https://graph.facebook.com/237352949662793/picture?type=normal' alt='Page Name' />
            </div>
          </div>
        </Link>
        <label className='btn btn-circle btn-ghost lg:hidden' htmlFor='side-drawer' aria-label='open sidebar'>
          <MenuIcon />
        </label>
      </div>
      <div className='flex-1 pl-3'>
        <div className='breadcrumbs text-base'>
          <ul className='rounded-md border border-base-300 bg-base-100 px-2 py-[.32rem]'>
            <li className='w-15 truncate md:w-auto'>
              <a href='https://m.me/hitunezofficial' target='_blank' rel='noreferrer'>
                @hitunezofficial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-end hidden md:inline-flex'>
        <button className='btn hover:bg-error btn-circle btn-ghost'>
          <WarningIcon />
        </button>
      </div>
      <ThemeToggle />
      <div role='listbox' className='dropdown hidden md:inline-block dropdown-end'>
        <label tabIndex={0}>
          <button className='btn btn-circle btn-ghost'>
            <HelpCenterIcon />
          </button>
        </label>
        <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52' role='menu'>
          <li role='menuitem'>
            <a href='https://status.clepher.com/' target='_blank' rel='noreferrer'>
              <OnlineIcon />
              Status
            </a>
          </li>
          <li role='menuitem'>
            <a href='https://www.facebook.com/groups/clepher/' target='_blank' rel='noreferrer'>
              <CommunityIcon />
              Community
            </a>
          </li>
          <li role='menuitem'>
            <a href='https://clepher.com/support/' target='_blank' rel='noreferrer'>
              <BookIcon />
              Knowledge Base
            </a>
          </li>
        </ul>
      </div>
      <div role='listbox' className='dropdown dropdown-end'>
        <label tabIndex={0}>
          <button className='btn avatar btn-circle btn-ghost'>
            <div className='w-10 rounded-full'>
              <img
                src='https://avatars.githubusercontent.com/u/21959017?s=400&amp;u=1c2711bcd2713d682bf553835a6dce998c6fd49b&amp;v=4'
                loading='lazy'
                alt='Profile'
              />
            </div>
          </button>
        </label>
        <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-48' role='menu'>
          <li role='menuitem'>
            <Link to='/home'>
              <HomeIcon />
              Home
            </Link>
          </li>
          <li role='menuitem'>
            <a>
              <WalletIcon />
              Billing
            </a>
          </li>
          <li role='menuitem'>
            <a>
              <AccountIcon />
              Account
            </a>
          </li>
          <li role='menuitem'>
            <a>
              <LogoutIcon />
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
