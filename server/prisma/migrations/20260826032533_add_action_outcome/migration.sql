-- AlterTable
ALTER TABLE "Opportunity" ADD COLUMN     "action" TEXT,
ADD COLUMN     "amountRecovered" DOUBLE PRECISION,
ADD COLUMN     "interventionUsed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "recovered" BOOLEAN;
