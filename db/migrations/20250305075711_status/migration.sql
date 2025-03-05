-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('INITIAL', 'DRAFT', 'PUBLISHED', 'ARCHIVED');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "status" "PostStatus" NOT NULL DEFAULT 'DRAFT';
