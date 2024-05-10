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

export { PlatformTypeMap, type PlatformType, type PostEngagement };
