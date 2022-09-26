/*
  Warnings:

  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[passwordId]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `passwordId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "password",
ADD COLUMN     "passwordId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Password" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_passwordId_key" ON "user"("passwordId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "Password"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
