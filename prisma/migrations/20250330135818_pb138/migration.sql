-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "username" VARCHAR(31) NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "hashedPassword" TEXT NOT NULL,
    "passwordSalt" TEXT NOT NULL,
    "profilePictureId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "ProfilePicture" (
    "profilePictureId" SERIAL NOT NULL,
    "picture" BYTEA NOT NULL,

    CONSTRAINT "ProfilePicture_pkey" PRIMARY KEY ("profilePictureId")
);

-- CreateTable
CREATE TABLE "Notebook" (
    "notebookId" SERIAL NOT NULL,
    "title" VARCHAR(127) NOT NULL,
    "color" TEXT,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "iconId" INTEGER NOT NULL,

    CONSTRAINT "Notebook_pkey" PRIMARY KEY ("notebookId")
);

-- CreateTable
CREATE TABLE "Note" (
    "noteId" SERIAL NOT NULL,
    "title" VARCHAR(127) NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notebookId" INTEGER NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("noteId")
);

-- CreateTable
CREATE TABLE "Calendar" (
    "calendarId" SERIAL NOT NULL,
    "title" VARCHAR(127) NOT NULL,
    "color" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("calendarId")
);

-- CreateTable
CREATE TABLE "Event" (
    "eventId" SERIAL NOT NULL,
    "title" VARCHAR(127) NOT NULL,
    "description" VARCHAR(511) NOT NULL DEFAULT '',
    "tags" TEXT[],
    "color" TEXT,
    "calendarId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "EventTime" (
    "eventTimeId" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "EventTime_pkey" PRIMARY KEY ("eventTimeId")
);

-- CreateTable
CREATE TABLE "FlashDeck" (
    "flashDeckId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "color" TEXT,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "iconId" INTEGER NOT NULL,
    "notebookId" INTEGER,

    CONSTRAINT "FlashDeck_pkey" PRIMARY KEY ("flashDeckId")
);

-- CreateTable
CREATE TABLE "FlashCard" (
    "flashCardId" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "flashDeckId" INTEGER NOT NULL,

    CONSTRAINT "FlashCard_pkey" PRIMARY KEY ("flashCardId")
);

-- CreateTable
CREATE TABLE "FlashCardAnswer" (
    "answerId" SERIAL NOT NULL,
    "answer" TEXT NOT NULL DEFAULT '',
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "flashCardId" INTEGER NOT NULL,

    CONSTRAINT "FlashCardAnswer_pkey" PRIMARY KEY ("answerId")
);

-- CreateTable
CREATE TABLE "Icon" (
    "iconId" SERIAL NOT NULL,
    "icon" BYTEA NOT NULL,

    CONSTRAINT "Icon_pkey" PRIMARY KEY ("iconId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Calendar_userId_key" ON "Calendar"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profilePictureId_fkey" FOREIGN KEY ("profilePictureId") REFERENCES "ProfilePicture"("profilePictureId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notebook" ADD CONSTRAINT "Notebook_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notebook" ADD CONSTRAINT "Notebook_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Icon"("iconId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook"("notebookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendar" ADD CONSTRAINT "Calendar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("calendarId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTime" ADD CONSTRAINT "EventTime_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashDeck" ADD CONSTRAINT "FlashDeck_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashDeck" ADD CONSTRAINT "FlashDeck_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Icon"("iconId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashDeck" ADD CONSTRAINT "FlashDeck_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook"("notebookId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCard" ADD CONSTRAINT "FlashCard_flashDeckId_fkey" FOREIGN KEY ("flashDeckId") REFERENCES "FlashDeck"("flashDeckId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCardAnswer" ADD CONSTRAINT "FlashCardAnswer_flashCardId_fkey" FOREIGN KEY ("flashCardId") REFERENCES "FlashCard"("flashCardId") ON DELETE RESTRICT ON UPDATE CASCADE;
