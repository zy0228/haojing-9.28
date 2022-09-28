import { Button, Menu, Layout } from "antd";
const { Header, Content, Sider } = Layout;
import { Link, Outlet } from "react-router-dom";

const LayoutContainer = () => {
  return (
    <Layout>
      <Header className="header">
        <div>home</div>
        <div>user</div>
      </Header>
      <Layout className="layout">
        <Sider>
          <Menu>
            <Menu.Item key={"1"}>
              <Link to={"menu1"}>menu1</Link>
            </Menu.Item>
            <Menu.Item key={"2"}>
              <Link to={"menu2"}>menu2</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
