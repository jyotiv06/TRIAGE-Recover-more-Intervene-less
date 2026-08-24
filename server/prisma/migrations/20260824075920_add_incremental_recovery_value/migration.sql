/*
  Warnings:

  - You are about to drop the column `amount` on the `RecoveryCase` table. All the data in the column will be lost.
  - The `status` column on the `RecoveryCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "RecoveryActionType" AS ENUM ('RETRY', 'PAYMENT_LINK', 'REMINDER', 'DO_NOTHING', 'ESCALATE');

-- CreateEnum
CREATE TYPE "RecoveryCaseStatus" AS ENUM ('OPEN', 'ACTION_PENDING', 'RECOVERED', 'EXHAUSTED', 'STOPPED');

-- DropForeignKey
ALTER TABLE "RecoveryCase" DROP CONSTRAINT "RecoveryCase_customerId_fkey";

-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "recoveryCaseId" TEXT;

-- AlterTable
ALTER TABLE "RecoveryCase" DROP COLUMN "amount",
ADD COLUMN     "confidence" DOUBLE PRECISION,
ADD COLUMN     "diagnosis" TEXT,
ADD COLUMN     "expectedIncrementalRevenue" DECIMAL(12,2),
ADD COLUMN     "incrementalLift" DOUBLE PRECISION,
ADD COLUMN     "interventionRecoveryProbability" DOUBLE PRECISION,
ADD COLUMN     "naturalRecoveryProbability" DOUBLE PRECISION,
ADD COLUMN     "recommendedAction" "RecoveryActionType",
DROP COLUMN "status",
ADD COLUMN     "status" "RecoveryCaseStatus" NOT NULL DEFAULT 'OPEN',
ALTER COLUMN "customerId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "RecoveryCase_paymentId_idx" ON "RecoveryCase"("paymentId");

-- CreateIndex
CREATE INDEX "RecoveryCase_status_idx" ON "RecoveryCase"("status");

-- AddForeignKey
ALTER TABLE "RecoveryCase" ADD CONSTRAINT "RecoveryCase_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_recoveryCaseId_fkey" FOREIGN KEY ("recoveryCaseId") REFERENCES "RecoveryCase"("id") ON DELETE SET NULL ON UPDATE CASCADE;
