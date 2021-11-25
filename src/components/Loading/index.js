import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 28 }} spin />;
  return (
    <div className={styles.loadingWrap}>
      <Spin indicator={antIcon} size="large" tip="加载中..." delay={100} />
    </div>
  );
};

export default Loading;
