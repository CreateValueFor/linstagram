import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`

  max-width: 600px;
  margin: 34px auto;
  .storyBoard{
    height: 118px;
    background-color: #fff;
    border: 1px solid rgba(219,219,291,1);
    border-radius: 1px;
    margin-bottom: 27px;
    ul{
      display:flex;
      list-style:none;
      height:84px;
      align-items:center;
      li{
        width:66px;
        height:66px;
        padding: 0 4px;
      }
    }
  }
  .feedBoard{
    background-color: #fff;
    border: 1px solid rgba(219,219,291,1);
    border-radius: 1px;
  }
`;


function Home() {
  return (
    <StyledBody>
      <div className="storyBoard">
        <ul>
          <li>sample1</li>
          <li>sample2</li>
          <li>sample3</li>
          <li>sample4</li>
          <li>sample5</li>
        </ul>
      </div>
      <div className="feedBoard">
        feed
      </div>
    </StyledBody>
  );
}

export default Home;