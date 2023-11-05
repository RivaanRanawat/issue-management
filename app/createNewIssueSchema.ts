import { z } from 'zod';

export const createNewIssueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(200, 'Title can be upto 200 characters long.'),
    description: z.string().min(1, 'Description is required.')
});
