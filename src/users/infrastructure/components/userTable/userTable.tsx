import { useMemo, useState } from "react";
import { CellProps, Column, useTable } from "react-table";
import "./styles.css";
import UserModal from "../userModal/userModal";
import type { User } from "../../../domain/user.model";
type UserTableProps = {
  data: any[];
};

const UserTable = ({ data }: UserTableProps) => {
  const [userData, setUserData] = useState<User | undefined>(undefined);
  const COLUMNS = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "first Name",
        accessor: "firstName",
        Cell: ({ row }: any) => {
          console.log(row);

          return (
            <div
              onClick={() => {
                setUserData(row.original);
                setOpenModal(true);
              }}
              className="modal-btn"
            >
              {row.values.firstName}
            </div>
          );
        },
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Username",
        accessor: "username",
      },
    ],
    []
  );
  const DATA = useMemo(() => data, [data]);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: COLUMNS,
    data: DATA,
  });

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerG) => {
            return (
              <tr {...headerG.getHeaderGroupProps()}>
                {headerG.headers.map((column) => {
                  return <th {...column.getHeaderProps()}>{column.render("Header")}</th>;
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      {openModal && <UserModal isOpen={openModal} onRequestClose={() => setOpenModal(false)} userData={userData} />}
    </div>
  );
};

export default UserTable;
