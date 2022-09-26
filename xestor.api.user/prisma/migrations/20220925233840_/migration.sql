/*
  Warnings:

  - You are about to drop the column `passwordId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Password` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Password` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_passwordId_fkey";

-- DropIndex
DROP INDEX "user_passwordId_key";

-- AlterTable
ALTER TABLE "Password" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "passwordId";

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
