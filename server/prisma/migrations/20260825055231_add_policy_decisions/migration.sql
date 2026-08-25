-- AlterTable
ALTER TABLE "Opportunity" ADD COLUMN     "policyAllowed" BOOLEAN,
ADD COLUMN     "policyEscalate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "policyReason" TEXT;
