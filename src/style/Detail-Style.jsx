import styled from "styled-components";

const DetailStyle =styled.div`
    margin-top: 3.8rem;
    
  background-color: #f0f0f5;
  .card {
    margin-top: 10px;
  }
  .card-footer {
    justify-content: space-between;
    display: flex;
    align-items: center;
    p{
        padding: auto 0;
        margin: auto 0;
    }
    
  }
  .card-body {
    margin: .5rem 0;
  }
  .date {
    display: flex;
    
    justify-content: space-between;
    svg {
        margin: 5px 10px;
    }
  }
`
export {DetailStyle};