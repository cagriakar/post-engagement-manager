import NotFoundPage from '@/assets/404.svg';

export default function Page404() {
  return (
    <div className='flex flex-row gap-4 md:min-h-[60vh] justify-center flex-wrap'>
      <div className='text-center'>
        <img width={400} src={NotFoundPage} alt='404' />
      </div>

      <div className='flex items-center'>
        <div className='grid gap-2'>
          <h1 className='text-3xl'>Page not Found</h1>

          <p>It&apos;s Okay!</p>
        </div>
      </div>
    </div>
  );
}
