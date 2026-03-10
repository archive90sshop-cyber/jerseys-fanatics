export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown formatted content
  author: string;
  date: string;
  imageUrl: string;
  category: 'Review' | 'History' | 'Launch' | 'Concept' | 'Performance';
  readTime: string;
}

export interface GeneratorState {
  isLoading: boolean;
  error: string | null;
}