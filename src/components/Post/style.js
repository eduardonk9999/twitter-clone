import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid var(--twitter-background);
  padding: 10px;
  

  .post__body{
    flex: 1;
    padding: 10px;
    img {
      border-radius: 20px;
      width: 100%;
    }
  }

  .post__footer{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .post__badge{
    font-size: 14px;
    color: var(--twitter-color);
  }

  .post__headerDescription{
    margin-bottom: 10px;
    font-size: 15px;
  }
  .post__avatar {
    padding: 10px 0 0 10px;
  }
`;
