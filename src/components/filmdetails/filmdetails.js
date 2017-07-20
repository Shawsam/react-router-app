import React, {Component} from 'react';


// const FilmDetails = ({match})=>{
//   console.log(match);
//   return (
//     <div>
//       <h3>{match.params.id}</h3>
//     </div>
//   )
// }

// export default FilmDetails

export default class FilmDetails extends Component{
	render(){
        return (<p>电影详情:{this.props.match.params.id}</p>)
    }
}


