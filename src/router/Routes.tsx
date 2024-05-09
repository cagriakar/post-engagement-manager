import LoadingPage from '@/components/fallback/LoadingPage';
import RootLayout from '@/components/layout/RootLayout';
import Page404 from '@/pages/404';
import ErrorPage from '@/pages/Error';
import PostEngagements from '@/pages/PostEngagements';
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
					index: true,
					element: <PostEngagements />
				},
				{
					path: '/post-engagements/:postEngageId',
					element: <div>Hello</div>
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
