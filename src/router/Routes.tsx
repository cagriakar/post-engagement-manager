import LoadingPage from '@/components/fallback/LoadingPage';
import CaptureToolsLayout from '@/components/layout/CaptureToolsLayout';
import RootLayout from '@/components/layout/RootLayout';
import Page404 from '@/pages/404';
import ErrorPage from '@/pages/Error';
import PostEngagementEdit from '@/pages/post-engagement-edit';
import PostEngagements from '@/pages/post-engagements';
import { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

export default function Routes() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'capture-tools',
          element: <CaptureToolsLayout />,
          children: [
            {
              path: 'post-engagements',
              element: <PostEngagements />
            },
            {
              path: '*',
              element: <Page404 />
            }
          ]
        },
        {
          path: 'capture-tools/post-engagements/:postEngageId/edit',
          element: <PostEngagementEdit />
        },
        {
          path: '*',
          element: <Page404 />
        }
      ]
    }
  ];
  const element = useRoutes(routes);

  return <Suspense fallback={<LoadingPage />}>{element}</Suspense>;
}
