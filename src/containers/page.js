import React from 'react'
import { Pagination } from 'antd';

const Page = ({total, current, pageSize, onChange}) =>{
    return  <Pagination
              total={total}
              defaultPageSize={pageSize || 5 }
              defaultCurrent={current} 
              onChange = { onChange }
              simple />  
}

export default Page
