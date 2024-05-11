import { PlatformType, PlatformTypeMap } from '@/types';
import { faker } from '@faker-js/faker';

function generateMockPostEngagement(name?: string) {
  return {
    id: faker.number.int(),
    name: name ?? faker.commerce.productName(),
    engaged_unique: [faker.number.int({ max: 100 }), faker.number.int({ max: 100 })],
    acquired: faker.number.int({ min: 0, max: 100 }),
    conversion: faker.number.float({ fractionDigits: 2 }),
    platform: faker.string.fromCharacters([PlatformTypeMap.instagram, PlatformTypeMap.messenger]) as PlatformType
  };
}

export default {
  generateMockPostEngagement
};
