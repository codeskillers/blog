import React, { useState, useEffect } from 'react'
import ListCom from '../components/list'
import axios from 'axios'
import url from '../api'

let Home = () =>{
    let [data, setData] = useState()
    useEffect(()=>{
          get()
  }, [])
  let get = async () =>{
      try {
          let result = await axios({
              url: url.getArticle+'/?type=Javascript',
              method: 'get'
          })
          setData(data=result.data.message)
      } catch (error) {
          console.log(error);
      }
  }
    return (
        <div>
          <ListCom data={data}/>
        </div>
    )
}
export default Home