export interface FundMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface LoanCriterion {
  title: string;
  value: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface PerformanceRow {
  year: string;
  type: 'Gross' | 'Net';
  months: (string | null)[]; // Jan - Dec
  total: string;
}