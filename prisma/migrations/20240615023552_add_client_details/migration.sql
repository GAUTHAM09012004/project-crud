/*
  Warnings:

  - You are about to drop the column `applicantID` on the `ProjectApplications` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectApplications" DROP CONSTRAINT "ProjectApplications_applicantID_fkey";

-- AlterTable
ALTER TABLE "ProjectApplications" DROP COLUMN "applicantID";
