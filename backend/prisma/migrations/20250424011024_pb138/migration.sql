-- DropForeignKey
ALTER TABLE "FlashCard" DROP CONSTRAINT "FlashCard_flashDeckId_fkey";

-- AddForeignKey
ALTER TABLE "FlashCard" ADD CONSTRAINT "FlashCard_flashDeckId_fkey" FOREIGN KEY ("flashDeckId") REFERENCES "FlashDeck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
