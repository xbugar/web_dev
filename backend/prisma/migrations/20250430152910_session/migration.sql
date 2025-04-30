-- CreateTable
CREATE TABLE "Session" (
    "id" UUID NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "sessionData" TEXT NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
