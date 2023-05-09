import CardEmploy from "../CardEmploy/CardEmploy";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";


export const TableEmployees = () => {
  const data = [
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      color: "green",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      color: "green",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      color: "green",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      color: "green",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      color: "green",
      extra: "...",
    },
  ];

  return (
    <Card className="border-2 w5/5 h-screen ">
      <div className="border-2 border-yellow-500 flex justify-between items-center m-4 ">
        <Title className="border-2 border-yellow-500">Employees</Title>
        <button className="border-2 border-yellow-500">aaaaaaaaaa</button>
      </div>
      <Table className="border-2 flex justify-between items-center m-4  ">
        <TableHead className="border-2 border-yellow-500">
          <TableRow className="border-2 border-green-500">
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Phone Number</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>


          {data.map((item) => (
            <TableRow key={item.name} className="border-2 bg-black space-x-2">

                <TableCell className="flex flex-row justify-center items-center m-5 p-4 ">
                  {/* <div className="flex flex-row justify-center items-center"> */}
                  <img
                    className="w-7 rounded-full"
                    src={item.image}
                    alt="avatar image"
                  />
                  <Text className="text-center ">{item.name}</Text>
                  {/* </div> */}
                </TableCell>
                <TableCell>
                  <Text className="text-center">{item.mail}</Text>
                </TableCell>
                <TableCell>
                  <Text className="text-center">{item.phone}</Text>
                </TableCell>
                <TableCell>
                  <Text className="text-center">{item.position}</Text>
                </TableCell>
                <TableCell>
                  <Badge color="emerald" icon={StatusOnlineIcon}>
                    {item.status}
                  </Badge>
                </TableCell>

            </TableRow>
          ))}
            
        </TableBody>
      </Table>
    </Card>
  );
};
