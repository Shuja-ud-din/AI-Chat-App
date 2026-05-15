export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface StaticChat {
  id: string;
  title: string;
  preview: string;
  messages: ChatMessage[];
}

export const staticChats: StaticChat[] = [
  {
    id: "chat-okr-q3-2024",
    title: "Q3 2024 OKR Review",
    preview: "Q3 OKR progress and key results",
    messages: [
      {
        role: "user",
        content: "Can you show me my OKR progress for Q3 2024?",
      },
      {
        role: "assistant",
        content: `Based on the **Aramco Knowledge Base**, here's your Q3 2024 OKR summary:

---

### Objective 1: Enhance Digital Transformation

| Key Result | Target | Progress | Status |
|---|---|---|---|
| Deploy AI tools across 5 departments | 5 depts | 4/5 | ✅ 80% |
| Reduce manual processing time | 30% reduction | 45% achieved | 🟡 On Track |
| Train employees on new platforms | 200 employees | 170/200 | 🟡 85% |

### Objective 2: Operational Excellence

| Key Result | Target | Progress | Status |
|---|---|---|---|
| System uptime | 99.5% | 99.3% | 🟡 Near Target |
| Reduce incident response time | 20% faster | 25% faster | ✅ Exceeded |

---

**Overall Q3 Progress: 72%** — on track for year-end targets.

Would you like a detailed breakdown of any specific objective?`,
      },
      {
        role: "user",
        content: "What about the training completion rate by department?",
      },
      {
        role: "assistant",
        content: `Here are the detailed training completion statistics for **Q3 2024**:

| Department | Enrolled | Completed | Rate |
|---|---|---|---|
| IT & Digital | 45 | 45 | **100%** ✅ |
| Finance | 40 | 38 | **95%** ✅ |
| Operations | 60 | 52 | **87%** 🟡 |
| HR | 30 | 25 | **83%** 🟡 |
| Procurement | 25 | 10 | **40%** 🔴 |

> ⚠️ The **Procurement department** is significantly behind target.

**Recommended action:** Schedule intensive sessions in October to close the gap before the Q4 review deadline.`,
      },
    ],
  },
  {
    id: "chat-leave-2023",
    title: "Leave Balance 2023",
    preview: "Annual leave records and remaining balance",
    messages: [
      {
        role: "user",
        content: "What is my current leave balance for 2023?",
      },
      {
        role: "assistant",
        content: `Here's your **leave balance summary** for 2023:

### Annual Leave
| Item | Days |
|---|---|
| Entitled | 30 |
| Taken | 18 |
| **Remaining** | **12** |
| Carry-forward limit | 10 *(expires Dec 31)* |

### Sick Leave
| Item | Days |
|---|---|
| Entitled | 20 |
| Taken | 3 |
| Remaining | 17 |

### Emergency Leave
| Item | Days |
|---|---|
| Entitled | 5 |
| Taken | 0 |
| Remaining | 5 |

> ⚠️ You have **12 annual leave days** remaining — **2 days will be forfeited** if not used by December 31, 2023.

Would you like to submit a leave request?`,
      },
      {
        role: "user",
        content: "How do I apply for annual leave through the portal?",
      },
      {
        role: "assistant",
        content: `To apply for leave through the **Aramco HR Portal**:

1. Login to the Employee Self-Service portal at \`hr.aramco.com\`
2. Navigate to **Leave Management → New Request**
3. Select **Leave Type**: Annual, Sick, or Emergency
4. Choose your **start and end dates**
5. Add a reason or note *(optional for annual leave)*
6. Submit for **manager approval**

---

### Processing Times

- **Annual leave** — requires 3 business days advance notice
- **Emergency leave** — can be backdated with supporting documentation

### Manager Approval

Your line manager will receive an automated notification. Expect a decision within **24–48 hours**.`,
      },
    ],
  },
  {
    id: "chat-ip-documents",
    title: "Intellectual Property Docs",
    preview: "IP agreement templates and key clauses",
    messages: [
      {
        role: "user",
        content: "I need to find the intellectual property agreement template.",
      },
      {
        role: "assistant",
        content: `I found the following **IP documents** in the Aramco Knowledge Base:

| # | Document | Updated | Notes |
|---|---|---|---|
| 1 | Employee IP Assignment Agreement | Sep 2023 | For full-time employees |
| 2 | Contractor IP Agreement | Aug 2023 | Includes confidentiality clauses |
| 3 | Joint Venture IP Framework | Jun 2023 | Requires Legal sign-off |
| 4 | Innovation Disclosure Form | Oct 2023 | For IP Committee submissions |

Which document would you like to access? I can also **summarize the key clauses** of any of these.`,
      },
      {
        role: "user",
        content:
          "Summarize the key clauses of the Employee IP Assignment Agreement.",
      },
      {
        role: "assistant",
        content: `Here's a summary of key clauses in the **Employee IP Assignment Agreement**:

### Clause 3 — Assignment of Rights
All inventions, discoveries, and creative works made during employment — or using Aramco resources — are **automatically assigned to Saudi Aramco**.

### Clause 4 — Prior Inventions
Employees must **disclose any pre-existing IP** at the time of signing to avoid future disputes.

### Clause 5 — Confidentiality Obligations
Proprietary information must be kept confidential:
- **During** employment
- For **5 years after** employment ends

### Clause 7 — Publication Rights
Any publication or presentation of work-related research requires **prior written approval** from the Legal department.

### Clause 9 — Moral Rights Waiver
Employees waive moral rights over assigned IP to the fullest extent permitted by **Saudi law**.

### Clause 12 — Dispute Resolution
Governed by **Saudi Arabian law**, resolved through Aramco's internal arbitration process.

---

> 📌 **Recommendation:** Have your direct manager and HR Business Partner co-sign before submitting to the Legal department.`,
      },
    ],
  },
  {
    id: "chat-safety-hse",
    title: "HSE Confined Space Protocol",
    preview: "Health, Safety & Environment standards",
    messages: [
      {
        role: "user",
        content:
          "What are the updated HSE protocols for confined space entry?",
      },
      {
        role: "assistant",
        content: `Here are the current **HSE Confined Space Entry Protocols** *(GI-0002.102, updated March 2024)*:

---

### Pre-Entry Requirements

- ✅ Valid **Confined Space Entry Permit (CSEP)** signed by Area Authority
- ✅ Atmospheric testing:
  - O₂ between **19.5% – 23.5%**
  - LEL **< 10%**
  - H₂S **< 10 ppm**
  - CO **< 35 ppm**
- ✅ Minimum **2-person team**: 1 entrant + 1 standby attendant
- ✅ Rescue equipment staged at entry point

### Required PPE

- Full-body harness with lifeline
- **SCBA** if atmosphere is classified as IDLH
- Intrinsically safe lighting and communication devices

### During Entry

- Continuous atmospheric monitoring **every 15 minutes**
- Standby attendant must maintain visual or voice contact at all times
- No hot work permitted without an additional **Hot Work Permit**

### Emergency Procedures

> 🚨 **Do NOT enter to rescue** — use the retrieval system.

- Emergency response: \`+966-13-872-0911\`
- Preserve the scene for incident investigation

---

Would you like the **full GI document** or the **CSEP permit template**?`,
      },
    ],
  },
  {
    id: "chat-energy-transition",
    title: "Energy Transition 2030",
    preview: "Global energy outlook and green hydrogen",
    messages: [
      {
        role: "user",
        content:
          "What is the global outlook for the energy transition by 2030?",
      },
      {
        role: "assistant",
        content: `Based on **World Knowledge** sources *(IEA World Energy Outlook 2024, BloombergNEF)*:

---

### Renewable Energy Growth

| Source | Current Capacity | 2030 Projection |
|---|---|---|
| Solar PV | ~1,800 GW | **~5,500 GW** |
| Wind (all) | ~950 GW | **~2,500 GW** |
| Renewables share | 30% of electricity | **40% of electricity** |

### Oil & Gas Demand

- Liquid fuels demand **peaks around 2028** in the Stated Policies Scenario
- Natural gas remains critical as an **industrial and transition fuel**
- LNG trade volume projected to grow **20% by 2030**

### Key Challenges

1. **Grid infrastructure** — $21 trillion investment needed through 2030
2. **Critical minerals** supply chain: lithium, cobalt, nickel
3. **Permitting delays** in major Western markets
4. **Energy access** in developing nations remains a structural gap

### Saudi Arabia's Vision 2030 Alignment

- **50% renewable electricity** target by 2030
- NEOM green hydrogen project: **4 GW electrolyzer capacity**
- Aramco's **net-zero** Scope 1 & 2 emissions target by 2050

---

Would you like a deeper dive into any of these areas?`,
      },
      {
        role: "user",
        content: "Tell me more about the NEOM green hydrogen project.",
      },
      {
        role: "assistant",
        content: `Here's a detailed overview of the **NEOM Green Hydrogen Project**:

---

### Project Overview

| Detail | Info |
|---|---|
| **Investment** | $8.4 billion |
| **Partners** | ACWA Power, Air Products, NEOM |
| **Location** | OXAGON industrial city, Red Sea |
| **Output** | 600 tonnes/day of green ammonia |
| **First delivery** | 2026 |
| **Export markets** | Europe & Asia |

### Technology Stack

\`\`\`
Renewable Generation → Electrolysis → Ammonia Synthesis → Export
  4 GW wind/solar     Thyssenkrupp   Haber-Bosch process  Air Products
                      alkaline (2.2GW)
\`\`\`

### Cost Trajectory

| Year | Green H₂ Cost |
|---|---|
| Today | $4–6 / kg |
| **2030 target** | **$1.5–2 / kg** |

> Key enabler: electrolyzer manufacturing costs falling **~70% by 2030**

### Why Saudi Arabia?

- Exceptional solar irradiance: **2,400+ kWh/m²/year**
- Existing Red Sea **export infrastructure**
- Positions the Kingdom as a **top global green hydrogen exporter**

This project demonstrates how hydrocarbon-rich nations can **lead** the energy transition rather than be left behind by it.`,
      },
    ],
  },
];

export function getChatById(id: string): StaticChat | undefined {
  return staticChats.find((c) => c.id === id);
}
