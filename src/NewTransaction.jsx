import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewTransaction() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");

  const [item_name, setName] = useState("");

  const [amount, setAmount] = useState("");

  const [from, setFrom] = useState("");

  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8888/transactions", {
        date,
        item_name,
        amount,
        from,
        category,
      })
      .then(function (response) {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h3>Add a New Item</h3>
      <form onSubmit={handleSubmit}>
        <label for="date">Date</label>
        <input
          onChange={(e) => setDate(e.target.value)}
          id="date"
          name="date"
          type="text"
          value={date}
        />

        <label for="item_name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="item_name"
          name="item_name"
          type="text"
          value={item_name}
        />

        <label for="amount">Amount</label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          id="amount"
          name="amount"
          type="number"
          value={amount}
        />

        <label for="from">From</label>
        <input
          onChange={(e) => setFrom(e.target.value)}
          id="from"
          name="from"
          type="text"
          value={from}
        />

        <label for="category">Category</label>
        <input
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          name="category"
          type="text"
          value={category}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default NewTransaction;
