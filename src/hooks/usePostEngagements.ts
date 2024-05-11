import queryKeys from '@/constants/queryKeys';
import client from '@/services/client';
import { useQuery } from '@tanstack/react-query';

export default function usePostEngagements() {
  return useQuery({
    queryKey: [queryKeys.postEngagements],
    queryFn: client.getPostEngagementList
    /* the data fetched by the query will be considered fresh and not in need of refetching. */
    // staleTime: Infinity,
    // gcTime: Infinity

    // ...options
  });
}
