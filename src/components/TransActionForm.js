import { useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    desc: "",
    type: "Expense",
    amount: 0,
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <label id="title" htmlFor="title">
        Text
      </label>
      <input
        placeholder="Enter text..."
        id="title"
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        style={{ marginBottom: "10px" }}
      ></input>
      <label id="aount" htmlFor="amount">
        Amount
      </label>
      <input
        id="amount"
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
      ></input>

      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="btn primary " type="submit">
        Add transaction
      </button>
    </form>
  );
};

export default TransActionForm;
