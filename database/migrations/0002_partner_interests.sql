CREATE TABLE "partner_interests" (
	"id" serial PRIMARY KEY NOT NULL,
	"business_name" varchar(255) NOT NULL,
	"business_type" varchar(50) NOT NULL,
	"city" varchar(120) NOT NULL,
	"contact_name" varchar(255) NOT NULL,
	"role" varchar(120),
	"email" varchar(255) NOT NULL,
	"normalized_email" varchar(255) NOT NULL,
	"phone" varchar(50),
	"message" text,
	"status" varchar(30) DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"ip_address" "inet",
	"user_agent" text,
	CONSTRAINT "partner_interests_normalized_email_unique" UNIQUE("normalized_email")
);
--> statement-breakpoint
CREATE INDEX "idx_partner_interests_status" ON "partner_interests" USING btree ("status");--> statement-breakpoint
CREATE INDEX "idx_partner_interests_created_at" ON "partner_interests" USING btree ("created_at" DESC NULLS LAST);