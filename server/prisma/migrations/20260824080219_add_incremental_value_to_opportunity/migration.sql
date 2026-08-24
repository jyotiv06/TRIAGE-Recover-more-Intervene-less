-- AlterTable
ALTER TABLE "Opportunity" ADD COLUMN     "expectedIncrementalRevenue" DECIMAL(12,2),
ADD COLUMN     "incrementalLift" DOUBLE PRECISION;
