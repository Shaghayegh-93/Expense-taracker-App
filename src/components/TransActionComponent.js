const TransActionComponent = ({
  transactions,
  searchItem,
  changeHandler,
  filterdTnx,
}) => {
  if (!transactions.length) return <p className="toggleInfoText">Add Some Tranactions</p>;
  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for transactions"
        className="search"
      />

      {filterdTnx.length
        ? filterdTnx.map((t) => (
            <div
              className="transactions"
              key={t.id}
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>{t.amount}</span>
            </div>
          ))
        : "no items matchs!"}
    </section>
  );
};

export default TransActionComponent;
