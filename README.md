# Triage — Recover More, Intervene Less

> An AI-assisted revenue recovery engine for payment failures and at-risk payments.

Triage helps decide **where a recovery intervention is actually worth taking**.

Not every failed payment needs the same action. Some payments may recover naturally, some may need a retry, payment link or reminder, and some high-value cases may need escalation.

Instead of treating every payment failure the same, Triage combines **AI-assisted diagnosis, recovery economics, portfolio prioritization and policy checks** to decide where limited intervention capacity should be used.

---

## Problem

Payment failures can happen for different reasons and have different chances of recovery.

For example:

- **Insufficient funds** → may recover naturally
- **Expired card** → may need another payment method
- **Network error** → may be worth retrying
- **High-value payment** → may need escalation
- **Low incremental value** → intervention may not be worth it

A simple recovery system could retry everything or simply prioritize the biggest payments.

This can lead to:

- unnecessary customer contact
- wasted intervention capacity
- repeated retries
- poor prioritization
- unclear recovery decisions

Triage asks:

> **If I have a limited number of interventions, where can each intervention create the most additional recovery?**

---

## Architecture Diagram

![Triage Architecture](./Architecture%20Diagram.png)

---

## What I Built

The system takes a payment event and moves it through a complete recovery decision pipeline.

```text
Razorpay Payment Event
        ↓
Validate + Normalize
        ↓
Deduplicate + Store
        ↓
Opportunity Creation
        ↓
AI Diagnosis — Gemini
        ↓
Recovery Economics
        ↓
Portfolio Optimizer
        ↓
Policy / Governance
        ↓
Action Selection
        ↓
Recovery Simulation
        ↓
Outcome Tracking
        ↓
Audit Trail + Dashboard
```
--- 

## AI Diagnosis

Gemini is used to analyze the payment failure and estimate recovery probabilities.

For each opportunity, the system stores:

- diagnosis
- reasoning
- confidence
- natural recovery probability
- recovery with intervention probability

The AI provides estimates, while the final intervention decision is controlled by the deterministic economics and policy layers.

---

## Recovery Economics

Triage focuses on incremental recovery, rather than only payment amount.

Incremental Lift
= Recovery with Intervention
  - Natural Recovery

Then:

Expected Incremental Revenue
= Payment Amount × Incremental Lift

This helps identify cases where an intervention is expected to create meaningful additional recovery.

---

## Portfolio Optimization

The demo uses 400 synthetic recovery opportunities.

The optimizer ranks opportunities by expected incremental revenue and selects the highest-value opportunities within the available intervention capacity.

This allows the system to use a limited intervention budget instead of treating every payment equally.

---

## Policy & Governance

Before an action is selected, the opportunity passes through policy checks.

The current rules include:

- maximum retries
- cooldown period
- minimum diagnosis confidence
- intervention capacity
- already recovered payments
- already captured payments
- high-value escalation

Possible actions are:

- RETRY
- PAYMENT_LINK
- REMINDER
- ESCALATE
- DO_NOTHING

High-value cases can be escalated instead of being handled automatically.

The current build uses recovery simulation rather than performing real payment retries or sending real customer notifications.

---

## Baseline vs Triage

Triage is compared with a simple baseline that prioritizes the biggest payments.

Both strategies are evaluated using the same 400 opportunities and the same intervention capacity of 20.


| Metric | Baseline Triage | Expected Recovery |
| :--- | :---: | :---: |
| **Incremental Revenue** | ₹7,49,544 | ₹9,42,078 |
| **Interventions** | 20 | 20 |
| **Incremental / Intervention** | ₹37,477 | ₹47,104 |

**The key result is:**

With the same intervention budget, Triage generates more incremental value per intervention.

**Dashboard**

The project includes four main views:

**Command Center**

Shows overall recovery economics, revenue at risk and intervention usage.

**Recovery Portfolio**

Shows prioritized opportunities, expected incremental value, actions and policy status.

**Case Explorer**

Shows the decision path for an individual recovery opportunity from payment event to outcome.

**Baseline vs Triage**

Compares the Triage strategy against the biggest-payment baseline under the same intervention capacity.

---

**Webhook & Event Handling**

Payment events are processed through the event pipeline:

```text
Payment Event
      ↓
Validation
      ↓
Normalization
      ↓
Deduplication
      ↓
Payment Event Storage
      ↓
Opportunity Creation / Update
      ↓
Recovery Pipeline
```

---

**Duplicate events are protected using a unique eventId.**

If the same event is received again, it is ignored instead of creating another payment event.

---

## Audit Trail

The system stores the important parts of the recovery decision, including:

- payment events
- AI diagnosis
- recovery probabilities
- incremental value
- policy decisions
- selected actions
- recovery outcomes
- audit records

This makes it possible to trace what decision was made and why.

---

## Dataset

The demo uses 400 synthetic recovery opportunities.

Each opportunity contains information such as:

- payment amount
- customer segment
- payment history
- failure reason
- attempt count
- recovery probabilities
- incremental value
- policy decision
- selected action
- recovery outcome

---
  
## What Broke While Building

Building the project also exposed a few issues that had to be fixed before the final demo.

**1. End-to-End Webhook Test**

The first end-to-end webhook test returned:

{"error":"internal_error"}

The server showed:

ReferenceError: payment is not defined

I traced the issue to the payment lookup/create flow in eventPipeline.js and fixed it.

After that, Prisma reported that the Opportunity.diagnosisReasoning column was missing from the database because the schema change had not been migrated.

I applied the missing migration and resolved a Windows file-lock issue while regenerating the Prisma Client.

After the fixes, the webhook processed successfully and repeated copies of the same event returned:

duplicate_ignored

What I learned: Individual modules can work while the complete integration is still broken, so the full webhook-to-recovery flow needs to be tested end-to-end.

---

**2. Gemini Output Was Not Always Valid JSON**

Some Gemini responses contained extra text or incomplete JSON, which caused parsing failures.

I switched to structured JSON output, added a response schema and added fallback parsing.

The diagnosis run went from an initial 18/20 successful test run to 377/377 successful in the full batch.

What I learned: AI output needs validation and deterministic handling around it.

---

**3. Baseline Comparison Needed Correction**

The first Baseline vs Triage comparison did not use the same effective intervention conditions.

I changed the comparison to use the same 400 opportunities, intervention capacity of 20 and recovery basis for both strategies.

I also added Incremental Revenue / Intervention as an efficiency metric.

The final comparison showed that Triage generated more incremental value per intervention.

---

**What I learned: The numbers behind a product claim need to be checked just as carefully as the code.**

---

# **Tech Stack**

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- ORM: Prisma
- AI: Gemini API
- Payment Events: Razorpay Webhooks

---

**_Recover more where intervention actually matters — and intervene less where it doesn't._**
