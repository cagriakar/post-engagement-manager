import { Link } from 'react-router-dom';
import {
  AnnouncementIcon,
  DashboardIcon,
  LayerIcon,
  MagicWandIcon,
  MagnetIcon,
  MessageIcon,
  PeopleIcon,
  SettingsIcon,
  StatisticsIcon
} from '../../icons';

const items = [
	{
		name: 'Dashboard',
		link: '/dashboard',
		icon: <DashboardIcon />
	},
	{
		name: 'Audience',
		link: '/audience',
		icon: <PeopleIcon />
	},
	{
		name: 'Message',
		link: '/capture-tools',
		icon: <MessageIcon />
	},
	{
		name: 'CaptureTools',
		link: '/capture-tools/links-library',
		icon: <MagnetIcon />
	},
	{
		name: 'Broadcasts',
		link: '/broadcasts',
		icon: <AnnouncementIcon />
	},
	{
		name: 'Automation',
		link: '/automation',
		icon: <MagicWandIcon />
	},
	{
		name: 'Layer',
		link: '/capture-tools',
		icon: <LayerIcon />
	},
	{
		name: 'Report',
		link: '/capture-tools',
		icon: <StatisticsIcon />
	},
	{
		name: 'Settings',
		link: '/capture-tools',
		icon: <SettingsIcon />
	}
];

export default function Sidebar() {
	return (
		<ul className='menu border-r border-r-base-300 min-h-full bg-base-100 pt-20'>
			{items.map(({ name, link, icon }) => (
				<li key={name}>
					<Link className='py-4' to={link}>
						{icon}
					</Link>
				</li>
			))}
		</ul>
	);
}
