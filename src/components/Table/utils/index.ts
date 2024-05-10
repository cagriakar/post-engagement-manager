import instagram from '@/assets/instagram.png';
import messenger from '@/assets/messenger.png';
import { PlatformType, PlatformTypeMap } from '@/types';

export function getPlatformIcon(type: PlatformType) {
  switch (type) {
    case PlatformTypeMap.messenger:
      return messenger;
    case PlatformTypeMap.instagram:
      return instagram;
    default:
      return null;
  }
}
