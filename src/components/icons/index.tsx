export function WarningIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56' />
      <path d='M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z' />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg className='swap-on h-5 w-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg className='swap-off h-5 w-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
    </svg>
  );
}

export function HelpCenterIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='10'></circle>
      <circle cx='12' cy='12' r='4'></circle>
      <line x1='4.93' y1='4.93' x2='9.17' y2='9.17'></line>
      <line x1='14.83' y1='14.83' x2='19.07' y2='19.07'></line>
      <line x1='14.83' y1='9.17' x2='19.07' y2='4.93'></line>
      <line x1='14.83' y1='9.17' x2='18.36' y2='5.64'></line>
      <line x1='4.93' y1='19.07' x2='9.17' y2='14.83'></line>
    </svg>
  );
}

export function OnlineIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        strokeWidth='2'
        d='M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M7,12 L11,15 L16,8'
      />
    </svg>
  );
}

export function CommunityIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8' />
      <path d='M13 7l0 .01' />
      <path d='M17 7l0 .01' />
      <path d='M17 11l0 .01' />
      <path d='M17 15l0 .01' />
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z' />
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z' />
    </svg>
  );
}

export function WalletIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z' />
    </svg>
  );
}

export function AccountIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z' />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z' />
      <path d='M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z' />
    </svg>
  );
}

export function DashboardIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z' />
    </svg>
  );
}

export function PeopleIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4'></circle>
      <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  );
}

export function MessageIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105' />
      <path d='M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5' />
    </svg>
  );
}

export function MagnetIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      version='1.1'
      viewBox='0 0 16 16'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M14 0h-4l1 9c0 1.657-1.343 3-3 3s-3-1.343-3-3l1-9h-4l-1 9c0 3.866 3.134 7 7 7s7-3.134 7-7l-1-9zM12.154 13.154c-1.11 1.11-2.585 1.721-4.154 1.721s-3.045-0.611-4.154-1.721c-1.096-1.096-1.705-2.548-1.72-4.095l0.564-5.075h1.736l-0.55 4.953v0.062c0 1.102 0.429 2.138 1.208 2.917s1.815 1.208 2.917 1.208 2.138-0.429 2.917-1.208c0.779-0.779 1.208-1.815 1.208-2.917v-0.062l-0.007-0.062-0.543-4.891h1.736l0.564 5.075c-0.015 1.547-0.625 2.999-1.72 4.095z' />
    </svg>
  );
}

export function AnnouncementIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      version='1.1'
      viewBox='0 0 16 16'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M16 6.707c0-3.139-0.919-5.687-2.054-5.707 0.005-0 0.009-0 0.014-0h-1.296c0 0-3.044 2.287-7.425 3.184-0.134 0.708-0.219 1.551-0.219 2.523s0.085 1.816 0.219 2.523c4.382 0.897 7.425 3.184 7.425 3.184h1.296c-0.005 0-0.009-0-0.014-0.001 1.136-0.020 2.054-2.567 2.054-5.707zM13.513 11.551c-0.147 0-0.305-0.152-0.387-0.243-0.197-0.22-0.387-0.562-0.55-0.989-0.363-0.957-0.564-2.239-0.564-3.611s0.2-2.655 0.564-3.611c0.162-0.428 0.353-0.77 0.55-0.99 0.081-0.091 0.24-0.243 0.387-0.243s0.305 0.152 0.387 0.243c0.197 0.22 0.387 0.562 0.55 0.99 0.363 0.957 0.564 2.239 0.564 3.611s-0.2 2.655-0.564 3.611c-0.162 0.428-0.353 0.77-0.55 0.989-0.081 0.091-0.24 0.243-0.387 0.243zM3.935 6.707c0-0.812 0.060-1.6 0.173-2.33-0.74 0.102-1.39 0.161-2.193 0.161-1.048 0-1.048 0-1.048 0l-0.867 1.479v1.378l0.867 1.479c0 0 0 0 1.048 0 0.803 0 1.453 0.059 2.193 0.161-0.113-0.729-0.173-1.518-0.173-2.33zM5.752 10.034l-2-0.383 1.279 5.024c0.066 0.26 0.324 0.391 0.573 0.291l1.852-0.741c0.249-0.1 0.349-0.374 0.222-0.611l-1.926-3.581zM13.513 8.574c-0.057 0-0.118-0.059-0.149-0.094-0.076-0.085-0.149-0.217-0.212-0.381-0.14-0.369-0.217-0.863-0.217-1.392s0.077-1.023 0.217-1.392c0.063-0.165 0.136-0.297 0.212-0.381 0.031-0.035 0.092-0.094 0.149-0.094s0.118 0.059 0.149 0.094c0.076 0.085 0.149 0.217 0.212 0.381 0.14 0.369 0.217 0.863 0.217 1.392s-0.077 1.023-0.217 1.392c-0.063 0.165-0.136 0.297-0.212 0.381-0.031 0.035-0.092 0.094-0.149 0.094z' />
    </svg>
  );
}

