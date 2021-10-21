import { useState } from "react";

const TransActionForm = ({addTransaction}) => {
  const [formValues, setFormValues] = useState({
    desc: "",
    type: "Expense",
    amount: 0,
   

  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler=(e)=>{
      e.preventDefault();
      addTransaction(formValues)

  }
  return (
    <form onSubmit={submitHandler}>
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
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
        />
        <label>Income</label>
      </div>
      <button type="submit">Add transaction</button>
    </form>
  );
};

export default TransActionForm;
