import Table from '@/components/Table';
import LoadingTable from '@/components/fallback/LoadingTable';
import usePostEngagements from '@/hooks/usePostEngagements';

export default function PostEngagementsTable() {
  const { data, isLoading } = usePostEngagements();

  if (isLoading) return <LoadingTable />;

  return <Table data={data ?? []} />;
}
