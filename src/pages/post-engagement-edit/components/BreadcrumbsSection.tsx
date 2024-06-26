import { Link } from 'react-router-dom';

type Props = {
  title: string;
};
export default function BreadcrumbsSection({ title }: Props) {
  return (
    <div className='-mt-5 mb-2 flex items-center justify-between px-8'>
      <div role='navigation' aria-label='Breadcrumbs' className='breadcrumbs text-lg'>
        <ul>
          <li role='link'>
            <Link to='/capture-tools/links-library'>Capture Tools</Link>
          </li>
          <li role='link'>
            <Link to='/capture-tools/post-engagements'>Post Engagement</Link>
          </li>
          <li role='link'>Edit</li>
        </ul>
      </div>
      <strong className='text-lg'>{title}</strong>
      <div>
        <button className='btn btn-sm btn-primary'>Save</button>
      </div>
    </div>
  );
}
