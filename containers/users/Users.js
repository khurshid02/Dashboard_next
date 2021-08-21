import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/actions";
import UsersWrapper from "./UsersWrapper";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setUsers(dispatch);
  }, []);

  const data = useSelector((state) => state.users);

  return (
    <UsersWrapper>
      <h1 className="mb-4">Users</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((v) => (
            <TableRow>
              <TableCell>{v.id}</TableCell>
              <TableCell>{v.name}</TableCell>
              <TableCell>{v.username}</TableCell>
              <TableCell>{v.phone}</TableCell>
              <TableCell>{v.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </UsersWrapper>
  );
};

export default Users;
