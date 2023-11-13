import { pgTable, varchar, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const deal = pgTable('Deal', {
  id: uuid('id').primaryKey(),
  description: text('description').notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  end: timestamp('end').notNull(),
  url: varchar('url', { length: 256 }).notNull(),
});
