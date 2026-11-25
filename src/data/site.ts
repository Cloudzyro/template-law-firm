// Everything on the site comes from this file: the firm's details, practice
// areas, attorneys, sample results and offices. Change it here and the pages
// update on the next build.

export const site = {
  name: "Whitcombe & Vale",
  legalName: "Whitcombe & Vale LLP",
  tagline: "Trial and advisory counsel in Hartwell, Ohio",
  description:
    "Whitcombe & Vale is a twelve-lawyer firm in Hartwell, Ohio, representing families, employees and growing businesses in disputes, estates and transactions.",
  phone: "(555) 018-4400",
  email: "intake@whitcombevale.example",
  founded: 1987,
  // Shown in the footer. Many state bars require a notice like this on law firm sites.
  disclaimer:
    "Attorney advertising. The information on this website is general and is not legal advice. Contacting us does not create an attorney-client relationship, and you should not send confidential information until we have agreed to represent you.",
  social: [{ label: "LinkedIn", url: "https://www.linkedin.com/" }],
};

export const home = {
  kicker: "Attorneys in Hartwell, Ohio, since 1987",
  heroTitle: "Steady counsel for the moments that decide what comes next",
  heroText:
    "For almost forty years we have represented people and companies across northeast Ohio in courtrooms, conference rooms and kitchen-table conversations. You speak with a lawyer on the first call.",
  primaryCta: "Request a consultation",
  secondaryCta: "Meet the attorneys",
  facts: [
    { figure: "1987", label: "Founded on Court Street" },
    { figure: "12", label: "Attorneys, 7 partners" },
    { figure: "2", label: "Offices in Summit County" },
  ],
  approachTitle: "How we work with you",
  approach: [
    {
      title: "A lawyer on the first call",
      text: "Your first conversation is with an attorney, not a call center. We'll tell you plainly whether we can help and what it might cost.",
    },
    {
      title: "Fees in writing before work starts",
      text: "Hourly, flat or contingency, you'll have a signed engagement letter that says exactly how billing works.",
    },
    {
      title: "Updates you don't have to chase",
      text: "Every client gets a named attorney and a paralegal, and a written update at least every two weeks while the matter is active.",
    },
  ],
};

