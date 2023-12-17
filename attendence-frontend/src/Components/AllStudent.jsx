import { Table ,Popconfirm} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Allstudents = () => {

  const [data, setdata] = useState([])
  useEffect(()=>{


      fetch(`http://localhost:4000/allstudent`)
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
          console.log(data)
          setdata(data)
        })
        .catch((error)=>{

        })

  },[])
  const HandleDelete =(id)=>{
 
    fetch(`http://localhost:4000/allstudent/${id}`,{
      method :'DELETE'
    })
    console.log(id)


  }

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "profileimage",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Course Name",
      dataIndex: "course",
      key: "course",
    },
    {
      title: 'Delete',
      dataIndex: 'operation',
      render: (a,b,c ) =>
      (
          <Popconfirm title="Sure to delete?" onConfirm={() => HandleDelete(b.id)}>
            <a>Delete</a>
          </Popconfirm>
        )
    },
    {
      title: 'Edit',
      dataIndex: 'operation',
      render: (a,b,c ) =>
      (
        <Link to={`/dashboard/allstudent/editstudent/${b.id}`}>Edit</Link>
       
        // onclick((e)=> Handleupdate(b.id))
          )
    },
  ];
  return (
    <>
      <Table dataSource={data} columns={columns} />;
    </>
  );
};

export default Allstudents;
