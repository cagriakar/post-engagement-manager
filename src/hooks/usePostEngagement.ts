import queryKeys from '@/constants/queryKeys';
import client from '@/services/client';
import { useQuery } from '@tanstack/react-query';

export default function usePostEngagement(id: number = 0) {
  return useQuery({
    queryKey: [queryKeys.postEngagement, id],
    queryFn: () => client.getPostEngagement(id),
    enabled: !!id
  });
}
