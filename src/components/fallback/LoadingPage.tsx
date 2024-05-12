export default function LoadingPage() {
  return (
    <div className='container p-10 grid gap-5'>
      <div className='flex flex-col gap-4 w-full'>
        <div className='skeleton h-32 w-full' />
        <div className='skeleton h-4 w-28' />
        <div className='skeleton h-4 w-28' />
        <div className='skeleton h-4 w-full' />
        <div className='skeleton h-4 w-full' />
        <div className='skeleton h-4 w-full' />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className='skeleton h-32 w-full' />
        <div className='skeleton h-4 w-28' />
        <div className='skeleton h-4 w-28' />
        <div className='skeleton h-4 w-full' />
        <div className='skeleton h-4 w-full' />
        <div className='skeleton h-4 w-full' />
      </div>
    </div>
  );
}
