import NotFoundPage from '@/assets/404.svg';

export default function Page404() {
  return (
    <div className='grid gap-4 md:flex md:min-h-[60vh] md:items-center'>
      <div className='text-center'>
        <img width={400} src={NotFoundPage} alt='404' />
        <a href='https://stories.freepik.com/web' className='text-xs'>
          Illustration by Freepik Stories
        </a>
      </div>

      <div className='text-center md:text-start'>
        <div className='grid gap-2'>
          <h1 className='text-3xl'>Page not Found</h1>

          <p>It&apos;s Okay!</p>
        </div>
      </div>
    </div>
  );
}
