import {memo} from "react";
import { LeftStyle } from "./style/Left-Style";
import data from "./data";
import {Link} from "react-router-dom";
function Lift(props){
  console.log("Left")
    return (
        <div className="sidebar-container">
            <LeftStyle>
            {
      data.map((item, index) => {
        return (
          <div key={index} className="card">
            <img className="card-img-top" src={item.img} alt="" />
            <div className="card-body">
            <Link to={`/detail/${item.id}`} className="card-title">
                <p>{item.title}</p>
            </Link>
              
            </div>
          </div>
        );
      })
      }
            </LeftStyle>
        </div>
    )
}
export default memo(Lift);