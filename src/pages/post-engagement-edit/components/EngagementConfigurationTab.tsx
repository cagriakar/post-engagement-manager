import clsx from 'clsx';
import { useState } from 'react';

const EngagementConfigTypeMap = { general: 'general', autoResponse: 'autoResponse' } as const;
type EngagementConfigType = keyof typeof EngagementConfigTypeMap;

type Props = { type: EngagementConfigType };

function EngagementConfigurationContent({ type }: Props) {
  if (type === EngagementConfigTypeMap.general)
    return (
      <>
        <div className='flex flex-row items-center justify-between'>
          <div className='opacity-60'>Enable To Privately Reply To First-Level Comments Only</div>
          <div>
            <input type='checkbox' className='toggle toggle-primary' />
          </div>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div className='opacity-60'>Send Message To The Same User Only Once Per Post</div>
          <div>
            <input type='checkbox' className='toggle toggle-primary' />
          </div>
        </div>
        <br />
        <h1 className='border-b border-b-base-300'>Require a Post Reaction</h1>
        <br />
        <div className='badge-clepher'>
          <span data-reaction='wow'>
            <span className='like-btn-wow inline pr-5'></span>
            <span className='ml-1'>wow</span>
            <span className='ml-1 cursor-pointer text-xs hover:text-error'>✕</span>
          </span>
        </div>
        <div className='badge-clepher'>
          <span data-reaction='sad'>
            <span className='like-btn-sad inline pr-5'></span>
            <span className='ml-1'>sad</span>
            <span className='ml-1 cursor-pointer text-xs hover:text-error'>✕</span>
          </span>
        </div>
        <div className='mt-2.5'>
          <span id='add_positive_reaction'>
            <ul className='positive reactions-box'>
              <li className='reaction reaction-like' data-reaction='Like'></li>
              <li className='reaction reaction-love' data-reaction='Love'></li>
              <li className='reaction reaction-haha' data-reaction='HaHa'></li>
              <li className='reaction reaction-wow' data-reaction='Wow'></li>
              <li className='reaction reaction-sad' data-reaction='Sad'></li>
              <li className='reaction reaction-angry' data-reaction='Angry'></li>
            </ul>
            <button className='btn btn-primary w-full'>Require reaction</button>
          </span>
        </div>
        <br />
        <div className='form-control'>
          <div className='label'>
            <span className='label-text'>Exclude Comments With These Keywords</span>
          </div>
          <div className='mb-2.5'></div>
          <div className='join'>
            <input
              placeholder='Specify Keywords'
              className='input join-item w-full input-bordered focus:outline-offset-0'
              value=''
            />
            <button className='btn join-item btn-primary'>Add Keyword</button>
          </div>
        </div>
        <br />
        <div className='form-control'>
          <div className='label'>
            <span className='label-text'>Only Trigger For Comments With These Keywords</span>
          </div>
          <div className='mb-2.5'></div>
          <div className='join'>
            <input
              placeholder='Specify Keywords'
              className='input join-item w-full input-bordered focus:outline-offset-0'
              value=''
            />
            <button className='btn join-item btn-primary'>Add Keyword</button>
          </div>
        </div>
        <br />
        <h1 className='border-b border-b-base-300 mb-2.5 py-0.5 font-semibold'>Private Reply After Post Engagement</h1>
        <div className='form-control'>
          <div className='label'>
            <span className='label-text'>Select Message Type</span>
          </div>
          <div className='form-control'>
            <select spellCheck='true' autoComplete='on' className='select select-bordered w-full'>
              <option
                value='flow'
                // selected=''
              >
                Flow
              </option>
              <option value='single-message'>Single Message</option>
            </select>
          </div>
        </div>
        <div className='form-control'>
          <div className='label'>
            <span className='label-text'>Select Flow</span>
          </div>
          <div className='form-control'>
            <select spellCheck='true' autoComplete='on' className='select select-bordered w-full'>
              <option
                value=''
                // disabled='' selected=''
              >
                Select
              </option>
              <option value='welcome'>Welcome Message</option>
              <option value='default'>Default Reply</option>
            </select>
          </div>
        </div>
      </>
    );

  if (type === EngagementConfigTypeMap.autoResponse)
    return (
      <>
        <div className='flex flex-row items-center justify-between'>
          <div className='opacity-60'>Enable To Automatically Like Comments</div>
          <div>
            <input type='checkbox' className='toggle toggle-primary' />
          </div>
        </div>
        <br />
        <h1 className='border-b border-b-base-300 mb-2.5 py-0.5 font-semibold'>Reply In Comments</h1>
        <div className='form-control'>
          <div className='label'>
            <span className='label-text'>Comment Type</span>
          </div>
          <div className='form-control'>
            <select spellCheck='true' autoComplete='on' className='select select-bordered w-full'>
              <option value='static' selected=''>
                Static
              </option>
              <option value='openai'>Open AI</option>
            </select>
          </div>
        </div>
        <div className='text-center'>
          <br />
          <div className='bg-base-200 p-1.5 [&amp;:not(:last-of-type)]:mb-1.5 rounded-md border border-dotted border-base-300'>
            <div className='flex flex-row items-center gap-1.5'>
              <input
                name='43913'
                type='text'
                placeholder='Type your comment here'
                className='input w-full focus:outline-offset-0'
                value='soluta optio iste facilis'
              />
              <button className='btn btn-sm btn-circle btn-ghost'>✕</button>
            </div>
          </div>
          <div className='bg-base-200 p-1.5 [&amp;:not(:last-of-type)]:mb-1.5 rounded-md border border-dotted border-base-300'>
            <div className='flex flex-row items-center gap-1.5'>
              <input
                name='74546'
                type='text'
                placeholder='Type your comment here'
                className='input w-full focus:outline-offset-0'
                value='tempore in beatae totam'
              />
              <button className='btn btn-sm btn-circle btn-ghost'>✕</button>
            </div>
          </div>
          <div className='bg-base-200 p-1.5 [&amp;:not(:last-of-type)]:mb-1.5 rounded-md border border-dotted border-base-300'>
            <div className='flex flex-row items-center gap-1.5'>
              <input
                name='44488'
                type='text'
                placeholder='Type your comment here'
                className='input w-full focus:outline-offset-0'
                value='occaecati eos reiciendis beatae'
              />
              <button className='btn btn-sm btn-circle btn-ghost'>✕</button>
            </div>
          </div>
          <br />
          <button className='btn btn-primary'>Add Comment</button>
        </div>
      </>
    );
}

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
        <div style={{ zIndex: 1, opacity: 1, transform: 'none' }}>
          <EngagementConfigurationContent type={activeTab} />
        </div>
        <br />
      </div>
    </>
  );
}
