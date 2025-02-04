import React,{Component} from 'react';


export default class Newsitem extends Component{
  render(){
    let {title,desc}=this.props;
    return (
      <>

      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </>

    )
  }
}
