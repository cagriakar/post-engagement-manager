import LoadingPage from '@/components/fallback/LoadingPage';
import usePostEngagement from '@/hooks/usePostEngagement';
import { useParams } from 'react-router-dom';
import Page404 from '../404';
import BreadcrumbsSection from './components/BreadcrumbsSection';
import FormSection from './components/FormSection';

export default function PostEngagementEdit() {
  const { postEngageId } = useParams();
  const postEngagementId = postEngageId ?? 0;

  const { data, isLoading, isError } = usePostEngagement(+postEngagementId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) return <Page404 />;

  return (
    <>
      <BreadcrumbsSection title={data.name} />
      <FormSection />
    </>
  );
}
