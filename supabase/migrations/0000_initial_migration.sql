CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "Deal" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	"description" text NOT NULL,
	"name" varchar(256) NOT NULL,
	"end" timestamp NOT NULL,
	"url" varchar(256) NOT NULL
);
