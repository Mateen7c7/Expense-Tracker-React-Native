import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useExpensesContext();
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No registered expenses found" />
  );
}

export default AllExpenses;
