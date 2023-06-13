export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  description: string[];
  skills?: string[];
}

export interface Skills {
  [key: string]: string[];
}
