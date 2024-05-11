const ReactionsMap = { like: 'like', love: 'love', haha: 'haha', wow: 'wow', sad: 'sad', angry: 'angry' } as const;
type Reaction = keyof typeof ReactionsMap;

const PostEngagementReplyTypeMap = { single: 'single', flow: 'flow' } as const;
type PostEngagementReplyType = keyof typeof PostEngagementReplyTypeMap;

const AutoReplyCommentTypeMap = { static: 'static', flow: 'ai' } as const;
type AutoReplyCommentType = keyof typeof AutoReplyCommentTypeMap;

type PostEngagementDetail = {
  id: number;
  name: string;
  selectedPostIds: string[];
  privateReplyFirstCommentOnly: boolean;
  sendMessageOnce: boolean;
  requriedReactions: Reaction[];
  excludeList: string[];
  includeList: string[];
  replyType: PostEngagementReplyType;
  flow: string;
  replyMessage: string;

  // auto-response config
  autoLikeComment: boolean;
  autoReplyCommentType: AutoReplyCommentType;
  comments: string[];
  aiIntegrationId: string;
  aiAssistanceId: string;
};

type PostEngagement = {
  id: number;
  name: string;
  engaged_unique: number[];
  acquired: number;
  conversion: number;
  platform: PlatformType;
};
const PlatformTypeMap = { messenger: 'messenger', instagram: 'instagram' } as const;
type PlatformType = keyof typeof PlatformTypeMap;

export { PlatformTypeMap, type PlatformType, type PostEngagement, type PostEngagementDetail };
