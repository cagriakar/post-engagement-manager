import { PostEngagementReplyType, PostEngagementReplyTypeMap, Reaction, ReactionsMap } from '@/types';
import clsx from 'clsx';
import { MouseEventHandler, useEffect, useState } from 'react';

function PostRequireSection() {
  const [selectedReactions, setSelectedReactions] = useState<Reaction[]>([]);

  const handleAddReaction: (react: Reaction) => MouseEventHandler<HTMLLIElement> = (react) => () =>
    setSelectedReactions((prev) => [...new Set([...prev, react])]);

  const handleRemoveReaction: (react: Reaction) => MouseEventHandler<HTMLSpanElement> = (react) => () =>
    setSelectedReactions((prev) => prev.filter((p) => p !== react));

  return (
    <>
      <h1 className='border-b border-b-base-300'>Require a Post Reaction</h1>
      <br />
      {selectedReactions.map((react) => (
        <div className='badge-clepher' key={react}>
          <span data-reaction={react}>
            <span className={clsx(`like-btn-${react}`, 'inline pr-5')}/>
            <span className='ml-1'>{react}</span>
            <span className='ml-1 cursor-pointer text-xs hover:text-error' onClick={handleRemoveReaction(react)}>
              ✕
            </span>
          </span>
        </div>
      ))}
      <div className='mt-2.5'>
        <span id='add_positive_reaction'>
          <ul className='positive reactions-box'>
            {Object.values(ReactionsMap).map((react) => (
              <li
                key={react}
                className={clsx('reaction', `reaction-${react}`)}
                data-reaction={react.charAt(0).toUpperCase() + react.slice(1)}
                onClick={handleAddReaction(react)}
              />
            ))}
          </ul>
          <button className='btn btn-primary w-full'>Require reaction</button>
        </span>
      </div>
    </>
  );
}

function ExcludeCommentsWithKeywordsSection() {
  const [keyword, setKeyword] = useState<string>('');
  const [excluded, setExcluded] = useState<string[]>([]);
  const handleAddExcluded: MouseEventHandler<HTMLButtonElement> = () => {
    setExcluded((prev) => [...new Set([...prev, keyword])]);
    setKeyword('');
  };

  const handleRemoveExluded: (keyword: string) => MouseEventHandler<HTMLSpanElement> = (keyword) => () =>
    setExcluded((prev) => prev.filter((p) => p !== keyword));

  return (
    <>
      <div className='form-control'>
        <div className='label'>
          <span className='label-text'>Exclude Comments With These Keywords</span>
        </div>
        <div className='mb-2.5'>
          {excluded.map((w) => (
            <div className='badge-clepher' key={w}>
              {w}
              <span className='ml-1 cursor-pointer text-xs hover:text-error' onClick={handleRemoveExluded(w)}>
                ✕
              </span>
            </div>
          ))}
        </div>
        <div className='join'>
          <input
            placeholder='Specify Keywords'
            className='input join-item w-full input-bordered focus:outline-offset-0'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className='btn join-item btn-primary' onClick={handleAddExcluded}>
            Add Keyword
          </button>
        </div>
      </div>
    </>
  );
}

function IncludeCommentsWithKeywordsSection() {
  const [keyword, setKeyword] = useState<string>('');
  const [included, setIncluded] = useState<string[]>([]);

  const handleAddIncluded: MouseEventHandler<HTMLButtonElement> = () => {
    setIncluded((prev) => [...new Set([...prev, keyword])]);
    setKeyword('');
  };

  const handleRemoveExluded: (keyword: string) => MouseEventHandler<HTMLSpanElement> = (keyword) => () =>
    setIncluded((prev) => prev.filter((p) => p !== keyword));

  return (
    <div className='form-control'>
      <div className='label'>
        <span className='label-text'>Only Trigger For Comments With These Keywords</span>
      </div>
      <div className='mb-2.5'>
        {included.map((w) => (
          <div className='badge-clepher' key={w}>
            {w}
            <span className='ml-1 cursor-pointer text-xs hover:text-error' onClick={handleRemoveExluded(w)}>
              ✕
            </span>
          </div>
        ))}
      </div>
      <div className='join'>
        <input
          placeholder='Specify Keywords'
          className='input join-item w-full input-bordered focus:outline-offset-0'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className='btn join-item btn-primary' onClick={handleAddIncluded}>
          Add Keyword
        </button>
      </div>
    </div>
  );
}

function PrivateReplySection() {
  const [messageType, setMessageType] = useState<PostEngagementReplyType>(PostEngagementReplyTypeMap.flow);
  const [flow, setFlow] = useState<string>('');
  const [message, setMessage] = useState<string>('message-1');

  const isMessageSelectVisible = messageType === PostEngagementReplyTypeMap.single;

  useEffect(() => {
    !isMessageSelectVisible && setMessage('message-1');
  }, [isMessageSelectVisible]);

  return (
    <>
      <h1 className='border-b border-b-base-300 mb-2.5 py-0.5 font-semibold'>Private Reply After Post Engagement</h1>
      <div className='form-control'>
        <div className='label'>
          <span className='label-text'>Select Message Type</span>
        </div>
        <div className='form-control'>
          <select
            spellCheck='true'
            autoComplete='on'
            className='select select-bordered w-full'
            value={messageType}
            onChange={(e) => setMessageType(e.target.value as PostEngagementReplyType)}
          >
            <option value={PostEngagementReplyTypeMap.flow}>Flow</option>
            <option value={PostEngagementReplyTypeMap.single}>Single Message</option>
          </select>
        </div>
      </div>
      <div className='form-control'>
        <div className='label'>
          <span className='label-text'>Select Flow</span>
        </div>
        <div className='form-control'>
          <select
            spellCheck='true'
            autoComplete='on'
            className='select select-bordered w-full'
            value={flow}
            onChange={(e) => setFlow(e.target.value)}
          >
            <option value='' disabled>
              Select
            </option>
            <option value='welcome'>Welcome Message</option>
            <option value='default'>Default Reply</option>
          </select>
        </div>
      </div>
      {isMessageSelectVisible && (
        <div className='form-control'>
          <div className='label'>
            <span className='label-text'>Select Message</span>
          </div>
          <div className='form-control'>
            <select
              spellCheck='true'
              autoComplete='on'
              className='select select-bordered w-full'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              <option value='message-1'>Text Card #1</option>
              <option value='message-2'>Text Card #2</option>
              <option value='message-3'>Text Card #3</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
export default function AutoResponseSettings() {
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
      <PostRequireSection />
      <br />
      <ExcludeCommentsWithKeywordsSection />
      <br />
      <IncludeCommentsWithKeywordsSection />
      <br />
      <PrivateReplySection />
    </>
  );
}
