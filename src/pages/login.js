import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../style/login.less'
import axios from 'axios'
import url from '../api'
import { message } from 'antd';
const Login = (props) => {
  let [pawd, setPawd] = useState()
  let [username, setUsername] = useState()
  let login = () =>{
    axios({
        url: url.toLogin,
        method: 'post',
        data: {
            password: pawd,
            username: username
        }
    }).then(res=>{
      console.log(res);
       if(res.data.code === 200 ){
          localStorage.name = username
          message.success(res.data.message)
          props.history.push('/index')
       } else {
          message.success(res.data.message)
       }
    }).catch(err=>{
        message.success('注册失败')
    })
}
  const onFinish = values => {
  };
  return (
    <div className="login-wrapper">
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
         onChange={(e)=>{
          setUsername(username=e.target.value)
        }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e)=>{
            setPawd(pawd=e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>login()}>
          Log in
        </Button>
         <a href="/" className="to-register">&nbsp;&nbsp;&nbsp;register now!</a>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Login