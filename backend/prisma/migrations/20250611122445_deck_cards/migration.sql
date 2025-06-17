/*
  Warnings:

  - You are about to drop the `FlashAnswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlashCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlashDeck` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FlashDeckToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FlashAnswer" DROP CONSTRAINT "FlashAnswer_flashCardId_fkey";

-- DropForeignKey
ALTER TABLE "FlashCard" DROP CONSTRAINT "FlashCard_flashDeckId_fkey";

-- DropForeignKey
ALTER TABLE "FlashDeck" DROP CONSTRAINT "FlashDeck_iconName_fkey";

-- DropForeignKey
ALTER TABLE "FlashDeck" DROP CONSTRAINT "FlashDeck_notebookId_fkey";

-- DropForeignKey
ALTER TABLE "FlashDeck" DROP CONSTRAINT "FlashDeck_userId_fkey";

-- DropForeignKey
ALTER TABLE "_FlashDeckToTag" DROP CONSTRAINT "_FlashDeckToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_FlashDeckToTag" DROP CONSTRAINT "_FlashDeckToTag_B_fkey";

-- DropTable
DROP TABLE "FlashAnswer";

-- DropTable
DROP TABLE "FlashCard";

-- DropTable
DROP TABLE "FlashDeck";

-- DropTable
DROP TABLE "_FlashDeckToTag";

-- CreateTable
CREATE TABLE "Deck" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" UUID NOT NULL,
    "notebookId" UUID,

    CONSTRAINT "Deck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" UUID NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deckId" UUID NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DeckToTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_DeckToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "Deck_userId_updatedAt_idx" ON "Deck"("userId", "updatedAt");

-- CreateIndex
CREATE INDEX "Deck_userId_title_idx" ON "Deck"("userId", "title");

-- CreateIndex
CREATE INDEX "Card_deckId_idx" ON "Card"("deckId");

-- CreateIndex
CREATE INDEX "_DeckToTag_B_index" ON "_DeckToTag"("B");

-- AddForeignKey
ALTER TABLE "Deck" ADD CONSTRAINT "Deck_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deck" ADD CONSTRAINT "Deck_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeckToTag" ADD CONSTRAINT "_DeckToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeckToTag" ADD CONSTRAINT "_DeckToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
