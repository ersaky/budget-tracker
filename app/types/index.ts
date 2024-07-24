interface Balance{
  balance?: number;
  error?: string;
}

interface Transaction {
  id: string;
  text: string;
  amount: number;
  userId: string | null;
  created_at: Date;
}

interface Delete{
  message?: string;
  error?: string;
}

interface IncomeExpense{
  income?: number;
  expense?: number;
  error?: string;
}

interface TransactionList {
  transactions?: Transaction[];
  error?: string;
}

export type{
  Balance, Transaction, Delete, IncomeExpense, TransactionList
}
