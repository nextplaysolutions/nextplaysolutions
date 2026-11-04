export const INVISIBLE_TAX_SIGNS = [
  ["Extra work never reaches the invoice.", "A change gets approved and completed, but the billing handoff gets missed."],
  ["Leads wait. Nobody owns the next response.", "An inquiry lands in a text, inbox, or voicemail and waits for someone to remember it."],
  ["The same information gets entered twice.", "Your team copies details between systems, then spends more time reconciling the differences."],
  ["Useful software sits unused.", "You pay for tools whose useful features never became part of the daily workflow."],
  ["Work stalls while you chase paperwork.", "A missing document holds up the next step, and checking on it becomes another job."],
  ["Your admin shift starts after dinner.", "Customer work ends, but quotes, scheduling, and invoicing follow you home."],
  ["One person is the process.", "Important work depends on one person remembering what happens next. Covering a day off becomes a scramble."],
] as const;

export const REMODELER_SIGNS = [
  ["Approved changes never reach billing", "Check whether every approved extra has a job record and appears on the final invoice."],
  ["Estimates go quiet", "Who follows up on an open estimate, and where is the next action recorded?"],
  ["Job details live in scattered messages", "Can the crew find the current scope without asking the owner to search a text thread?"],
  ["Schedule changes travel by word of mouth", "Check how customers, crews, and subcontractors receive the same updated plan."],
  ["Customer updates interrupt the day", "Look for routine status questions that a clearer update process could answer."],
  ["Completed work waits to be invoiced", "Trace the handoff from job completion to billing, including who owns it."],
  ["Subscriptions do not connect the work", "Review whether existing tools can support the workflow before adding another."],
] as const;
