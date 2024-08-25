import { Button, Space } from "antd";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.less';
import 'antd/dist/reset.css';

const App = ()  => {
  return (
    <div>
      <Space>
        It takes a village
        <Button type="primary">Button</Button>
      </Space>
    </div>
  );
}

export default App;
