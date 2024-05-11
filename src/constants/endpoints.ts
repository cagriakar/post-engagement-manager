export default {
  baseURL: '/api',
  postEngagementList: '/postEngagements',
  deletePostEngagement: (id: number) => `/postEngagements/${id}`,
  updatePostEngagement: (id: number) => `/postEngagements/${id}`
};
