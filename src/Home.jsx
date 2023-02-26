import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8888/transactions").then((res) => {
      setTransactions(res.data);
    });
  }, []);

  return (
    <div>
      <h3> Transactions </h3>
      <ol>
        {transactions.map((el, index) => (
          <li>
            {el.date} -{" "}
            <Link to={`/transactions/${index}`}>{el.item_name}</Link> -{" "}
            {el.amount}
            <Link to={`/transactions/${index}/edit`}>Edit</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
