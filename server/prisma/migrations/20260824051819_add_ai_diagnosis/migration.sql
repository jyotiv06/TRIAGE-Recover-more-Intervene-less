-- AlterTable
ALTER TABLE "Opportunity" ADD COLUMN     "aiNaturalRecoveryProbability" DOUBLE PRECISION,
ADD COLUMN     "aiRecoveryWithInterventionProbability" DOUBLE PRECISION,
ADD COLUMN     "diagnosedAt" TIMESTAMP(3),
ADD COLUMN     "diagnosis" TEXT,
ADD COLUMN     "diagnosisConfidence" DOUBLE PRECISION;
