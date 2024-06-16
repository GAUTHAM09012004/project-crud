/*
  Warnings:

  - You are about to drop the column `selectedFreelancerID` on the `ProjectSelections` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectSelections" DROP CONSTRAINT "ProjectSelections_selectedFreelancerID_fkey";

-- AlterTable
ALTER TABLE "ProjectSelections" DROP COLUMN "selectedFreelancerID";
