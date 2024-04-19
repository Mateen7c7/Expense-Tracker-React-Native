import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesCtx = useExpensesContext();

  if (expensesCtx.expenses.length === 0) {
    return <Text>No expenses found</Text>;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
    // return expense.date >= date7DaysAgo;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="No expenses registered for the last 7 days" />
  );
}

export default RecentExpenses;
