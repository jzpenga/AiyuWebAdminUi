import React from 'react';
import { Menu, Icon } from 'antd';
import styles from './MenuList.less';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

const MenuList = ({ menuList, onMenuClick }) => {

  const getIcon = icon => {
    //return <img src={icon} alt="icon" className={`${styles.icon} sider-menu-item-img`}/>;
    // <Icon type="appstore" />

    return <Icon type={icon}/>;
  };

  // 递归生成菜单
  const getMenus = (menuData) => {
    return menuData.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={item.icon ? (<span>{getIcon(item.icon)}<span>{item.name}</span></span>) : (item.name)}
          >
            {getMenus(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path} onClick={() => {
            onMenuClick(item);
          }}>
            {item.icon ? (<span>{getIcon(item.icon)}<span>{item.name}</span></span>) : (item.name)}
          </Link>
        </Menu.Item>
      );
    });
  };

  const menuItems = getMenus(menuList);
  let defaultSelectKey = window.localStorage.getItem('selectMenuItem');
  if (defaultSelectKey === undefined) {
    defaultSelectKey = '/home';
  }

  return (
    <Menu theme="dark" mode="inline" selectedKeys={[defaultSelectKey]} defaultSelectedKeys={[defaultSelectKey]}>
      {menuItems}
    </Menu>
  );

};

export default MenuList;
