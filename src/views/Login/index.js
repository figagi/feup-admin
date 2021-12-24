import React from 'react';
import { Button, Row, Input, message, Form } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './feup-logo.png';
// import { API_CODE } from '../../consts/apiCode';
import { JWT_TOKEN } from '../../consts';
// import { savaUserData } from '../../utils/permissions';
import styles from './index.module.less';

const FormItem = Form.Item;

function Login(props) {
  const history = useHistory();
  const [formRef] = Form.useForm();
  const handleOk = async () => {
    const {
      // login,
      loginByPassToken,
    } = props;
    const { validateFields } = formRef;
    validateFields().then(async (values) => {
      const params = new URLSearchParams();
      params.append('username', values.userName);
      params.append('password', values.pwd);
      params.append('grant_type', `password`);
      // const data = await login(params);
      const data = await loginByPassToken(params);
      // console.log('321返回的结果 ', data);

      if (data) {
        if (data?.access_token !== null) {
          // 登录成功
          // localStorage.setItem(JWT_TOKEN, data.token_type + ' ' + data.access_token);
          localStorage.setItem(JWT_TOKEN, data.access_token);
          // localStorage.setItem('user_info', JSON.stringify(data));
          // console.log('获取来的token', localStorage.getItem(JWT_TOKEN));
          history.push('/');
        } else {
          message.error('登录失败');
        }
        // const { code } = data;
        // if (code === API_CODE.AUTHENTICATE) {
        //   message.error('抱歉，该用户没有访问权限')
        // } else {
        //   localStorage.setItem('fems-user', JSON.stringify(data.data))
        //   const res = await getUser()
        //   console.log(res, 'res')
        //   localStorage.setItem('user-detail', JSON.stringify(res))
        //   history.push('/app/home')
        // }
      } else {
        message.error('用户名或密码错误');
      }
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt="logo" src={logo} />
      </div>
      <Form form={formRef}>
        <FormItem
          hasFeedback
          name="userName"
          rules={[
            {
              required: true,
              max: 100,
              message: '请输入用户名',
            },
          ]}
        >
          <Input onPressEnter={handleOk} placeholder="用户名" />
        </FormItem>
        <FormItem
          hasFeedback
          name="pwd"
          rules={[
            {
              required: true,
              whitespace: true,
              max: 50,
              message: '请输入密码',
            },
          ]}
        >
          <Input type="password" onPressEnter={handleOk} placeholder="密码" />
        </FormItem>
        <Row>
          <Button type="primary" onClick={handleOk}>
            登录
          </Button>
        </Row>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginToken: state.loginToken,
    userDataDetail: state.userDataDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => dispatch.app.login(payload),
    loginByPassToken: (payload) => dispatch.app.loginByPassToken(payload),
    updateState: (payload) => dispatch.app.updateState(payload),
    getUser: () => dispatch.app.getUser(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
