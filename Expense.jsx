import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  
  const filteredExpenses = expenses.filter((expense) =>
    (expense.description?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (expense.name?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  
  const getSortedExpenses = () => {
    if (!sortBy) return filteredExpenses;

    return [...filteredExpenses].sort((a, b) => {
      const valA = sortBy === "date" ? new Date(a[sortBy]) : a[sortBy];
      const valB = sortBy === "date" ? new Date(b[sortBy]) : b[sortBy];

      if (typeof valA === "number") {
        return sortDirection === "asc" ? valA - valB : valB - valA;
      }

      return sortDirection === "asc"
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  };

  
  const handleSort = (field) => {
    setSortBy(field);
    setSortDirection(sortBy === field && sortDirection === "asc" ? "desc" : "asc");
  };

  
  const handleDeleteExpense = (indexToDelete) => {
    setExpenses((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm setExpenses={setExpenses} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseTable
        expenses={getSortedExpenses()}
        onSort={handleSort}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
};

export default App;
