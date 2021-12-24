import React from 'react';
import { Button, Space } from 'antd';
import PageHeaderWrapper from '../../components/PageHeaderWrapper';
import styles from './index.module.less';

const Home = ({ path }) => {
  return (
    <PageHeaderWrapper path={path}>
      <div className={styles.content_box}>
        <Space direction="vertical">
          <Button type="primary">后台管理系统3.0</Button>
          <div>✌️化繁为简🏆</div>
        </Space>
      </div>
    </PageHeaderWrapper>
  );
};

export default Home;
