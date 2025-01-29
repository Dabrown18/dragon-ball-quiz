
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "What is the name of Goku's brother?",
    options: ['Broly', 'Cynthia', 'Raditz', 'Goten'],
    correctAnswer: 'Raditz',
  },
  {
    question: 'What novel inspired Dragon Ball?',
    options: ['Flash Gordan', 'Journey to the West', 'Lord of the Rings', 'Star Trek'],
    correctAnswer: 'Journey to the West',
  },
  {
    question: 'Who is the strongest in the Dragon Ball Universe?',
    options: ['Zeno', 'Goku', 'Beerus', 'Vegeta'],
    correctAnswer: 'Zeno',
  },
  {
    question: 'Who does Captain Ginyu serve?',
    options: ['Frieza', 'Lord Slug', 'Cell', 'Turles'],
    correctAnswer: 'Frieza',
  },
  {
    question: 'How old is Mahin Buu?',
    options: ['10 million years old', '5 million years old', '1 million years old', 'No one knows'],
    correctAnswer: '5 million years old',
  },
];

export default questions;
