import { Layout, Space } from 'antd';
import MainNav from './components/MainNav';

import './app.module.less';
import 'antd/dist/reset.css';

const { Header, Content, Footer } = Layout;

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
      <MainNav />
    </Header>
    <Content>
      <Space>It takes a village</Space>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default App;