export function MagicWandIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      version='1.1'
      viewBox='0 0 16 16'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M4 3l-2-2h-1v1l2 2zM5 0h1v2h-1zM9 5h2v1h-2zM10 2v-1h-1l-2 2 1 1zM0 5h2v1h-2zM5 9h1v2h-1zM1 9v1h1l2-2-1-1zM15.781 13.781l-9.939-9.939c-0.292-0.292-0.769-0.292-1.061 0l-0.939 0.939c-0.292 0.292-0.292 0.769 0 1.061l9.939 9.939c0.292 0.292 0.769 0.292 1.061 0l0.939-0.939c0.292-0.292 0.292-0.769 0-1.061zM7.5 8.5l-3-3 1-1 3 3-1 1z' />
    </svg>
  );
}

export function LayerIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
      <polyline points='2 17 12 22 22 17'></polyline>
      <polyline points='2 12 12 17 22 12'></polyline>
    </svg>
  );
}

export function StatisticsIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M15 13V14H1.5L1 13.5V0H2V13H15Z' />
      <path d='M13 3.20714L7.85353 8.35359H7.14642L5.49998 6.70714L1.85353 10.3536L1.14642 9.64648L5.14642 5.64648H5.85353L7.49998 7.29293L12.6464 2.14648H13.3535L15.3535 4.14648L14.6464 4.85359L13 3.20714Z' />
    </svg>
  );
}

export function SettingsIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0' />
      <path d='M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z' />
    </svg>
  );
}

export function LinkIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
      <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
    </svg>
  );
}
export function JsonIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM4.151 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.105.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .084-.29.39.39 0 0 0-.152-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.352-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.192-.272.528-.422.337-.15.777-.149.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.185.384q0 .18.144.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211a1 1 0 0 1 .375.358q.135.222.135.56 0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033a1.3 1.3 0 0 1-.082-.466h.764a.6.6 0 0 0 .074.27.5.5 0 0 0 .454.246q.285 0 .422-.164.137-.165.137-.466v-2.745h.791v2.725q0 .66-.357 1.005-.355.345-.985.345a1.6 1.6 0 0 1-.568-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39m9.091-1.585v.522q0 .384-.117.641a.86.86 0 0 1-.322.387.9.9 0 0 1-.47.126.9.9 0 0 1-.47-.126.87.87 0 0 1-.32-.387 1.55 1.55 0 0 1-.117-.641v-.522q0-.386.117-.641a.87.87 0 0 1 .32-.387.87.87 0 0 1 .47-.129q.265 0 .47.129a.86.86 0 0 1 .322.387q.117.255.117.641m.803.519v-.513q0-.565-.205-.973a1.46 1.46 0 0 0-.59-.63q-.38-.22-.916-.22-.534 0-.92.22a1.44 1.44 0 0 0-.589.628q-.205.407-.205.975v.513q0 .562.205.973.205.407.589.626.386.217.92.217.536 0 .917-.217.384-.22.589-.626.204-.41.205-.973m1.29-.935v2.675h-.746v-3.999h.662l1.752 2.66h.032v-2.66h.75v4h-.656l-1.761-2.676z'
      />
    </svg>
  );
}
export function PlugIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0'
      />
    </svg>
  );
}
export function QrIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
      <path d='M7 17l0 .01' />
      <path d='M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
      <path d='M7 7l0 .01' />
      <path d='M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
      <path d='M17 7l0 .01' />
      <path d='M14 14l3 0' />
      <path d='M20 14l0 .01' />
      <path d='M14 14l0 3' />
      <path d='M14 20l3 0' />
      <path d='M17 17l3 0' />
      <path d='M20 17l0 3' />
    </svg>
  );
}
export function AddPostIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z' />
      <path d='M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z' />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1' />
      <path d='M8 13l3 -2l2 2l3 -2' />
    </svg>
  );
}

export function DownArrow() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className='h-4 w-4 inline-block'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='m11.998 17 7-8h-14z' />
    </svg>
  );
}

export function UpArrow() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className='h-4 w-4 inline-block'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5 15h14l-7-8z' />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
    </svg>
  );
}

export function BackArrow() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0V0z' />
      <path d='M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z' />
    </svg>
  );
}
export function DoubleBackArrow() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z' />
    </svg>
  );
}

export function NextArrow() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0V0z' />
      <path d='M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z' />
    </svg>
  );
}
export function DoubleNextArrow() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z' />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      className='h-5 w-5'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z' />
    </svg>
  );
}
