import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media(max-width: 500px){
      width: 100%;
      /* height: 90px; */
      background-color: rgba(255,255,255,1.00);
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 20px 50px;
      box-shadow: 0px -1px 5px #00000038;

      svg {
        font-size: 30px;
        color: rgb(91, 112, 131);
      }
    }

`;
