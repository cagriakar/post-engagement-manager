import api from '@/api';
import endpoints from '@/constants/endpoints';
import { PostEngagement } from '@/types';

type PostEngagementsResponse = {
  postEngagements: PostEngagement[];
};
type PostEngagementResponse = {
  postEngagement: PostEngagement;
};

async function getPostEngagementList() {
  const res = await api.get<PostEngagementsResponse>(endpoints.postEngagementList);

  return res.data.postEngagements;
}

async function getPostEngagement(id: number) {
  console.log(`getPostEngagement , id:`, id);
  try {
    const res = await api.get<PostEngagementResponse>(endpoints.getPostEngagement(id));
    console.log(`getPostEngagement , res:`, res);
    return res.data.postEngagement;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deletePostEngagement(id: number) {
  await api.delete<PostEngagementsResponse>(endpoints.deletePostEngagement(id));
}

async function addPostEngagement(newValues: Partial<PostEngagement>) {
  await api.post<PostEngagementsResponse>(endpoints.addPostEngagement, newValues);
}

export default {
  getPostEngagementList,
  deletePostEngagement,
  addPostEngagement,
  getPostEngagement
};
