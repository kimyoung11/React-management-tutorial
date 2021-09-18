import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "홍길동1",
    birthday: "1231435423",
    gender: "남자",
    job: "학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동2",
    birthday: "1231435423",
    gender: "남자",
    job: "학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/2",
    name: "홍길동3",
    birthday: "1231435423",
    gender: "남자",
    job: "학생",
  },
];
class App extends React.Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
