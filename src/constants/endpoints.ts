export default {
  baseURL: '/api',
  postEngagementList: '/postEngagements',
  deletePostEngagement: (id: number) => `/postEngagements/${id}`,
  addPostEngagement: '/postEngagements'
};
