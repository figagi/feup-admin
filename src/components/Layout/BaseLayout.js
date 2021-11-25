import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Routes from '@/routes/subRoutes';
import { getToken, setToken } from '../../utils/filter';
import SiderCustom from './Sider';
import HeaderCustom from './Header';

const { Content, Footer } = Layout;

class BaseLayout extends Component {
  toggle = () => {
    const { collapsed } = this.props;
    const { updateState } = this.props;
    updateState({ collapsed: !collapsed });
    setToken('sider_collapsed', !collapsed);
  };

  render() {
    const { collapsed } = this.props;
    const name = getToken('username') || '管理员';

    return (
      <Layout className="ant-layout-has-sider" style={{ minHeight: '100%' }}>
        <SiderCustom collapsed={collapsed} path="/app/demo" />
        <Layout id="content" style={{ minHeight: '100vh' }}>
          <HeaderCustom collapsed={collapsed} toggle={this.toggle} username={name} />
          <Content
            style={{
              margin: '16px',
              background: '#ffffff',
              position: 'relative',
            }}
          >
            <Routes />
          </Content>

          <Footer
            style={{
              textAlign: 'center',
              margin: '30px 0 10px 0',
              color: 'rgba(0, 0, 0, .45)',
            }}
          >
            copyright © 2021 FEUP JS版权所有
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { collapsed } = state.app;
  return {
    collapsed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateState: (params) => dispatch.app.updateState(params),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
