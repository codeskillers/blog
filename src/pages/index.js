import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom"
import { Layout, Menu, Avatar, Affix } from 'antd';
import Home from './home'
import '../style/index.less'
import '../style/common.less'
import Write from './write'
import Javascript from './Javascript'
import HTML from './HTML'
import CSS from './CSS'
import REact from './React'
import Vue from './Vue'
import Node from './Node'
import { store } from '../store/index'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    BookOutlined,
    EditOutlined
} from '@ant-design/icons';
const { Sider, Header } = Layout;
const { SubMenu } = Menu
const SiderBar = (props) => {
    // let listStudy = ['Javascript', 'HTML', 'CSS', 'React.js', 'Vue.js', 'Node.js']
    let [listStudy, setListStudy] = useState(['Javascript', 'HTML', 'CSS', 'React.js', 'Vue.js', 'Node.js'])
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div className="Sider">
            <Layout className="Sider-layout">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Affix>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="-1" onClick={()=>props.history.push('/index/')}>
                            <HomeOutlined />
                            <span>首页</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <BookOutlined />
                                    <span>目录</span>
                                </span>
                            }
                        >
                           {
                               listStudy.map((item, index)=>(
                                   <Menu.Item key={index} onClick={()=>props.history.push(`/index/cate/${item}`)}>
                                       <span>{item}</span>
                                   </Menu.Item>
                               ))
                           }
                        </SubMenu>
                        <Menu.Item key="6"  onClick={()=>props.history.push('/index/write')}>
                            <EditOutlined />
                            <span>写博客</span>
                        </Menu.Item>
                    </Menu>
                    </Affix>
                </Sider>
                <Layout>
                <Affix>
                <Header className="site-layout-background" style={{ padding: 16 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',   
                    onClick: ()=>{setCollapsed(collapsed=!collapsed)},
                    })}
                    <Avatar className="header-avatar" size={56} src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1637831830,631695594&fm=26&gp=0.jpg" />
                    <span className="header-username">{localStorage.name}</span>
                </Header>
                </Affix>
                    <Route exact path="/index/" component={Home}></Route>
                    <Route path="/index/write" component={Write}></Route>
                    <Route path="/index/cate/Javascript" component={Javascript}></Route>
                    <Route path="/index/cate/HTML" component={HTML}></Route>
                    <Route path="/index/cate/CSS" component={CSS}></Route>
                    <Route path="/index/cate/React.js" component={REact}></Route>
                    <Route path="/index/cate/Vue.js" component={Vue}></Route>
                    <Route path="/index/cate/Node.js" component={Node}></Route>
                </Layout>
            </Layout>
        </div>
    )
}
export default SiderBar