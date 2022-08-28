import styled from "styled-components";

const RightStyle = styled.div`

.arrow-up{
    
    height: 0;
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 85%;
    z-index: 1;
    margin-left: 85%;
    cursor: pointer;
    background-color: pink;
    
    svg{
        
        color: #999;
    }
    svg:hover{
        color: #000;
    }
}

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
  .date {
    display: flex;
    
    justify-content: space-between;
    svg {
        margin: 5px 10px;
    }
  }
`;
export { RightStyle };
