export type Project = {
  id: string
  department: string
  title: string
  professor: string
  shortDescription: string
  longDescription: string
  keywords: string[]
}

export const projects: Project[] = [
  {
    id: 'bio-1',
    department: 'Biology',
    title: 'Project 1: Microbial Interactions',
    professor: 'Dr. Ada Flores',
    shortDescription: 'Explore how microbes collaborate inside the human gut.',
    longDescription:
      'This project combines wet lab techniques with computational modeling to understand how microbial species cooperate or compete in the gut microbiome. Students will work with sequencing data and bench experiments.',
    keywords: ['microbiome', 'sequencing', 'wet lab']
  },
  {
    id: 'bio-2',
    department: 'Biology',
    title: 'Project 2: Plant Resilience',
    professor: 'Dr. Malik Chen',
    shortDescription: 'Investigate how climate change impacts crop resilience.',
    longDescription:
      'Work with CRISPR-edited plants and remote sensing datasets to evaluate drought tolerance. Students will learn plant phenotyping and data visualization.',
    keywords: ['climate', 'CRISPR', 'remote sensing']
  },
  {
    id: 'cs-1',
    department: 'Computer Science',
    title: 'Project 1: Ethical AI Assistants',
    professor: 'Dr. Lyra Patel',
    shortDescription: 'Design conversational agents that align with ethical guardrails.',
    longDescription:
      'Collaborate with a cross-disciplinary team to define fairness metrics and evaluate LLM prompts. Expect to build TypeScript tooling and run user studies.',
    keywords: ['AI', 'ethics', 'LLM']
  },
  {
    id: 'cs-2',
    department: 'Computer Science',
    title: 'Project 2: Health Wearables',
    professor: 'Dr. Noor Reyes',
    shortDescription: 'Prototype algorithms for heart-rate variability insights.',
    longDescription:
      'Apply signal processing and on-device ML to detect patterns that indicate stress in athletes. Includes opportunities to publish in ubiquitous computing venues.',
    keywords: ['wearables', 'signal processing', 'ML']
  },
  {
    id: 'phy-1',
    department: 'Physics',
    title: 'Project 1: Quantum Sensors',
    professor: 'Dr. Rowan Ellis',
    shortDescription: 'Build sensors capable of detecting subtle gravitational waves.',
    longDescription:
      'Students will machine prototype components, simulate sensor behavior, and collaborate with NASA partners on testing campaigns.',
    keywords: ['quantum', 'sensors', 'simulation']
  }
]
