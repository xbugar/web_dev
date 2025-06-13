/*
  Warnings:

  - You are about to drop the column `color` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `importance` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `EventTime` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dateTimeEnd` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateTimeStart` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repeats` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Repeat" AS ENUM ('NEVER', 'DAY', 'WEEK', 'TWO_WEEKS', 'MONTH', 'YEAR');

-- DropForeignKey
ALTER TABLE "EventTime" DROP CONSTRAINT "EventTime_eventId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "color",
DROP COLUMN "importance",
ADD COLUMN     "dateTimeEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateTimeStart" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "repeats" "Repeat" NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "EventTime";

-- DropEnum
DROP TYPE "Importance";
