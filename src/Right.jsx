import { memo } from "react";
import { RightStyle } from "./style/Right-Style";
  //import datat from "./data";
import { Link } from "react-router-dom";
function Right(props) {

  return (
    <RightStyle>
      <div className="arrow-up">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-up-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="16 12 12 8 8 12" />
            <line x1="12" y1="16" x2="12" y2="8" />
          </svg>
        </a>
      </div>
      {      
          props.data.map((item, index) => {
            return (
              <div key={index} className="card">
                <img className="card-img-top" src={item.img} alt="" />
                <div className="card-body">
                  <div className="card-title">
                    <Link to={`/detail/${item.id}`}>
                      <h7>{item.title}</h7>
                    </Link>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-calendar"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <p>{item.date}</p>
                  </div>

                  <p>{item.author.username}</p>
                </div>
              </div>
            );
          })
 
      }


    </RightStyle>
  );
}


export default memo(Right);
