import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import '../style/register.less'
import axios from 'axios'
import url from '../api'
import { message } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = (props) => {
  let [pawd, setPawd] = useState()
  let [username, setUsername] = useState()
  let register = () =>{
      axios({
          url: url.toRegister,
          method: 'post',
          data: {
              password: pawd,
              username: username
          }
      }).then(res=>{
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

  const onFinishFailed = errorInfo => {
  };

  return (
    <div className="reg-form">
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={(e)=>{
           setUsername(username=e.target.value)
        }} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={(e)=>{
           setPawd(pawd=e.target.value)
        }}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={()=>{
           register()
        }}>
          Submit
        </Button>
        <a href="/login" className="to-register">&nbsp;&nbsp;&nbsp;去登录</a>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Register