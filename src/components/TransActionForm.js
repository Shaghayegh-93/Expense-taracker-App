import { useState } from "react";

const TransActionForm = ({ addTransaction }) => {
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
  };
  return (
    <form onSubmit={submitHandler}>
      {/* <div className="formInput"> */}
       
        <input
          type="text"
          name="desc"
          onChange={changeHandler}
          value={formValues.desc}
        ></input>
        <input
          type="number"
          name="amount"
          onChange={changeHandler}
          value={formValues.amount}
        ></input>
      {/* </div> */}

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
      <button  className="btn primary" type="submit">Add transaction</button>
    </form>
  );
};

export default TransActionForm;
