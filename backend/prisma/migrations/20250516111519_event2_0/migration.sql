/*
  Warnings:

  - You are about to drop the column `dateTimeEnd` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `dateTimeStart` on the `Event` table. All the data in the column will be lost.
  - Added the required column `timeFrom` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeTo` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "dateTimeEnd",
DROP COLUMN "dateTimeStart",
ADD COLUMN     "timeFrom" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "timeTo" TIMESTAMP(3) NOT NULL;
