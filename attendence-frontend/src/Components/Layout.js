import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  ShoppingOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme , Button, Flex } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const MainComponent = () => {
  let adminlist = [
    {
      icon: VideoCameraOutlined,
      label: "ALL Student",
      path: "/dashboard/allstudent",
    },
    {
      icon: LoginOutlined,
      label: "Add Student ",
      path: "/dashboard/allstudent/addstudent",
    },
    // {
    //   icon: LoginOutlined,
    //   label: "Add Student ",
    //   path: "/addstudent",
    // },
    {
      icon: LoginOutlined,
      label: "Logout",
      path: "/login",
    },
  ];
  const {token: { colorBgContainer }} = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        style={{background :'white' , height :'100vh'}}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          // theme="dark"
          style={{height:'100vh' , paddingTop:"50px" ,fontSize:'20px'}}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={adminlist.map((item, index) => ({
            key: String(index + 1),
            icon: React.createElement(item.icon),
            label: <Link to={item.path}>{item.label}</Link>,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
           
         
          }}
        >
        <div style={{display : "flex", marginLeft :'30px'}}>

        <h1>All Students</h1>
      <Link to={'/dashboard/allstudent/addstudent'}><Button style={{marginLeft :'1040px'}} type="primary" >Add Student</Button></Link>
        </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      
      </Layout>
    </Layout>
  );
};
export default MainComponent;
