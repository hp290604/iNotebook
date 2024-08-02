import React,{Component} from 'react';
import Newsitem from "./Newsitem";

export default class News extends Component{
  render(){
    return (
<>
      <div className="container my-3 ">
        <h3>NewsMonkey-Top Headlines</h3>
        <div className="row ">
          <div className="col-md-4 ">
          <Newsitem className="my-3 mx-10" title="myTitle" desc="myDescription"/>
          </div>
          <div className="col-md-4 ">
          <Newsitem className="my-3 mx-10" title="myTitle" desc="myDescription"/>
          </div>
          <div className="col-md-4 ">
          <Newsitem className="my-3 mx-10" title="myTitle" desc="myDescription"/>
          </div>
        </div>

      </div>
      <div className="container my-3">
        <div className="row ">
          <div className="col-md-4">
          <Newsitem className="my-4 mx-10" title="myTitle" desc="myDescription"/>
          </div>
          <div className="col-md-4">
          <Newsitem className="my-3 mx-10" title="myTitle" desc="myDescription"/>
          </div>
          <div className="col-md-4">
          <Newsitem className="my-3 mx-10" title="myTitle" desc="myDescription"/>
          </div>
        </div>

      </div>

</>
    )
  }
}
