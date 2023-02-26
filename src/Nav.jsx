import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <header>
        <article>
          <h1>
            <Link to="/">
              <span>Home</span>
            </Link>
          </h1>
        </article>
        <nav>
          <ul>
            <li>
              <Link to="/transactions/new">New Transaction</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
