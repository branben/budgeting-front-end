import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ShowTransaction() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8888/transactions/${id}`).then((res) => {
      setTransaction(res.data);
    });
  }, [id]);

  function handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:8888/transactions/${id}`)
      .then(function (response) {
        navigate("/");
      });
  }

  return (
    <div>
      <h3>Transaction Info</h3>
      Name: {transaction.item_name}
      <br />
      Amount: {transaction.amount}
      <br />
      Date: {transaction.date}
      <br />
      From: {transaction.from}
      <br />
      Category: {transaction.category}
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ShowTransaction;