export type PracticeArea = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  matters: string[];
  questions: { q: string; a: string }[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "business-litigation",
    name: "Business litigation",
    summary: "Contract disputes, partner breakups and commercial claims in state and federal court.",
    intro:
      "When a deal goes wrong, the outcome often depends on what happens in the first few weeks. We move early to preserve records, assess exposure and look for a resolution before costs climb, and we try cases when settlement isn't the right answer.",
    matters: [
      "Breach of contract and warranty claims",
      "Disputes between business owners and partners",
      "Non-compete and trade secret cases",
      "Commercial lease disputes",
      "Collections and judgment enforcement",
    ],
    questions: [
      {
        q: "How long does a business lawsuit take?",
        a: "In Summit County Common Pleas, most commercial cases resolve within 12 to 20 months. Many settle sooner, often after the first round of document exchange.",
      },
      {
        q: "Will I have to testify?",
        a: "Owners and key employees are usually deposed. We prepare you in at least two sessions beforehand.",
      },
    ],
  },
  {
    slug: "estate-planning",
    name: "Estate planning and probate",
    summary: "Wills, trusts and powers of attorney, and guiding families through probate court.",
    intro:
      "A good plan is one your family can actually follow. We draft wills and trusts in plain language, review them with you line by line, and when the time comes we help executors and trustees through each step of the Ohio probate process.",
    matters: [
      "Wills, revocable trusts and pour-over wills",
      "Durable and health care powers of attorney",
      "Special needs and legacy trusts",
      "Probate and estate administration",
      "Will contests and fiduciary disputes",
    ],
    questions: [
      {
        q: "Do I need a trust or is a will enough?",
        a: "It depends on your property, your family and your privacy wishes. For many households a will and powers of attorney are enough; we'll say so when they are.",
      },
      {
        q: "What does an estate plan cost?",
        a: "Most individual and couple plans are quoted as a flat fee after the first meeting, so you know the cost before we begin drafting.",
      },
    ],
  },
  {
    slug: "employment-law",
    name: "Employment law",
    summary: "Representing employees in wrongful termination, discrimination and wage cases.",
    intro:
      "Losing a job or facing unfair treatment at work is personal. We listen first, look at the documents you have, and give you an honest view of your options, from negotiating severance to filing a charge or a lawsuit.",
    matters: [
      "Wrongful termination and retaliation",
      "Discrimination and harassment",
      "Unpaid wages and overtime",
      "Severance agreement review",
      "Family and medical leave disputes",
    ],
    questions: [
      {
        q: "Is there a deadline to bring a claim?",
        a: "Yes, and some are short. A discrimination charge with the EEOC generally must be filed within 300 days. Call us early so no deadline is missed.",
      },
      {
        q: "Do you take employment cases on contingency?",
        a: "Many of them. If we take your case on contingency, you pay attorney fees only if we recover money for you.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real estate",
    summary: "Purchases, sales, leases, boundary disputes and zoning for owners and investors.",
    intro:
      "From a first commercial lease to a contested easement, we handle the documents and the disputes that come with owning property. Our closings team works directly with lenders and title companies so the paperwork is ready on the day.",
    matters: [
      "Residential and commercial closings",
      "Commercial lease drafting and review",
      "Boundary, easement and title disputes",
      "Zoning variances and appeals",
      "Landlord and tenant matters",
    ],
    questions: [
      {
        q: "Do I need a lawyer to buy a house in Ohio?",
        a: "It isn't required, but a short review of the purchase contract and title commitment catches problems that are expensive to fix later.",
      },
    ],
  },
  {
    slug: "family-law",
    name: "Family law",
    summary: "Divorce, dissolution, custody and support, handled with discretion.",
    intro:
      "We help clients reach agreements where they can and stand firm in court where they must. Our family lawyers are trained mediators, and we always keep the children's routine in view.",
    matters: [
      "Divorce and dissolution",
      "Custody and parenting time",
      "Child and spousal support",
      "Prenuptial and postnuptial agreements",
      "Post-decree modifications",
    ],
    questions: [
      {
        q: "What's the difference between divorce and dissolution?",
        a: "In a dissolution, both spouses agree on every term before filing, and the court usually finalizes it in 30 to 90 days. A divorce is filed when there is no full agreement.",
      },
    ],
  },
  {
    slug: "personal-injury",
    name: "Personal injury",
    summary: "Serious injuries from vehicle crashes, unsafe property and defective products.",
    intro:
      "After a serious injury, we deal with the insurers so you can focus on getting better. We gather records, work with medical experts and value your claim carefully before any offer is accepted.",
    matters: [
      "Car, truck and motorcycle crashes",
      "Premises and slip and fall injuries",
      "Defective products",
      "Wrongful death",
    ],
    questions: [
      {
        q: "What does it cost to hire you for an injury case?",
        a: "Injury cases are handled on contingency. There's no fee unless we recover compensation, and the percentage is set out in writing at the start.",
      },
    ],
  },
];

export type Attorney = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  areas: string[]; // practice area slugs
  phone: string;
  email: string;
  summary: string;
  bio: string[];
  education: string[];
  admissions: string[];
  memberships: string[];
};

