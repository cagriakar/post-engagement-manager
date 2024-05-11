import EngagementConfigurationTab from './EngagementConfigurationTab';
import PostSelectionTab from './PostSelectionTab';

export default function FormSection() {
  return (
    <div className='mx-6'>
      <div aria-label='Card' className='card bg-base-100 p-0 shadow-sm card-bordered'>
        <div className='card-body gap-0 p-0'>
          <div className='card-title'></div>
          <div className='flex flex-row'>
            <div className='basis-2/5'>
              <EngagementConfigurationTab />
            </div>
            <div className='basis-3/5'>
              <PostSelectionTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
