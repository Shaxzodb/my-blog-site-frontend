import styled from "styled-components";

const LeftStyle = styled.div`
@media (min-width: 768px) {
    display: flex;
    
    flex-direction: column;
    background-color: #f0f0f5;
    width: 100%;
    height: 100%;
    padding:0 0.4rem;
    margin: 0;
    .card{
        margin-top: 10px;
        width: 260px;
        p{
            font-size: 12px;
            pading: 0;
            margin: 0;
            color: #999;
            font-weight: bold;
            
        }
        p:hover{
            font-weight: bold;
            color: #000;
        }
        a:hover{
            text-decoration-line: none!important;
            
        }
        .card-body{
            padding: 0.5rem;
        }
    }
}
@media (max-width: 768px) {
    display: none;
}
`;

export { LeftStyle };