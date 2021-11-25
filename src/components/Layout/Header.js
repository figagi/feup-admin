import React, { Component } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import styles from './Header.module.styl';

const { Header } = Layout;
const { SubMenu } = Menu;

export default class HeaderCustom extends Component {
  // 退出登录
  logout = () => {};

  render() {
    const { collapsed, toggle, username } = this.props;
    return (
      <Header className={styles.header}>
        <MenuUnfoldOutlined
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <Menu mode="horizontal" className={styles.menu}>
          <SubMenu
            title={
              <span>
                <Avatar
                  className={styles.avatar}
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                />
                {username}
              </span>
            }
          >
            <Menu.Item key="logout" style={{ textAlign: 'center' }}>
              <span onClick={this.logout}>退出</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}