export const attorneys: Attorney[] = [
  {
    slug: "margaret-whitcombe",
    name: "Margaret Whitcombe",
    role: "Founding partner",
    initials: "MW",
    areas: ["business-litigation", "real-estate"],
    phone: "(555) 018-4411",
    email: "mwhitcombe@whitcombevale.example",
    summary: "Trial lawyer for closely held businesses for more than thirty-five years.",
    bio: [
      "Margaret founded the firm in 1987 after six years as an assistant county prosecutor. She has tried more than sixty cases to verdict, most of them commercial disputes between business owners who once trusted each other.",
      "Clients describe her as direct and unhurried. She is known for telling a client early when a case should settle, and for being ready to try it when it shouldn't.",
      "Outside the office she chairs the board of a regional land trust and teaches trial advocacy as an adjunct at a local law school.",
    ],
    education: ["J.D., Case Western Reserve University School of Law, 1981", "B.A., History, Oberlin College, 1978"],
    admissions: ["Ohio, 1981", "U.S. District Court, Northern District of Ohio", "U.S. Court of Appeals, Sixth Circuit"],
    memberships: ["Ohio State Bar Association", "Summit County Bar Association, past president"],
  },
  {
    slug: "daniel-vale",
    name: "Daniel Vale",
    role: "Partner",
    initials: "DV",
    areas: ["employment-law", "business-litigation"],
    phone: "(555) 018-4412",
    email: "dvale@whitcombevale.example",
    summary: "Represents employees in termination, discrimination and wage cases.",
    bio: [
      "Daniel joined Margaret in 1994 and leads the firm's employment practice. He represents employees, from hourly workers to senior executives, in claims against their employers, and negotiates severance for people leaving on their own terms.",
      "Before law school Daniel worked for four years in human resources at a regional manufacturer, which he says taught him how employers actually make decisions about people.",
    ],
    education: ["J.D., The Ohio State University Moritz College of Law, 1991", "B.S., Industrial Relations, Kent State University, 1985"],
    admissions: ["Ohio, 1991", "U.S. District Court, Northern District of Ohio"],
    memberships: ["National Employment Lawyers Association", "Ohio Employment Lawyers Association"],
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    role: "Partner",
    initials: "PR",
    areas: ["estate-planning"],
    phone: "(555) 018-4415",
    email: "praman@whitcombevale.example",
    summary: "Estate planning and probate, with a focus on families with special needs.",
    bio: [
      "Priya leads the estate planning group. She helps families put plans in place, and helps executors and trustees carry them out when the time comes.",
      "Much of her work involves families caring for a relative with a disability, where a careful trust can protect benefits for decades. She speaks often at parent groups and schools about planning ahead.",
    ],
    education: ["J.D., University of Akron School of Law, 2006", "B.A., Economics, Miami University, 2003"],
    admissions: ["Ohio, 2006"],
    memberships: ["Ohio State Bar Association, Estate Planning, Trust and Probate Law Section", "Special Needs Alliance, member"],
  },
  {
    slug: "thomas-okonjo",
    name: "Thomas Okonjo",
    role: "Partner",
    initials: "TO",
    areas: ["personal-injury"],
    phone: "(555) 018-4417",
    email: "tokonjo@whitcombevale.example",
    summary: "Personal injury and wrongful death cases on behalf of injured people.",
    bio: [
      "Thomas represents people seriously hurt in crashes and on unsafe property. He started his career defending insurance companies, and now uses what he learned there for injured clients.",
      "He keeps a small caseload on purpose, so each client has his direct number and hears from him personally.",
    ],
    education: ["J.D., University of Michigan Law School, 2009", "B.A., Political Science, Howard University, 2006"],
    admissions: ["Ohio, 2009", "Michigan, 2010"],
    memberships: ["Ohio Association for Justice"],
  },
  {
    slug: "ellen-brandt",
    name: "Ellen Brandt",
    role: "Senior associate",
    initials: "EB",
    areas: ["family-law"],
    phone: "(555) 018-4420",
    email: "ebrandt@whitcombevale.example",
    summary: "Divorce, custody and support, and a trained family mediator.",
    bio: [
      "Ellen handles divorce, dissolution and custody matters, and is a trained family mediator. She helps clients settle what can be settled and prepares carefully for the hearings that remain.",
    ],
    education: ["J.D., Cleveland State University College of Law, 2014", "B.A., Psychology, John Carroll University, 2011"],
    admissions: ["Ohio, 2014"],
    memberships: ["Summit County Bar Association, Family Law Committee"],
  },
  {
    slug: "marcus-hale",
    name: "Marcus Hale",
    role: "Associate",
    initials: "MH",
    areas: ["real-estate", "business-litigation"],
    phone: "(555) 018-4424",
    email: "mhale@whitcombevale.example",
    summary: "Commercial leases, closings and property disputes.",
    bio: [
      "Marcus works on commercial leases, closings and title disputes, and assists the litigation team on property cases. Before joining the firm he clerked for a judge of the Ninth District Court of Appeals.",
    ],
    education: ["J.D., University of Akron School of Law, 2019", "B.A., Urban Studies, Kenyon College, 2016"],
    admissions: ["Ohio, 2019"],
    memberships: ["Ohio State Bar Association, Real Property Section"],
  },
];

