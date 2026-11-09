export const GUIDES = [
  {
    "slug": "missing-change-orders",
    "title": "How to stop missing change orders",
    "intro": "Make every approved change traceable from the field to the final invoice. Start with a reliable handoff and a named owner, then decide whether automation is needed.",
    "steps": [
      "Give each change a job reference, description, price, and approval record.",
      "Choose one place for the crew to submit changes before work proceeds.",
      "Assign someone to reconcile approved changes against completed work and invoices.",
      "Track missed items for a month. Automate notifications only after the process works."
    ],
    "evidence": "A remodeling assessment surfaced an estimated $18,000 annual opportunity in unbilled changes. That finding illustrates the problem; it is not a promise of savings for another business.",
    "evidenceHref": "/field-notes#finding-1",
    "sections": [
      {
        "title": "Where the handoff breaks",
        "body": "The customer asks for an extra while the crew is already on site. Someone agrees to it in a conversation or text. The crew completes the work, but the office never receives a clear billable item. A job can look finished even though its invoice is incomplete. Review a completed job from request to payment rather than starting with a software shopping list."
      },
      {
        "title": "Give the change a record before it becomes a memory",
        "body": "Use one change log with a unique reference, job, requested work, proposed amount, approval status, completion status, and invoice reference. Keep requested, approved, completed, and billed as separate states. Your contract and approval requirements still govern when work can proceed; a workflow reminder does not replace them."
      },
      {
        "title": "Put reconciliation on the closeout checklist",
        "body": "Before the final invoice leaves, the billing owner compares completed changes with approved changes and invoice line items. Anything unmatched becomes an exception with an owner and a next action. Make that check part of the job-closeout process rather than a favor someone does when they have spare time."
      },
      {
        "title": "Automate only the handoff you can explain",
        "body": "Once the log works, a notification can alert the office when a change is approved or completed. Do not automatically bill every field note: disputed scope, duplicate entries, and incomplete work need review. Test one job, retain the original approval record, and make failed notifications visible."
      }
    ],
    "example": {
      "title": "One change, four checkpoints",
      "intro": "Illustrative workflow only. These are sample records, not another client finding or a revenue claim.",
      "columns": [
        "Checkpoint",
        "Record to keep",
        "Owner to name"
      ],
      "rows": [
        [
          "Requested",
          "Job reference and description of extra work",
          "Person receiving the request"
        ],
        [
          "Approved",
          "Agreed scope, amount, and approval record",
          "Person authorized to approve"
        ],
        [
          "Completed",
          "Completion date and any unresolved issue",
          "Field lead"
        ],
        [
          "Billed",
          "Invoice reference or reason it is on hold",
          "Billing owner"
        ]
      ]
    },
    "checklist": [
      "Every change has a unique reference linked to its job.",
      "Approval and completion are separate, visible statuses.",
      "The billing owner can locate the approval record.",
      "Completed changes are reconciled before the final invoice.",
      "Unbilled exceptions have a next action and an owner.",
      "A backup can run the same closeout process."
    ],
    "measure": "Track completed-but-unbilled approved changes, days from completion to invoicing, and time spent reconstructing approvals. Keep estimated opportunities separate from amounts actually invoiced and collected. An invoice alone does not establish cash recovered.",
    "faq": [
      {
        "q": "Do we need a new CRM?",
        "a": "Not necessarily. A shared log and a clear billing handoff may be sufficient. Assess your existing job-management and invoicing tools before buying another system."
      },
      {
        "q": "What should we check first?",
        "a": "Take one recently completed job and match its approved changes to the final invoice. Record any gaps without assuming every gap is collectible revenue."
      }
    ],
    "relatedHref": "/remodelers",
    "relatedLabel": "Explore workflow assessment for remodelers",
    "updated": "2026-11-06"
  },
  {
    "slug": "client-document-chasing",
    "title": "How to reduce client document chasing",
    "intro": "Use a single checklist that shows what is needed, what has arrived, and who owns the next follow-up. Measure the waiting before adding more reminders.",
    "steps": [
      "Create one checklist for the documents needed at each stage.",
      "Make the next request specific: document, owner, due date, and a clear submission method.",
      "Separate missing documents from documents waiting for internal review.",
      "Measure days blocked and repeated requests. Test reminders with a small group before extending them."
    ],
    "evidence": "An M&A advisory interview identified deals waiting weeks on paperwork. The cost had not been quantified. No dollar return or implemented outcome is claimed here.",
    "evidenceHref": "/field-notes#finding-2",
    "sections": [
      {
        "title": "Separate client delay from internal delay",
        "body": "A file can be missing, received but unchecked, incomplete, or accepted. Treating all four as 'waiting on the client' sends the wrong reminders and obscures the real bottleneck. Map the states before automating follow-up. One owner should be able to explain what is blocking the next stage."
      },
      {
        "title": "Make each request easy to act on",
        "body": "Name the exact document, the period or version required, its purpose, the due date agreed with the client, and the approved submission channel. Avoid asking for sensitive material in a casual text or unsecured shared location. Use your firm's established access and retention policies."
      },
      {
        "title": "Choose one checklist and one escalation owner",
        "body": "Keep the checklist attached to the client or deal record. Record when the request was sent, when the file arrived, who reviews it, and what is still missing. Assign a backup reviewer. If the next reminder cannot resolve the problem, route it to a person instead of repeating the same message indefinitely."
      },
      {
        "title": "Stop reminders when the state changes",
        "body": "A reminder should check the current item status before sending. Pause it when a document arrives, the due date changes, the client asks for help, or the engagement closes. If the systems cannot reliably detect those changes, start with a human-reviewed reminder queue rather than automatic sending."
      }
    ],
    "example": {
      "title": "A document queue that shows the actual blocker",
      "intro": "Illustrative statuses for a professional-services workflow. No client records or confidential documents are shown.",
      "columns": [
        "Status",
        "Next action",
        "Owner to name"
      ],
      "rows": [
        [
          "Requested",
          "Confirm due date and submission instructions",
          "Client contact"
        ],
        [
          "Received",
          "Check completeness; pause missing-file reminders",
          "Reviewer"
        ],
        [
          "Needs correction",
          "Request the specific missing piece",
          "Engagement owner"
        ],
        [
          "Accepted",
          "Release the next dependent step",
          "Process owner"
        ]
      ]
    },
    "checklist": [
      "Each request names a specific document and due date.",
      "Clients have an approved submission channel.",
      "Received and accepted are separate statuses.",
      "Every outstanding item has a next action and owner.",
      "Reminders stop when the request changes.",
      "A backup can see the queue and take over."
    ],
    "measure": "Measure days each stage is blocked, repeat requests per item, and staff time spent chasing. Distinguish client waiting from internal review time. Faster paperwork does not automatically mean more revenue; report a financial result only when its connection to an actual outcome is supported.",
    "faq": [
      {
        "q": "Should we automate all client reminders?",
        "a": "Start with a small, reviewed queue. Automatic reminders are useful only if the system knows whether the item is still needed and can stop when its status changes."
      },
      {
        "q": "Can we use our existing tools?",
        "a": "Often the first improvement is a shared status checklist and clear ownership. Check existing client portals, task queues, and access controls before adding software."
      }
    ],
    "relatedHref": "/services",
    "relatedLabel": "See how NextPlay scopes implementation",
    "updated": "2026-11-06"
  },
  {
    "slug": "duplicate-data-entry",
    "title": "How to stop entering data twice",
    "intro": "Identify where information first becomes reliable, then choose one system to own it. Connect other tools only after deciding what should happen when records disagree.",
    "steps": [
      "Follow one real customer or job across the tools your team uses.",
      "List each repeated field and the minutes needed to copy and check it.",
      "Choose the source of truth and define rules for duplicates, updates, and errors.",
      "Pilot one integration. Keep a human review step and a way to recover failed transfers."
    ],
    "evidence": "This is process guidance, not a client case study. Time recovered is capacity; it should not be presented as cash saved unless it actually reduces an expense.",
    "evidenceHref": "/field-notes#finding-4",
    "sections": [
      {
        "title": "Map the repeated fields, not just the applications",
        "body": "Start with one job or customer record. Write down where its name, contact details, status, amount, and reference number are created and copied. Note who copies them and when. Two systems may serve different purposes, so removing one is not automatically the right answer."
      },
      {
        "title": "Assign authority field by field",
        "body": "One application may own contact information while another owns payment status. Define which system is authoritative for each field, when the value may change, and who can correct it. Avoid a two-way sync until you can explain how conflicting edits are resolved. Otherwise you can automate the disagreement."
      },
      {
        "title": "Design for duplicates and failed transfers",
        "body": "Use a stable record identifier rather than matching only on a person's name. Decide how to handle a retry so it does not create another customer or invoice. Put failures in a visible review queue with an owner. A successful connection test is not evidence that every record has transferred correctly."
      },
      {
        "title": "Pilot the smallest useful connection",
        "body": "Test with approved sample records and limited access. Include a new record, an update, a duplicate, a missing field, and a failed transfer. Keep a reconciliation check during the pilot. Expand only after the team knows how to detect and recover errors; never share passwords in a workflow document."
      }
    ],
    "example": {
      "title": "A field ownership map",
      "intro": "Illustrative mapping for a service business. Replace these roles with your actual systems before implementation.",
      "columns": [
        "Information",
        "Authoritative record",
        "Transfer rule"
      ],
      "rows": [
        [
          "Customer contact",
          "Customer record",
          "Copy approved updates using a stable ID"
        ],
        [
          "Job scope",
          "Job record",
          "Share the current approved version"
        ],
        [
          "Invoice status",
          "Billing record",
          "Read status; do not create duplicate invoices"
        ],
        [
          "Transfer failure",
          "Exception queue",
          "Assign review and retry after correction"
        ]
      ]
    },
    "checklist": [
      "Repeated fields and current owners are documented.",
      "Each shared field has one authoritative source.",
      "Records use stable identifiers.",
      "Retries do not create duplicate records.",
      "Failed transfers are visible and assigned.",
      "The pilot covers updates, conflicts, and missing data.",
      "Access is limited to the data the workflow needs."
    ],
    "measure": "Record time spent copying and checking data before and after the pilot, plus duplicate records and failed transfers. Recovered staff hours describe available capacity. Count cash savings separately, and only if an expense actually falls.",
    "faq": [
      {
        "q": "Is an integration always better than manual entry?",
        "a": "No. A low-volume task may not justify setup and maintenance. Compare the recurring effort and error risk with the cost of operating the connection."
      },
      {
        "q": "Which system should be the source of truth?",
        "a": "Choose it for each field based on where that information is created and maintained reliably. The same application does not have to own every field."
      }
    ],
    "relatedHref": "/field-notes",
    "relatedLabel": "Read the anonymized production-business finding",
    "updated": "2026-11-06"
  }
] as const;
