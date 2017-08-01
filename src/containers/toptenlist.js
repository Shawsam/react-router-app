import React, {Component} from 'react'
import Loading from './loading'

// 列表
const List=({data})=>{
    if(!data){
        return(<p>暂时没有数据</p>);                     //空列表直接return
    }
    const itemList = data.map((item, index)=>                    //遍历数据
             <li key={item.uniquekey}>
                 <label>{index+1}</label>
                 <span>{item.title}</span>
             </li>
    )  
    return(<ul className="list">                       
                {itemList}                             
           </ul>
    )                                                  //返回列表
}



export default class TopTenList extends Component{
 
  state={
     toptenData:null,
     isLoading:false
  }

  componentDidMount(){
       this.setState({isLoading:true});
       const {type, count, data} = this.props;
       if(data){
           this.setState({toptenData:data.musicList,isLoading:false})
       }else{
           const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
           fetch(url).then(res => res.json())
           .then(data => this.setState({toptenData:data,isLoading:false}))
           .catch(err => console.log('parsing failed', err));
       }

  }

  render(){
  	 const {title} = this.props
     const {isLoading, toptenData} = this.state;
     return(
     	<div className="topTenList">
    		<p className="hd-title">{title}</p>
            {isLoading?<Loading />
                      :<List data={toptenData}  />
            }
     	</div>
     )
  }
}