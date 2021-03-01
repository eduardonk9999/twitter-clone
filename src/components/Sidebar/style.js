import styled from 'styled-components';

export const Container = styled.div`
  border-right: 1px solid var(--twitter-background);
  flex: 0.3;
  max-width: 250px;
  margin-top: 20px;
  padding: 0 20px;
  @media(max-width: 1020px){
    max-width: initial;
    flex: initial;
    padding: 0;
  }

  .side__tweet{
    background-color: var(--twitter-color);
    border: none;
    color: #fff;
    font-weight: 900;
    text-transform: inherit;
    border-radius: 30px;
    height: 50px;
    margin-top: 20px;
    

    &:hover{
      background-color: rgb(26, 145, 218);
    }
    
  }
  .sidebar__twitterIcon{
    color: var(--twitter-color);
    font-size: 30px;
    margin: 0 20px 20px;

    @media(max-width: 1020px){
      margin: 0 0px 20px 13px;
    }
  }

  @media(max-width: 500px){
      display:none;
  }
`;

