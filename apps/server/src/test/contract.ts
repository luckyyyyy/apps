import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const contract = c.router({
  getPost: {
    method: 'GET',
    path: '/test/posts/:id',
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: PostSchema,
    },
    summary: 'Get a post by id',
  },
});
