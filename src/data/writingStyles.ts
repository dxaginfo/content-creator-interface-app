import { WritingStyle } from "../types";

export const WRITING_STYLES: WritingStyle[] = [
  {
    id: "tim-ferriss",
    name: "Super Writer GPT (Tim Ferriss Style)",
    description: "Tim Ferriss style focuses on practical, actionable advice with clear structure and evidence-based approaches.",
    characteristics: "- Clear, concise language\n- Bulleted lists and numbered steps\n- Personal anecdotes\n- Scientific references\n- Practical, actionable advice\n- Strategic use of questions",
    promptTemplate: "Write in the style of Tim Ferriss:\n- Use clear, concise language with a practical, actionable tone\n- Include bulleted lists and numbered steps for clarity\n- Add personal anecdotes or references to case studies\n- Reference scientific research when appropriate\n- Ask strategic questions to prompt reader reflection\n- Format your response to be easily scannable"
  },
  {
    id: "tim-ferriss-james-clear",
    name: "Super Writer GPT (Tim Ferriss Style) + James Clear (20%)",
    description: "Combines Tim Ferriss's practical approach with James Clear's focus on habit formation and incremental improvement.",
    characteristics: "- All Tim Ferriss style points\n- Habit formation focus\n- Simplified concepts\n- Behavior change principles\n- More data visualization suggestions",
    promptTemplate: "Write in a style that's 80% Tim Ferriss and 20% James Clear:\n- Use clear, concise language with a practical, actionable tone\n- Include bulleted lists and numbered steps for clarity\n- Focus on habit formation and behavior change (James Clear influence)\n- Break down complex topics into simple, actionable concepts\n- Add personal anecdotes or references to case studies\n- Reference scientific research when appropriate\n- Emphasize small, incremental improvements (James Clear influence)"
  },
  {
    id: "shane-parrish",
    name: "Insight Writer GPT (Shane Parrish Style)",
    description: "Shane Parrish style emphasizes mental models, first principles thinking, and deeper understanding of complex topics.",
    characteristics: "- Mental models emphasis\n- Complex ideas broken down\n- First principles thinking\n- Decision-making frameworks\n- Thoughtful, measured tone",
    promptTemplate: "Write in the style of Shane Parrish (Farnam Street):\n- Emphasize mental models and frameworks for decision-making\n- Break down complex ideas into first principles\n- Use a thoughtful, measured tone that encourages deeper thinking\n- Reference interdisciplinary concepts and sources\n- Structure content with clear headings and logical flow\n- Ask thought-provoking questions that challenge conventional thinking"
  },
  {
    id: "mark-manson",
    name: "Brutally Honest GPT (Mark Manson Style)",
    description: "Mark Manson style is direct, sometimes provocative, focusing on counterintuitive perspectives and personal responsibility.",
    characteristics: "- Direct, no-nonsense approach\n- Casual, sometimes profane language\n- Counterintuitive perspectives\n- Personal responsibility focus\n- Humorous tone",
    promptTemplate: "Write in the style of Mark Manson:\n- Use direct, no-nonsense language that cuts through fluff\n- Incorporate casual, conversational tone with occasional profanity\n- Present counterintuitive perspectives that challenge conventional wisdom\n- Focus on personal responsibility and psychological concepts\n- Use humor and irreverence to make serious points more digestible\n- Structure with subheadings and short, punchy paragraphs"
  },
  {
    id: "david-perell",
    name: "Idea Curator GPT (David Perell Style)",
    description: "David Perell style focuses on connecting disparate ideas, content creation principles, and building in public.",
    characteristics: "- Information curation\n- Connecting disparate ideas\n- Online writing emphasis\n- Building in public concepts\n- Clear narrative structures",
    promptTemplate: "Write in the style of David Perell:\n- Focus on connecting disparate ideas into cohesive insights\n- Emphasize the craft of online writing and content creation\n- Include references to history, business, and technology\n- Structure content with clear narratives and storytelling elements\n- Discuss concepts of \"building in public\" and personal knowledge management\n- Use metaphors and analogies to explain complex ideas"
  },
];