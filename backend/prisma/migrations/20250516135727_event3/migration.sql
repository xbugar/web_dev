/*
  Warnings:

  - You are about to drop the column `repeats` on the `Event` table. All the data in the column will be lost.
  - Added the required column `repeat` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "repeats",
ADD COLUMN     "repeat" "Repeat" NOT NULL;
