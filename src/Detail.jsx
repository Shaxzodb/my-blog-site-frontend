import {memo,useEffect,useState} from 'react';
import { DetailStyle } from './style/Detail-Style';
//import data from './data';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const { id } = useParams();
    // console.log(props.data)

    const item = props.data.find(item => {
      console.log("Detail")
      return item.id === id
    });
   
    return (
        <DetailStyle>
            {
            item ? (
            <div className="container-fluid">
            <div key={id} className="card">
            <img className="card-img-top" src={item.img} alt="" />
            <div className="card-body">
              <div className="card-title">
                <b><h7>{item.title}</h7></b>
              </div>
            
                <p>{item.content}</p>
              
            </div>
            <div className="card-footer">
              <div className="date">
               
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <p>{item.date}</p>
              </div>
              
              
            <p >{item.author.username}</p>
            </div>
            </div>
          </div>
                )
                : (
                    <div>
                        <center>
                            <h1>
                                Bunday Saxifa Yo'q 404 Not Found
                                
                            </h1>
                        </center>
                    </div>
                )
            }
        </DetailStyle>


    );
}
export default memo(Detail);