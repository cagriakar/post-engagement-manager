import clsx from 'clsx';
import { useState } from 'react';

const PostTypeMap = { postSelect: 'postSelect', url: 'url' } as const;
type PostType = keyof typeof PostTypeMap;

type Props = { type: PostType };
export function PostSelectionContent({ type }: Props) {
  if (type === PostTypeMap.url)
    return (
      <div className='join mt-10'>
        <input
          placeholder='Post ID / URL'
          className='input join-item w-96 input-bordered focus:outline-offset-0'
          value=''
        />
        <button className='btn join-item btn-primary'>Grab Post</button>
      </div>
    );

  if (type === PostTypeMap.postSelect)
    return (
      <div className='flex place-content-center'>
        <br />
        Select A Post
      </div>
    );
}

export default function PostSelectionTab() {
  const [activeTab, setActiveTab] = useState<PostType>(PostTypeMap.url);

  return (
    <>
      <div
        role='tablist'
        className='tabs h-12 bg-base-100 p-0 rounded-b-none border-b border-b-base-300 tabs-boxed tabs-lg'
      >
        <a
          role='tab'
          className={clsx('tab !rounded-none', activeTab === PostTypeMap.postSelect && 'tab-active')}
          onClick={() => setActiveTab(PostTypeMap.postSelect)}
        >
          Select A Post
        </a>
        <a
          role='tab'
          className={clsx('tab !rounded-none', activeTab === PostTypeMap.url && 'tab-active')}
          onClick={() => setActiveTab(PostTypeMap.url)}
        >
          Post ID / URL
        </a>
      </div>
      <div className='flex place-content-center'>
        <PostSelectionContent type={activeTab} />
      </div>
    </>
  );
}
