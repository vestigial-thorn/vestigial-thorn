import { useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

const HOME = 'home';

const items: MenuProps['items'] = [
  { label: 'Home', key: HOME },
  { label: 'About', key: 'about' },
  { label: 'Projects', key: 'projects' },
  { label: 'Posts', key: 'posts' },
];

const MainNav = () => {
  const [current, setCurrent] = useState(HOME);

  const onClick: MenuProps['onClick'] = e => setCurrent(e.key);

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

export default MainNav;
