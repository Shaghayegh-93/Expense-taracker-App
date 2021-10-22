import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filterdTnx, setFilterdTnx] = useState(transactions);

  const addTransaction = (formValues) => {
    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };
  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilterdTnx(transactions);
      return;
    }

    const filterd = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilterdTnx(filterd);
  };
  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransActionComponent
        transactions={transactions}
        searchItem={searchItem}
        changeHandler={changeHandler}
        filterdTnx={filterdTnx}
      />
    </section>
  );
};

export default ExpenseApp;
