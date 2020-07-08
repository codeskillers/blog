import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Input, Select, Button, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../style/common.less'
import marked from 'marked'
import hljs  from 'highlight.js'
import 'highlight.js/styles/dark.css';
import '../style/write.less'
import axios from 'axios'
import url from '../api'
import { message } from 'antd';
import { store } from '../store/index'
const { Content } = Layout;
const { TextArea } = Input
const { Option } = Select
const Cate = (props) => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  })
  let [listStudy, setListStudy] = useState(['Javascript', 'HTML', 'CSS', 'React.js', 'Vue.js', 'Node.js'])
  const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('') //html内容
  let [listItem, setListItem] = useState('')
  let [title, setTitle] = useState('') // title内容 title是不断变化的 不能使用const
  let [type, setType] = useState('') // type
  let addItem = () => {
      setListStudy(listStudy=[...listStudy, listItem])
      let action = {
          type: 'addItem',
          value: listItem
      }
      store.dispatch(action)
  }
  const changeContent = e =>{
      setArticleContent(e.target.value)
      let html = marked(e.target.value)
      setMarkdownContent(html)
  }
  let publish = () =>{
      if(type===''){
         message.success('请选择项目')
      } else {
        axios({
          url: url.pubArticle,
          method: 'post',
          data: {
              title,
              type,
              content: articleContent
          }
      }).then(res=>{
          if(res.data.code===200){
             message.success(res.data.message)
             props.history.push(`/index/cate/${type}`)
          } else {
             message.success(res.data.message)
          }
      }).catch(err=>{
          console.log(err)
          message.success('发布失败')
      })
      }
  }
  return (
    <div className="home">
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 580,
          }}
        >
          <Row>
            <Col span={24}>
              <Row gutter={6}>
                <Col span={13}>
                  <Input placeholder="博客标题" size="large" onChange={(e)=>{
                    setTitle(title=e.target.value)
                    }} />
                </Col>
                <Col span={7}>
                  {/* <Select defaultValue={'请选择'} defaultActiveFirstOption={true} onChange={value=>setType(setType=value)} size="large">
                     {
                       listStudy.map((item, index)=>(
                       <Option value={item} key={index}>{item}</Option>
                       ))
                     }
                  </Select> */}
                  <Select
                  onChange={value=>setType(setType=value)}
                  size="large"
                  defaultValue={'请选择'}
                  style={{ width: 220 }}
                  dropdownRender={menu => (
                    <div>
                      {menu}
                      <Divider style={{ margin: '4px 0' }} />
                      <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                        <Input style={{ flex: 'auto' }} value={listItem} onChange={(e)=>setListItem(listItem=e.target.value)} />
                        <a
                          style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer', color: '#1890ff'}}
                          onClick={()=>addItem()}
                        >
                           <PlusOutlined />Add item
                        </a>
                      </div>
                    </div>
                  )}
                >
                  {listStudy.map(item => (
                    <Option key={item}>{item}</Option>
                  ))}
                </Select>
                </Col>
                <Col span={4}>
                  <Button type="primary" size="large" shape="round" onClick={publish}>发布文章</Button>
                </Col>
              </Row>
              <br />
              <Row gutter={8}>
                <Col span={12}>
                  <TextArea placeholder="输入内容" autoSize={{ minRows: 20 }} onChange={changeContent}/>
                </Col>
                <Col span={12}>
                  <div className="show-html" placeholder="输入内容" style={{ background: '#F2EFF2', minHeight: 450 }} dangerouslySetInnerHTML = {{__html:markdownContent}} >
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}
export default Cate