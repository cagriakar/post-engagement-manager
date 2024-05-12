import modal from '@/constants/modal';
import usePostEngagements from '@/hooks/usePostEngagements';
import client from '@/services/client';
import utils from '@/utils';
import clsx from 'clsx';
import { useState } from 'react';

export default function AddPostEngagementModal() {
  const [text, setText] = useState('');
  const { refetch } = usePostEngagements();
  const [inAction, setInAction] = useState(false);

  return (
    <dialog id='add-modal' className='modal'>
      <div className='modal-box'>
        <button
          className='btn btn-sm btn-circle btn-ghost absolute right-4 top-4'
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            document.getElementById(modal.ADD_MODAL).close();
            setText('');
          }}
        >
          ✕
        </button>

        <h3 className='font-bold text-lg'>Add Post Engagement</h3>
        <label className='form-control w-full mt-4'>
          <div className='label'>
            <span className='label-text'>Post Engagement Name</span>
          </div>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-sm'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <div className='modal-action'>
          <button
            className={clsx('btn btn-sm btn-outline', inAction && 'btn-disabled')}
            onClick={async () => {
              try {
                setInAction(true);
                await client.addPostEngagement(utils.generateMockPostEngagement(text));
                await refetch();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                document.getElementById(modal.ADD_MODAL).close();
                setText('');
              } catch (error) {
                console.error(error);
              } finally {
                setInAction(false);
              }
            }}
          >
            {inAction ? <span className='loading loading-spinner'/> : null}
            Add
          </button>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
