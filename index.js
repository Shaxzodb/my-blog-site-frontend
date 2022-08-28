//const axios=require('axios');

const data=fetch("http://localhost:8000/" ,{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query: `
            query {
                GetArticleData{
                    articles{
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
        `
    })
})
    const a=data.then(res=>res.json()).then(data=>{return data.data.GetArticleData.articles}).catch(err=>console.log(err));
    console.log(a.then(data=>{
        return data;
    }))
// .then(response => response.json())
// .then(data => {
    
//     console.log(data.data.GetArticleData.articles);
// }).catch(err => {
//     console.log(err.response.data);
// })
// axios("http://localhost:8000/", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         query: `
//             query {
//                 GetArticleData{
//                     articles{
//                         id
//                     }
//                 }
//             }
//         `
//     })

// }).then(response => response.json())
// .then(data => {
//     console.log(data.data.GetArticleData.articles);
// }
// ).catch(error => {
//     console.log(error.response.data);
// }
// );