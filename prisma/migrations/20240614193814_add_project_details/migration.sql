/*
  Warnings:

  - You are about to drop the column `clientID` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_clientID_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "clientID";
