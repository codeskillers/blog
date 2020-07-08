import React from 'react'
import { List, Layout, Col, Row } from 'antd';
import  '../style/common.less'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/vs2015.css';
import '../style/list.less'
const { Content } = Layout;

let ListCom = (props) => {
    let formDate = (dateForm) => {
        if (dateForm === "") {  //解决deteForm为空传1970-01-01 00:00:00
            return "";
        }else{
            var dateee = new Date(dateForm ).toJSON();
            var date = new Date(+new Date(dateee)+ 8 * 3600 * 1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
            return date;
        }
    }
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
    return (
        <Layout className="site-layout">
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 580,
            }}
        >   
            <List  dataSource={props.data} className="list"
              renderItem={
                item=>(
                    <List.Item className="list-item">
                        <Row>
                          <Col>
                            <Row gutter={6}>
                              <Col span={24}>
                                  <p className="title">{item.title}</p>{formDate(item.createAt)}
                              </Col>
                            </Row>
                            <br/>
                            <Row> 
                              <Col span={24}>
                                  <div dangerouslySetInnerHTML = {{__html:marked(item.content)}}>
                                  </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                    </List.Item>
                )
             }
            >
            </List>
        </Content>
        </Layout>
    )
}
export default ListCom