import api from '@/api';
import endpoints from '@/constants/endpoints';
import { PostEngagement } from '@/types';

type PostEngagementsResponse = {
  postEngagements: PostEngagement[];
};

async function getPostEngagementList() {
  const res = await api.get<PostEngagementsResponse>(endpoints.postEngagementList);

  return res.data.postEngagements;
}

async function deletePostEngagement(id: number) {
  await api.delete<PostEngagementsResponse>(endpoints.deletePostEngagement(id));
}

async function updatePostEngagement(newValues: Partial<PostEngagement> & Pick<PostEngagement, 'id'>) {
  await api.patch<PostEngagementsResponse>(endpoints.updatePostEngagement(newValues.id), newValues);
}

export default {
  getPostEngagementList,
  deletePostEngagement,
  updatePostEngagement
};
