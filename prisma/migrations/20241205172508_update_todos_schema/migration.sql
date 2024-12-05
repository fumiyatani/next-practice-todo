-- CreateEnum
CREATE TYPE "todo_status" AS ENUM ('pending', 'in_progress', 'done');

-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "details" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" "todo_status" NOT NULL DEFAULT 'pending',

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
