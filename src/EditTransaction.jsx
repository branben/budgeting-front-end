import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditTransaction() {
  const [transaction, setTransaction] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8888/transactions/${id}`, transaction)
      .then(function (response) {
        navigate(`/transactions/${id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:8888/transactions/${id}`).then((res) => {
      setTransaction(res.data);
    });
  }, [id]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="date">Date</label>
        <input
          onChange={(e) =>
            setTransaction({ ...transaction, date: e.target.value })
          }
          id="date"
          name="date"
          type="text"
          value={transaction.date}
        />

        <label for="item_name">Name</label>
        <input
          onChange={(e) =>
            setTransaction({ ...transaction, item_name: e.target.value })
          }
          id="item_name"
          name="item_name"
          type="text"
          value={transaction.item_name}
        />

        <label for="amount">Amount</label>
        <input
          onChange={(e) =>
            setTransaction({ ...transaction, amount: e.target.value })
          }
          id="amount"
          name="amount"
          type="number"
          value={transaction.amount}
        />

        <label for="from">From</label>
        <input
          onChange={(e) =>
            setTransaction({ ...transaction, from: e.target.value })
          }
          id="from"
          name="from"
          type="text"
          value={transaction.from}
        />

        <label for="category">Category</label>
        <input
          onChange={(e) =>
            setTransaction({ ...transaction, category: e.target.value })
          }
          id="category"
          name="category"
          type="text"
          value={transaction.category}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default EditTransaction;
