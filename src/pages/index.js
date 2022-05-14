/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import ApprenticeshipLayout from "../layout/apprenticeshipLayout";

// data
const data = {
  scholarship: {
    name: "Interaction Design Apprenticeship",
    description:
      "Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.",
    program: "id",
    location: {
      id: 1,
      name: "Barcelona",
      longitude: 2.154007,
      latitude: 41.390205,
      description: "Motherland of Harbour.space",
      country_id: 198,
    },
    scholarship_start_date: "2020-06-30 00:00:00",
    scholarship_end_date: "2020-18-03 00:00:00",
    application_end_date: "2020-03-30 00:00:00",
    duration: 1,
    duration_text:
      "You&apos;ll be guaranteed a 1 year contract with SCG upon graduation.",
    position: "Marketing Performance",
    about:
      "Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master&apos;s degree alongside an apprenticeship and a guaranteed job upon graduation.",
    tuition: 20900,
    total_value: 31300,
    stipend_per_month: 700,
    stipend_per_year: 8400,
    remaining: 2000,
    study_commitment: 3,
    internship_commitment: 4,
    study_commitment_text:
      "You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.",
    internship_commitment_text:
      "Immerse yourself in the professional world during your apprenticeship. You&apos;ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.",
    company: {
      id: 45,
      name: "Zeptolab",
      color_logo:
        "https://www.zeptolab.com/assets/zeptolab_logo-84b822b78edfed95ac0d9391449b8b4c5a9b2de7ffe3ce35abca8917b3c3aeee.svg",
    },
    quotes: {
      items: [
        {
          author: "Irene Perenya",
          cohort: "Interaction Design Fellow '19",
          education: "B.A. Visual Design",
          small_picture: "",
          quote:
            "This Fellowship was a turning point in my career. I wouldn&apos;t be where I am today without the financial support and experienced offered through the program.",
          social_links: [
            {
              type: "linkedin",
              url: "",
            },
          ],
        },
        {
          author: "Irene Perenya",
          cohort: "Interaction Design Fellow '19",
          education: "B.A. Visual Design",
          small_picture: "",
          quote:
            "This Fellowship was a turning point in my career. I wouldn&apos;t be where I am today without the financial support and experienced offered through the program.",
          social_links: [
            {
              type: "linkedin",
              url: "",
            },
          ],
        },
        {
          author: "Irene Perenya",
          cohort: "Interaction Design Fellow '19",
          education: "B.A. Visual Design",
          small_picture: "",
          quote:
            "This Fellowship was a turning point in my career. I wouldn&apos;t be where I am today without the financial support and experienced offered through the program.",
          social_links: [
            {
              type: "linkedin",
              url: "",
            },
          ],
        },
      ],
    },
    faqs: {
      items: [
        {
          type: "Program Conditions",
          question: "What are my obligations?",
          answer: [
            {
              type: "paragraph",
              data: "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes.",
            },
            {
              type: "paragraph",
              data: "Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities.",
            },
            {
              type: "paragraph",
              data: "We offer our students paid internships options during studies jointly with our industrial partners.",
            },
            {
              type: "paragraph",
              data: "Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.",
            },
          ],
        },
        {
          type: "Program Conditions",
          question: "What are my obligations?",
          answer: [
            {
              type: "paragraph",
              data: "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes.",
            },
            {
              type: "paragraph",
              data: "Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities.",
            },
            {
              type: "paragraph",
              data: "We offer our students paid internships options during studies jointly with our industrial partners.",
            },
            {
              type: "paragraph",
              data: "Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.",
            },
          ],
        },
        {
          type: "Program Conditions",
          question: "What are my obligations?",
          answer: [
            {
              type: "paragraph",
              data: "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes.",
            },
            {
              type: "paragraph",
              data: "Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities.",
            },
            {
              type: "paragraph",
              data: "We offer our students paid internships options during studies jointly with our industrial partners.",
            },
            {
              type: "paragraph",
              data: "Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.",
            },
          ],
        },
        {
          type: "Program Conditions",
          question: "What are my obligations?",
          answer: [
            {
              type: "paragraph",
              data: "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes.",
            },
            {
              type: "paragraph",
              data: "Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities.",
            },
            {
              type: "paragraph",
              data: "We offer our students paid internships options during studies jointly with our industrial partners.",
            },
            {
              type: "paragraph",
              data: "Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.",
            },
          ],
        },
      ],
    },
  },
};

// markup
const IndexPage = () => {
  return (
    <ApprenticeshipLayout>
      <div
        sx={{
          my: ["8em", null, null, "12.5em", null],
        }}
      >
        <section>content</section>

        <section>content</section>
      </div>
    </ApprenticeshipLayout>
  );
};

export default IndexPage;
