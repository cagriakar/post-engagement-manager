import { AutoReplyCommentType, AutoReplyCommentTypeMap } from '@/types';
import clsx from 'clsx';
import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const defaultComments = [
  { id: uuidv4(), content: 'voluptatem eveniet ipsa eveniet' },
  { id: uuidv4(), content: 'deserunt quod eveniet velit' },
  { id: uuidv4(), content: 'fugiat illo dolorem alias' }
];

function StaticReplyConfig() {
  const [commentList, setCommentList] = useState<{ id: string; content: string }[]>(defaultComments);

  const handleAddComment: MouseEventHandler<HTMLButtonElement> = () =>
    setCommentList((prev) => [...prev, { id: uuidv4(), content: '' }]);

  const handleRemoveComment: (id: string) => MouseEventHandler<HTMLSpanElement> = (id) => () =>
    setCommentList((prev) => prev.filter((p) => p.id !== id));

  const handleCommentChange: (id: string) => ChangeEventHandler<HTMLInputElement> = (id) => (e) =>
    setCommentList((prev) => {
      const currentCommentIndex = prev.findIndex((p) => p.id === id);
      console.log(`setCommentList , currentCommentIndex:`, currentCommentIndex);

      prev[currentCommentIndex].content = e.target.value;
      return prev.toSpliced(currentCommentIndex, 1, prev[currentCommentIndex]);
    });

  return (
    <div className='text-center'>
      <br />
      {commentList.map((comment) => (
        <div
          key={comment.id}
          className='bg-base-200 p-1.5 [&:not(:last-of-type)]:mb-1.5 rounded-md border border-dotted border-base-300'
        >
          <div className='flex flex-row items-center gap-1.5'>
            <input
              name={comment.id}
              type='text'
              placeholder='Type your comment here'
              className='input w-full focus:outline-offset-0'
              value={comment.content}
              onChange={handleCommentChange(comment.id)}
            />
            <button className='btn btn-sm btn-circle btn-ghost' onClick={handleRemoveComment(comment.id)}>
              ✕
            </button>
          </div>
        </div>
      ))}
      <br />
      <button className='btn btn-primary' onClick={handleAddComment}>
        Add Comment
      </button>
    </div>
  );
}

function AIReplyConfig() {
  return (
    <div>
      <div className='form-control'>
        <div className='label'>
          <span className='label-text'>Select Integration</span>
        </div>
        <div className='form-control'>
          <select spellCheck='true' autoComplete='on' className='select select-bordered w-full'>
            <option value='int-1'>Integration 1</option>
            <option value='int-2'>Integration 2</option>
          </select>
        </div>
      </div>
      <div className='form-control'>
        <div className='label'>
          <span className='label-text'>Select Assistance</span>
        </div>
        <div className='form-control'>
          <select spellCheck='true' autoComplete='on' className='select select-bordered w-full'>
            <option value='assist-1'>Assistance 1</option>
            <option value='assist-2'>Assistance 2</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default function GeneralSettings() {
  const [commentType, setCommentType] = useState<AutoReplyCommentType>(AutoReplyCommentTypeMap.static);

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
          <select
            spellCheck='true'
            autoComplete='on'
            className='select select-bordered w-full'
            value={commentType}
            onChange={(e) => setCommentType(e.target.value as AutoReplyCommentType)}
          >
            <option value={AutoReplyCommentTypeMap.static}>Static</option>
            <option value={AutoReplyCommentTypeMap.openai}>Open AI</option>
          </select>
        </div>
      </div>

      <div className={clsx(commentType === AutoReplyCommentTypeMap.openai && 'hidden')}>
        <StaticReplyConfig />
      </div>
      <div className={clsx(commentType === AutoReplyCommentTypeMap.static && 'hidden')}>
        <AIReplyConfig />
      </div>
    </>
  );
}
