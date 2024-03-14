import { useState } from "react";
import "./Table.scss";
import { FaTrash, FaPen } from "react-icons/fa6";

const Table = ({ name_task, type, items = [] }) => {
  return (
    <div className="table">
      <table>
        <tr>
          <th>Tabela</th>
          <th>Status</th>
          <th>Opções</th>
        </tr>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <td className="table_pg">{item.name}</td>
              <td>
                <input type={type} />
              </td>
              <td className="icons">
                <FaPen />
                <FaTrash />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
