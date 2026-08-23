-- CreateTable
CREATE TABLE "Opportunity" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "customerSegment" TEXT NOT NULL,
    "previousSuccessCount" INTEGER NOT NULL,
    "previousFailureCount" INTEGER NOT NULL,
    "daysSinceLastSuccess" INTEGER,
    "attemptCount" INTEGER NOT NULL,
    "failureReason" TEXT NOT NULL,
    "opportunityStatus" TEXT NOT NULL,
    "hoursSinceFailure" DOUBLE PRECISION NOT NULL,
    "checkoutAbandoned" BOOLEAN NOT NULL,
    "lateAuthorization" BOOLEAN NOT NULL,
    "alreadyRecovered" BOOLEAN NOT NULL,
    "naturalRecoveryProbability" DOUBLE PRECISION NOT NULL,
    "recoveredNaturally" BOOLEAN NOT NULL,
    "aiEstimatedLift" DOUBLE PRECISION,
    "aiRecommendedAction" TEXT,
    "selectedForIntervention" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Opportunity_paymentId_key" ON "Opportunity"("paymentId");

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