// These are SAMPLE results written for this template. Replace them with your
// own, and follow your state's rules on advertising past results.
export const results = {
  disclaimer:
    "These results are samples written for this template and do not describe real cases. Past results do not guarantee a similar outcome in any future matter. Every case is different and depends on its own facts and law.",
  items: [
    { figure: "$2,400,000", kind: "Jury verdict", area: "business-litigation", year: 2025, text: "Breach of a supply contract between two regional food distributors, tried over nine days." },
    { figure: "$1,150,000", kind: "Settlement", area: "personal-injury", year: 2025, text: "Truck crash on a state route that left a delivery driver unable to return to work." },
    { figure: "Dismissed", kind: "Defense ruling", area: "business-litigation", year: 2024, text: "Non-compete claim against a former sales manager dismissed before discovery." },
    { figure: "$640,000", kind: "Settlement", area: "employment-law", year: 2024, text: "Age discrimination claim by a plant supervisor with 27 years of service." },
    { figure: "Upheld", kind: "Appeal", area: "estate-planning", year: 2024, text: "Trust upheld against a will contest brought by two out-of-state relatives." },
    { figure: "$385,000", kind: "Settlement", area: "employment-law", year: 2023, text: "Unpaid overtime for 41 warehouse employees, resolved as a collective action." },
    { figure: "Granted", kind: "Zoning appeal", area: "real-estate", year: 2023, text: "Variance won on appeal for a family bakery expanding into the lot next door." },
    { figure: "$910,000", kind: "Settlement", area: "personal-injury", year: 2023, text: "Fall on an unlit stairway at a commercial property, causing a spinal injury." },
  ],
};

export const offices = [
  {
    name: "Hartwell",
    label: "Main office",
    street: "200 Court Street, Suite 400",
    city: "Hartwell",
    region: "OH",
    postal: "44302",
    phone: "(555) 018-4400",
    hours: [
      { days: "Monday to Thursday", time: "8:30am to 5:30pm" },
      { days: "Friday", time: "8:30am to 4:00pm" },
    ],
    parking: "Free client parking in the Court Street garage, level 2. Bring your ticket and we'll validate it.",
    access: "Step-free entrance on Market Lane, elevator to the fourth floor.",
    mapsUrl: "https://www.openstreetmap.org/search?query=200%20Court%20Street",
  },
  {
    name: "Cuyahoga Falls",
    label: "Branch office",
    street: "1740 Front Street",
    city: "Cuyahoga Falls",
    region: "OH",
    postal: "44221",
    phone: "(555) 018-4480",
    hours: [{ days: "Tuesday and Thursday", time: "9:00am to 5:00pm, by appointment" }],
    parking: "Street parking on Front Street and a free public lot behind the building.",
    access: "Ground floor, step-free from the rear lot.",
    mapsUrl: "https://www.openstreetmap.org/search?query=1740%20Front%20Street",
  },
];

export const consultation = {
  title: "Request a consultation",
  text: "Tell us briefly what's happening and how to reach you. An attorney reviews every request and we reply within one business day.",
  caution:
    "Please don't include confidential details yet. Until we've checked for conflicts and agreed to represent you, what you send isn't protected by attorney-client privilege.",
  afterTitle: "What happens next",
  after: [
    "We run a conflict check to make sure we can represent you.",
    "An attorney calls you to talk it through, usually within one business day.",
    "If we're a good fit, we send an engagement letter that sets out the fee before any work begins.",
  ],
};

export function areaName(slug: string) {
  return practiceAreas.find((a) => a.slug === slug)?.name ?? slug;
}

export function sectionNumber(slug: string) {
  return practiceAreas.findIndex((a) => a.slug === slug) + 1;
}
