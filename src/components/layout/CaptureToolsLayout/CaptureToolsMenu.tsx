import { AddPostIcon, ChatIcon, JsonIcon, LinkIcon, PlugIcon } from '@/components/icons';
import { Link, useLocation } from 'react-router-dom';

const items = [
  {
    name: 'Links Library',
    link: '/capture-tools/links-library',
    icon: <LinkIcon />
  },
  {
    name: 'JSON Generator',
    link: '/capture-tools/json-library',
    icon: <JsonIcon />
  },
  {
    name: 'Checkbox Plugin',
    link: '/capture-tools/checkbox-plugin',
    icon: <PlugIcon />
  },
  {
    name: 'Messenger Code',
    link: '/capture-tools/messenger-code',
    icon: <ChatIcon />
  },
  {
    name: 'Post Engagement',
    link: '/capture-tools/post-engagements',
    icon: <AddPostIcon />
  },
  {
    name: '	Send To Messenger',
    link: '/capture-tools/send-to-messenger',
    icon: <ChatIcon />
  }
];

export default function CaptureToolsMenu() {
  const { pathname } = useLocation();

  return (
    <ul role='menu' className='menu rounded-box bg-base-100 menu-vertical'>
      <li role='menuitem' className='menu-title'>
        <span>Capture Tools</span>
      </li>
      {items.map(({ name, link, icon }) => (
        <li key={link} role='menuitem'>
          <Link to={link} className={pathname.includes(link) ? 'active' : ''}>
            {icon}
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
