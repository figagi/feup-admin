import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import zhCn from 'antd/es/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Log from '@kkb/fig-log';
import Routes from './routes';
import store from './store';
import './App.css';

// Log.init({
//   app_id: 'bee77c7f5de048b29222f09436074420', // 需要根据业务修改成对应的app_id
//   env: currentEnv,
// });
class App extends Component {
  componentDidCatch(error) {}

  render() {
    return (
      <ConfigProvider locale={zhCn} prefixCls={systemName}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}
export default App;
