import { PlatformType, PlatformTypeMap, PostEngagement, PostEngagementDetail } from '@/types';
import { faker } from '@faker-js/faker';
import { Factory, Model, createServer } from 'miragejs';

type PostEngagementModel = Partial<PostEngagementDetail & PostEngagement>;

export function makeServer() {
  return createServer({
    models: {
      postEngagement: Model.extend<PostEngagementModel>({})
    },
    routes() {
      this.namespace = 'api';
      this.get('/postEngagements');
      this.delete('/postEngagements/:id', (schema, request) => {
        const id = request.params.id;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return schema.postEngagements.find(id).destroy();
      });

      this.patch('/postEngagements/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody);
        const id = request.params.id;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const postEngagement = schema.postEngagements.find(id);

        return postEngagement.update(newAttrs);
      });
    },

    factories: {
      postEngagement: Factory.extend<PostEngagementModel>({
        id() {
          return faker.number.int();
        },
        name() {
          return faker.commerce.productName();
        },
        engaged_unique() {
          return [faker.number.int({ max: 100 }), faker.number.int({ max: 100 })];
        },
        acquired() {
          return faker.number.int({ min: 0, max: 100 });
        },
        conversion() {
          return faker.number.float({ fractionDigits: 2 });
        },
        platform() {
          return faker.string.fromCharacters([PlatformTypeMap.instagram, PlatformTypeMap.messenger]) as PlatformType;
        }
      })
    },

    seeds(server) {
      server.createList('postEngagement', 16);
    }
  });
}
