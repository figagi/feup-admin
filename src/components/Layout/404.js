import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { noMatchReport } from '@/utils/log';
import { Result, Button } from 'antd';

// 404页面
function NoMatch() {
  const history = useHistory();
  useEffect(() => {
    noMatchReport();
  }, [history]);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="对不起，你访问的页面不存在！"
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            回到首页
          </Button>
        }
      />
    </div>
  );
}

export default NoMatch;
