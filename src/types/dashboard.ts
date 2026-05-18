export type StatItem = {
  label: string;
  value: string;
  change: string;
  color: string;
};

export type SalesPoint = {
  month: string;
  sales: number;
  purchases: number;
};

export type TableRow = {
  id: string;
  [key: string]: string | number | boolean | null | undefined;
};