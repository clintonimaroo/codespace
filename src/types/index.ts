export interface EventType {
  image: string;
  title: string;
  date: string;
  description: string;
  action_link: string;
  action_text: string;
  location?: string;
}

export interface StatType {
  name: string;
  value: number | string;
  suffix: string;
  description?: string;
}