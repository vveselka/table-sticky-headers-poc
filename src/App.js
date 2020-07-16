import React from "react";
import styled from "styled-components";
import makeData from "./makeData";
import logo from "./logo.svg";
import "./App.css";

import { Table } from "./Table";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
            width: 50,
            align: "right",
          },
          {
            Header: "Visits",
            accessor: "visits",
            width: 50,
            align: "right",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </div>
  );
}

const Styles = styled.div`
  padding: 1rem;
  ${"" /* These styles are suggested for the table fill all available space in its containing element */}
  display: block;
  ${"" /* These styles are required for a horizontaly scrollable table overflow */}

  .table {
    border-spacing: 0;
    border: 1px solid black;
    max-width: 735px;
    margin: auto;

    .thead {
      ${"" /* These styles are required for a scrollable body to align with the header properly */}
    }

    .tbody {
      ${"" /* These styles are required for a scrollable table body */}
    }

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      border-bottom: 1px solid black;
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-right: 1px solid black;
      height: 70px;

      ${"" /* In this example we use an absolutely position resizer,
       so this is required. */}

      :last-child {
        border-right: 0;
      }

      .resizer {
        right: 0;
        background: blue;
        width: 10px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        ${"" /* prevents from scrolling while dragging on touch devices */}
        touch-action :none;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`;

export default App;
