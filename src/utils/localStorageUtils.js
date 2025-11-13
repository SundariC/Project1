const EXPENSE_KEY = "expenses";
const INCOME_KEY = "income";

export const getExpenses = () =>
  JSON.parse(localStorage.getItem(EXPENSE_KEY)) || [];
export const getIncome = () =>
  JSON.parse(localStorage.getItem(INCOME_KEY)) || [];

export const saveExpense = (expense) => {
  const data = getExpenses();
  localStorage.setItem(EXPENSE_KEY, JSON.stringify([...data, expense]));
};

export const saveIncome = (income) => {
  const data = getIncome();
  localStorage.setItem(INCOME_KEY, JSON.stringify([...data, income]));
};

export const deleteExpense = (id) => {
  const data = getExpenses().filter((e) => e.id !== id);
  localStorage.setItem(EXPENSE_KEY, JSON.stringify(data));
};

export const deleteIncome = (id) => {
  const data = getIncome().filter((e) => e.id !== id);
  localStorage.setItem(INCOME_KEY, JSON.stringify(data));
};

export const updateExpense = (updated) => {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const newList = expenses.map((e) =>
    e.id === updated.id ? updated : e
  );
  localStorage.setItem("expenses", JSON.stringify(newList));
};