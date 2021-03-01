import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 10px;
  border-bottom: 8px solid var(--twitter-background);
  padding-right: 10px;

  form{
    display: flex;
    flex-direction: column;

    > div{
      padding: 20px;
      display: flex;

      input{
        flex: 1;
        margin-left: 20px;
        font-size: 20px;
        border: none;
      }
    }
    button{
      background-color: var(--twitter-color);
      border: none;
      color: #fff;
      font-weight: 900;
      text-transform: inherit;
      border-radius: 30px;
      width: 80px;
      height: 40px;
      margin-top: 20px;
      margin-left: auto;
    }

  }
`;
