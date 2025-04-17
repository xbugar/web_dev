-- CreateIndex
CREATE INDEX "Event_userId_title_idx" ON "Event"("userId", "title");

-- CreateIndex
CREATE INDEX "FlashCard_flashDeckId_idx" ON "FlashCard"("flashDeckId");

-- CreateIndex
CREATE INDEX "FlashDeck_userId_updatedAt_idx" ON "FlashDeck"("userId", "updatedAt");

-- CreateIndex
CREATE INDEX "FlashDeck_userId_title_idx" ON "FlashDeck"("userId", "title");

-- CreateIndex
CREATE INDEX "Note_notebookId_title_idx" ON "Note"("notebookId", "title");

-- CreateIndex
CREATE INDEX "Notebook_userId_updatedAt_idx" ON "Notebook"("userId", "updatedAt");

-- CreateIndex
CREATE INDEX "Notebook_userId_title_idx" ON "Notebook"("userId", "title");

-- CreateIndex
CREATE INDEX "Tag_userId_idx" ON "Tag"("userId");

-- CreateIndex
CREATE INDEX "User_email_lastName_firstName_idx" ON "User"("email", "lastName", "firstName");
