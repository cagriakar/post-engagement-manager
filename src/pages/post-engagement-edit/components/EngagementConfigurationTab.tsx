import clsx from 'clsx';
import { useState } from 'react';
import EngagementConfigurationContent from './EngagementConfigurationContent';

const EngagementConfigTypeMap = { general: 'general', autoResponse: 'autoResponse' } as const;
type EngagementConfigType = keyof typeof EngagementConfigTypeMap;

export default function EngagementConfigurationTab() {
  const [activeTab, setActiveTab] = useState<EngagementConfigType>(EngagementConfigTypeMap.general);

  return (
    <>
      <div role='tablist' className='tabs tabs-bordered tabs-lg'>
        <a
          role='tab'
          className={clsx('tab !border-b !text-sm', activeTab === EngagementConfigTypeMap.general && 'tab-active')}
          onClick={() => setActiveTab(EngagementConfigTypeMap.general)}
        >
          Settings
        </a>
        <a
          role='tab'
          className={clsx('tab !border-b !text-sm', activeTab === EngagementConfigTypeMap.autoResponse && 'tab-active')}
          onClick={() => setActiveTab(EngagementConfigTypeMap.autoResponse)}
        >
          Auto Response
        </a>
      </div>
      <div className='h-[76vh] overflow-y-auto px-6 py-3.5 text-sm'>
        {/* <div style={{ zIndex: 1, opacity: 1, transform: 'none' }}> */}
        <EngagementConfigurationContent type={activeTab} />
        {/* </div> */}
        <br />
      </div>
    </>
  );
}

export { EngagementConfigTypeMap, type EngagementConfigType };
