# Triage: Recover More, Intervene Less

Triage is an AI-assisted revenue recovery engine for payment failures and other
at-risk payment opportunities.

The basic idea is simple:

> Not every failed payment needs an intervention.

Some payments are likely to recover on their own. Some need a retry, payment
link, or reminder. Some are too risky or too valuable to handle automatically.

Instead of treating every failed payment the same, Triage estimates the value
of intervening and uses a limited intervention budget to decide where an action
is actually worth taking.

---

## What problem does this solve?

Payment failures don't all have the same reason or the same chance of recovery.

For example:

- An insufficient-funds failure may recover naturally after some time.
- An expired card may need the customer to use another payment method.
- A temporary network error may be worth retrying.
- A high-value payment may need human escalation instead of an automatic action.
- Some opportunities have very little additional value from intervention.

A simple recovery system might retry everything or simply target the biggest
payments.

That can lead to:

- unnecessary customer contact
- wasted intervention capacity
- repeated retries
- poor prioritization
- lack of visibility into why a decision was made

Triage tries to answer a more useful question:

> "If I only have a limited number of interventions, where will each
> intervention create the most additional recovery?"

---

# How Triage works

The system processes a payment opportunity through several stages:

```text
Razorpay Webhook
       |
       v
Event Validation
       |
       v
Normalization + Deduplication
       |
       v
Opportunity Creation
       |
       v
AI Diagnosis (Gemini)
       |
       v
Recovery Economics
       |
       v
Portfolio Optimization
       |
       v
Policy / Safety Checks
       |
       v
Action Selection
       |
       v
Outcome Simulation / Recovery
       |
       v
Audit Trail + Dashboard