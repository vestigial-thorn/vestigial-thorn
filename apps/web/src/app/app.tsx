import { useState } from 'react';
import { Layout, Menu, Space } from 'antd';
import type { MenuProps } from 'antd';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.less';
import 'antd/dist/reset.css';

const { Header, Content, Footer } = Layout;

const items: MenuProps['items'] = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Projects', key: 'projects' },
  { label: 'Posts', key: 'posts' },
];

const NavMenu = () => {
  const [current, setCurrent] = useState('home');
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      theme="dark"
      mode="horizontal"
      items={items}
    />
  );
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#001529',
  color: '#001529',
};

const App = () => (
  <Layout>
    <Header style={headerStyle}>
      <NavMenu />
    </Header>
    <Content>
      <Space>It takes a village</Space>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default App;
