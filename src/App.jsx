import Navbar from "./Navbar";
import Body from "./Body";
import {useEffect,useState,useMemo,memo} from 'react';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./Detail";
import Error from "./404";
import CKEDITORAPP from "./CKEDITOR";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://blogsite273.herokuapp.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
            query {
              GetArticleData{
                articles{
                id
                  title
                  img
                  content
                  author{
                    username
                  }
                  date
                }
              }
            }
          `,
  }),
}).then((res) => res.json())
.then((data) => {
  //console.log(data.data.GetArticleData.articles);
  setData(data.data.GetArticleData.articles);
}).catch((err) => {
  console.log(err);
})
  } , [data])
  const obj =useMemo(()=>{
    return data;
  },[data])
  return (
    <div className="App">
      
      <header className="App-header">
        <nav>
          <Navbar />
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body data={obj}/>} />
          <Route path="detail/:id" element={<Detail data={obj} />} />
          <Route path="ckeditor" element={<CKEDITORAPP />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default memo(App);
