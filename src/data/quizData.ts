export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  questionCount: number;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}

export const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Algebra, Geometry, Calculus & more",
    icon: "Calculator",
    color: "primary",
    topics: [
      {
        id: "algebra",
        name: "Algebra",
        icon: "Variable",
        questionCount: 5,
        questions: [
          { id: "alg1", question: "Solve for x: 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 8"], correctAnswer: 1, explanation: "2x + 6 = 14 → 2x = 8 → x = 4" },
          { id: "alg2", question: "What is the value of x² when x = -3?", options: ["−9", "9", "6", "−6"], correctAnswer: 1, explanation: "(−3)² = (−3)(−3) = 9" },
          { id: "alg3", question: "Simplify: 3(2x − 4) + 5", options: ["6x − 7", "6x − 12", "6x + 1", "5x − 7"], correctAnswer: 0, explanation: "3(2x−4)+5 = 6x−12+5 = 6x−7" },
          { id: "alg4", question: "If f(x) = x² + 2x, what is f(3)?", options: ["9", "12", "15", "18"], correctAnswer: 2, explanation: "f(3) = 9 + 6 = 15" },
          { id: "alg5", question: "Factor: x² − 9", options: ["(x−3)(x+3)", "(x−9)(x+1)", "(x−3)²", "(x+3)²"], correctAnswer: 0, explanation: "Difference of squares: a²−b² = (a−b)(a+b)" },
        ],
      },
      {
        id: "geometry",
        name: "Geometry",
        icon: "Triangle",
        questionCount: 5,
        questions: [
          { id: "geo1", question: "What is the area of a circle with radius 7? (use π ≈ 22/7)", options: ["154", "44", "148", "156"], correctAnswer: 0, explanation: "A = πr² = (22/7)×49 = 154" },
          { id: "geo2", question: "Sum of interior angles of a hexagon?", options: ["540°", "720°", "360°", "900°"], correctAnswer: 1, explanation: "(6−2)×180 = 720°" },
          { id: "geo3", question: "What is the Pythagorean theorem?", options: ["a²+b²=c²", "a+b=c", "a²−b²=c²", "2a+2b=c"], correctAnswer: 0, explanation: "In a right triangle, the sum of squares of legs equals the square of the hypotenuse." },
          { id: "geo4", question: "A rectangle has length 12 and width 5. What is its perimeter?", options: ["34", "60", "17", "24"], correctAnswer: 0, explanation: "P = 2(l+w) = 2(12+5) = 34" },
          { id: "geo5", question: "What is the volume of a cube with side 4?", options: ["16", "48", "64", "12"], correctAnswer: 2, explanation: "V = s³ = 4³ = 64" },
        ],
      },
    ],
  },
  {
    id: "science",
    name: "Science",
    description: "Physics, Chemistry, Biology",
    icon: "Atom",
    color: "secondary",
    topics: [
      {
        id: "physics",
        name: "Physics",
        icon: "Zap",
        questionCount: 5,
        questions: [
          { id: "phy1", question: "What is Newton's second law of motion?", options: ["F = ma", "E = mc²", "V = IR", "P = mv"], correctAnswer: 0, explanation: "Force equals mass times acceleration." },
          { id: "phy2", question: "What is the SI unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], correctAnswer: 2, explanation: "The ampere (A) is the SI unit of electric current." },
          { id: "phy3", question: "What is the speed of light in vacuum (approx)?", options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁵ m/s"], correctAnswer: 0, explanation: "Speed of light ≈ 3 × 10⁸ m/s" },
          { id: "phy4", question: "Which type of energy does a moving car have?", options: ["Potential", "Kinetic", "Thermal", "Nuclear"], correctAnswer: 1, explanation: "A moving object possesses kinetic energy." },
          { id: "phy5", question: "What does an ammeter measure?", options: ["Voltage", "Resistance", "Current", "Power"], correctAnswer: 2, explanation: "An ammeter measures electric current in amperes." },
        ],
      },
      {
        id: "chemistry",
        name: "Chemistry",
        icon: "FlaskConical",
        questionCount: 5,
        questions: [
          { id: "chem1", question: "What is the chemical formula for water?", options: ["H₂O", "CO₂", "NaCl", "O₂"], correctAnswer: 0, explanation: "Water is composed of two hydrogen atoms and one oxygen atom." },
          { id: "chem2", question: "What is the pH of a neutral solution?", options: ["0", "7", "14", "1"], correctAnswer: 1, explanation: "A neutral solution has a pH of 7." },
          { id: "chem3", question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correctAnswer: 2, explanation: "Nitrogen makes up about 78% of the atmosphere." },
          { id: "chem4", question: "What is the atomic number of Carbon?", options: ["12", "6", "8", "14"], correctAnswer: 1, explanation: "Carbon has 6 protons, so its atomic number is 6." },
          { id: "chem5", question: "What type of bond forms between Na and Cl?", options: ["Covalent", "Ionic", "Metallic", "Hydrogen"], correctAnswer: 1, explanation: "NaCl is formed by ionic bonding — transfer of electrons." },
        ],
      },
    ],
  },
  {
    id: "english",
    name: "English",
    description: "Grammar, Vocabulary, Comprehension",
    icon: "BookOpen",
    color: "primary",
    topics: [
      {
        id: "grammar",
        name: "Grammar",
        icon: "PenTool",
        questionCount: 5,
        questions: [
          { id: "eng1", question: "Which sentence is correct?", options: ["She don't like it.", "She doesn't like it.", "She not like it.", "She no like it."], correctAnswer: 1, explanation: "Third person singular uses 'doesn't'." },
          { id: "eng2", question: "Identify the adjective: 'The tall boy ran fast.'", options: ["boy", "ran", "tall", "fast"], correctAnswer: 2, explanation: "'Tall' describes the noun 'boy', making it an adjective." },
          { id: "eng3", question: "What is the past tense of 'go'?", options: ["Goed", "Gone", "Went", "Going"], correctAnswer: 2, explanation: "'Went' is the irregular past tense of 'go'." },
          { id: "eng4", question: "Which is a compound sentence?", options: ["I like tea.", "I like tea, but she likes coffee.", "Running fast.", "The big red ball."], correctAnswer: 1, explanation: "A compound sentence joins two independent clauses with a conjunction." },
          { id: "eng5", question: "What type of noun is 'happiness'?", options: ["Proper", "Common", "Abstract", "Collective"], correctAnswer: 2, explanation: "'Happiness' is an abstract noun — it represents an idea, not a physical thing." },
        ],
      },
    ],
  },
  {
    id: "computer-science",
    name: "Computer Science",
    description: "Programming, Data Structures, Algorithms",
    icon: "Monitor",
    color: "secondary",
    topics: [
      {
        id: "programming-basics",
        name: "Programming Basics",
        icon: "Code",
        questionCount: 5,
        questions: [
          { id: "cs1", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correctAnswer: 0, explanation: "HTML = HyperText Markup Language" },
          { id: "cs2", question: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], correctAnswer: 1, explanation: "Queue follows First-In-First-Out (FIFO) principle." },
          { id: "cs3", question: "What is the time complexity of binary search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correctAnswer: 2, explanation: "Binary search halves the search space each step → O(log n)." },
          { id: "cs4", question: "Which language is primarily used for iOS development?", options: ["Java", "Python", "Swift", "C++"], correctAnswer: 2, explanation: "Swift is Apple's language for iOS/macOS development." },
          { id: "cs5", question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], correctAnswer: 1, explanation: "CSS = Cascading Style Sheets" },
        ],
      },
      {
        id: "data-structures",
        name: "Data Structures",
        icon: "Database",
        questionCount: 5,
        questions: [
          { id: "ds1", question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Linked List"], correctAnswer: 1, explanation: "Stack follows Last-In-First-Out (LIFO) principle." },
          { id: "ds2", question: "What is the maximum number of children a binary tree node can have?", options: ["1", "2", "3", "Unlimited"], correctAnswer: 1, explanation: "A binary tree node can have at most 2 children." },
          { id: "ds3", question: "Which is NOT a linear data structure?", options: ["Array", "Stack", "Queue", "Tree"], correctAnswer: 3, explanation: "A tree is a non-linear/hierarchical data structure." },
          { id: "ds4", question: "What is a hash table's average lookup time?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correctAnswer: 2, explanation: "Hash tables provide O(1) average-case lookup using hash functions." },
          { id: "ds5", question: "What traversal visits root first, then left, then right?", options: ["Inorder", "Preorder", "Postorder", "Level-order"], correctAnswer: 1, explanation: "Preorder: Root → Left → Right" },
        ],
      },
    ],
  },
];

// --- Local storage helpers ---

export interface QuizResult {
  subjectId: string;
  topicId: string;
  score: number;
  total: number;
  date: string; // ISO string
}

export interface UserProgress {
  streakDays: number;
  lastActiveDate: string;
  totalQuizzes: number;
  totalCorrect: number;
  totalQuestions: number;
  results: QuizResult[];
}

const STORAGE_KEY = "eduai_progress";

export function getProgress(): UserProgress {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      // corrupted, reset
    }
  }
  return { streakDays: 0, lastActiveDate: "", totalQuizzes: 0, totalCorrect: 0, totalQuestions: 0, results: [] };
}

export function saveQuizResult(result: QuizResult) {
  const progress = getProgress();
  const today = new Date().toISOString().split("T")[0];
  
  // Update streak
  if (progress.lastActiveDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().split("T")[0];
    
    if (progress.lastActiveDate === yStr) {
      progress.streakDays += 1;
    } else if (progress.lastActiveDate !== today) {
      progress.streakDays = 1;
    }
    progress.lastActiveDate = today;
  }

  progress.totalQuizzes += 1;
  progress.totalCorrect += result.score;
  progress.totalQuestions += result.total;
  progress.results.push(result);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  return progress;
}

export function getSubjectPerformance(results: QuizResult[]) {
  const map: Record<string, { correct: number; total: number; count: number }> = {};
  for (const r of results) {
    if (!map[r.subjectId]) map[r.subjectId] = { correct: 0, total: 0, count: 0 };
    map[r.subjectId].correct += r.score;
    map[r.subjectId].total += r.total;
    map[r.subjectId].count += 1;
  }
  return map;
}
