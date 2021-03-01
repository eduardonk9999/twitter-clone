import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.3;
  @media(max-width: 1020px){
    display: none;
  }

  .widgets__input{
    display: flex;
    align-items: center;
    background-color: var(--twitter-background);
    padding: 10px;
    border-radius: 20px;
    margin: 10px 0 0px 20px;

    input{
      border: none;
      background-color: var(--twitter-background);
    }
    .widgets__searchIcon{
      color: gray;
    }

  }
  .widgets__widgetContainer{
    margin: 15px 0 0 20px;
    padding: 20px;
    background-color: #f5f8fa;
    border-radius: 20px;

    h2 {
      font-size: 18px;
      font-weight: 800;
    }
  }
`;
