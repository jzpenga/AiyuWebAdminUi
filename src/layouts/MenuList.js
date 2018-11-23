import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

const MenuList =({menuList,onMenuClick})=> {

  const getIcon = icon => {
    //return <img src={icon} alt="icon" className={`${styles.icon} sider-menu-item-img`}/>;
    return <Icon type="mail" />;
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

    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {menuItems}
      </Menu>
    );

};

export default MenuList;
