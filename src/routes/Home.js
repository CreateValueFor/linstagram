import React, { useState } from 'react';
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
      canvas{
        position: absolute;
        top: -4px;
        left: -4px;
        width: 64px;
        height: 64px;
      }
      li{
        width:56px;
        height:56px;
        padding: 0 4px;
      }
      span{
        display:block;
        background-color:rgba(250,250,250,1);
        border-radius:50%;
        box-sizing:border-box;
        flex: 0 0 auto;
        overflow:hidden;
        width:56px;
        height:56px;
      }
      img{
        height:100%;
        width:100%;
        border-radius:50%;
      }
    }
  }
  .feedBoard{
    background-color: #fff;
    border: 1px solid rgba(219,219,291,1);
    border-radius: 1px;
  }
`;

const FeedHeader = styled.div`
  display:flex;
  height: 27px;
  align-items:center;
  padding: 16px;
  border-bottom: 1px solid black;
  img{
    width: 32px;
    height:32px;
    border-radius: 50%;

  }
  .feed-body{
    display:flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 14px;
    .feed-title{
      display:flex;
      flex-direction:column;
      b{
        font-size:15px;
      }
    }

  }

`;
const MoreBox = styled.div`
  display:flex;
  background-color: rgba(0,0,0,.65)
  align-items:center;
  justify-content:center;
  position:fixed;
  bottom:0;
  left: 0;
  top:0;
  right:0;
  z-index:100;
  div{
    width:400px;
    display:flex;
    flex-direction:column;
  }
`;

const FeedBody = styled.div`
  width: 600px;
  height: 748.59;
  button{
    background:transparent;
    outline:none;
    border : none;
  }
  img{
    width:100%;
    height:100%;
  }
  .button--container{
    padding: 0 16px;
    margin: 4px 0;
    display:flex;
    justify-content:space-between;
    button{
      width: 40px;
      height:40px;
    }
    button:first-child{
      margin-left:-8px;
    }
  }
  .left--button{

  }
  .subscribe{
    margin-right: -8px;
  }
  .feed--summary{
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .current--response{
    padding: 0 16px;
  }
  .main--summary{
    padding: 0 16px;
    display:flex;
    align-items:baseline;
    line-height: 0;
    span:first-child{
      font-weight:bold;
    }

  }
  label{
    padding: 0 16px;
    font-weight:300;
    font-size:10px;
  }
  .feed--response{
    height:55px;
    margin-top:4px;
    display:flex;
    align-items:center;
    padding: 0 16px;

    input{
      width:500px;
      height:18px;
      border:none;
      outline:none;
      box-sizing:border-box;
    }
    button:last-child{
      width:28px;
      color:rgba(0,149,246,1);
      font-weight:600;
      font-size:14px;

    }

  }
`;

function Home() {
  const [more, setMore] = useState(false);
  const [reply, setReply] = useState("");
  const toggleMore = () => {
    setMore(prev=> !prev);
  }
  const onChange = (event) =>{
    const {target:{value}}=event;
    setReply(value);
  }
  
  return (
    <StyledBody>
      <div className="storyBoard">
        <ul>
          <li>
            <canvas height="64" width="64" />
            <span>
              <img 
                alt="basic" 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADxCAMAAACJfxnoAAABlVBMVEX///84jjwwT/7/6zvlOTUwTf84kScyYdmRupMvizMYQf7N0v8vSf8zjzzsMjX/7jtjgjs4kCszacX/6ij//vo4jzj/8TsjSP//+dD/8ib/7EOkxaV3f9oiiDwtizzoOCu4QImUszy+xP//8pJqpWxlnjzh5P//6i8ikjwehSQcRP//8Sk0cqw2gnZgb+jjHzXYRDZ6eTqnZDg3iFoyZNPkKCP1v7/r8uuRk8f/7VbuNxbujIv//fGxwTvrOCK8tZ42fIw4i0zcO0y/1sDr7f8GOv5wet7t4TvEu5aenbxATvaJlv786+v/9bL/72xUmDxOYvHT4tP/++LT0zv/9KEzbLyguTzpYDb4wzlIlUyqprGyXji+yDucajn71Drk1W01eJuIR8F9SMyrQpvoXlt9i/6bpv7/8IHVyYE5kw7zNgDQ1Wz/+wBUmisAfQA0cLLT3a59qTyzrqiXeznnTzY2gXy6rzqMljvMwY02f4I3hWwWVeCsYjgxVvA1epKDdTpUhzvrdHLFyv9/sIG1V6Bidf6utv+kFmGhAAAHP0lEQVR4nO3da18TRxTAYXIDEzdELkmgSkABQxIVFdRKFUUIUKqgxVItilZrK9baau3FVntvP3dlzkzgDLuzO8le8fzfLrvM8wOy2Z1Z0tbmZX3DqK88/Wb+dK2nvLOeoMfjQtfKiZ0RKZQRKQoRKZT1vIdL4KSNN4MerpN6EhqViRRMRAp6uE4iUtDDVXUB6tUjDffy3YIevlnneyAd0VsT36sv6OGbtVy2B1hGJJ8iEpECaTkH6Vly8IJXCyXp6zuQlil3bxE6F/TwzRoZgAo6pNqlenWr+v6gh2/WSDq2lS6pGt8qQyR/IhKRAqlByuFkBKp/MYyk2X3QbSaKlQ7jVrGp9j5uPhVC0sFKmhXjlVADFzGpv1pEgShspAbGrJJMKsbNIpLHEYlIgWRHKkC1ftZTI/KkWH6F9U33dSjVEmn5PGo4EBKvvSMFmYock86juwFlj1ZROCaZYzRJCSIRiUhhIPXizDfbkUozrHyTJGkIu0jqIcr19eAu4M03nlVYalHXt0WDpRRZkuQxJHBlafPHtiS0+y5SxckvXNcxtcWWlNCISEQiEpEck/pwN6VlZ9Lm7xydYpsk9ZqPwabyNb5b4zjSq7x8NOkcsDrgIemCxRjsTHy3xnHkpXPKch6T9CxSRCISkQImQSVzS76LtdkkqdbUkgMxx9PWdxPSIiUW+KKA56am/ET3Jyz1dZIVqXcN0ltyUHvxIdQ2zB9e0RK9/TmxCmvmpOOG8i6XHakCUzmHtUj9J/hUT9twK0tlcpYkRxZLEjtKSZPEJ+DiRCISkdwi8fkSTQvfyxNSmyAVcPIY+lFPG6R9o6wVPdGtl5+yvs+6SRrh5eEwK6OolQU8hsfXT6CW4oKUhpOAJmk8uVXnXVdJt9N5ljiOtOQAkwqP6ymUONxbEts7HCSzgzXaRcqYH45IRCKSFqlsT1KuOpO2FhqksSwkMHChJEipouk6qGZJ4rvDddHjqpoUG8BJZ+5CchyXhDp5B8DUXoXJFy6qvniKz4bmPzzjMp/aUYq2h1iHLETbJJz8ZqTwMqmqQcJjrn5WQ0exWJ1iXM6bjcEym99qIhGJSB6T8FpipyTxigdlZFK1iLbz95s+kZ4vrLI2brE2nJG65g/tbH4RX1/W8OZD8x3QD36QYiV+DljH5yEb0gC+KuuXr5hrePNqpZ2lJ2qWxBtb71RjJJLWxXHujqPb0EQiEpHCSoLsSANwx0OXBDdKfCVlT92FTqpJP16E9KaEFvheo36SYvwKb0xNGt8oNDPJJaZ0Duv9nFok8WxJuhgEIxKRiLSXSTBdogkr83fkYSR1/vScNaplKv88D/lzvaRJOlBq4t1D7VKGXdwWfbmq1SY18x5PPP3sz4U6kYhEJI9ISeV10zYJJ7+mS9P6/D8JGK82te4UuUOKjUFZc5MgyVM6a9JztfUMStx8TcGdyuqMM5NLJJENCbf7UWHlajYjkiTlWIhEJCLZkfiUjsX08w4SXkMURtLaAnQPWlYv3zWO/wLZmIIkiSmdyq/8RKQeS1ysMGgPMYln86iwVOoNkYhEpEiSTK8xXCZtwnoxq9dyl0mvT7PWPSTFl+4fY1ldGbpM4tdNpzo9JMX5Co/JLl9IUNZbEod1E4lIRCKSBcniXliESW8mWR2vJFN0SXGxAvG+9AsYYZKQEYlIRIoWCV04eUv6TTo/eUJq0E53ek8SGRN5H0hjRCISkd5dUl45P+I3CWqNlJ+ZgMJAOs7H0hqpa5LP30+Y/px8JYm5Grtndu1I3TAYIwwkhxGJSEQKBek1fkZ9D5Cyv69Df7REevA5FAZSLCsWtakOYksampre6smS8qt8IjnLljTI/iKniEQkIkWRNNMOE/eeklwROSWlJruhpkwOSYND0ENfSGJixG5dWUuk5CBr+oo/JJGnJB6RiEQkIr07pOQVqMnzUyhJ0PTQniMNEolIe5m06ejZlSiRlvLw6WQzbpJSQ8mTrF2kJZa3JDEh0qH1C+j0E+dk0xTrieb9PV0SlJr0g8SbJhKRiESk5JnBnWmSDP6PlkNF+gD3J38tf/gAUp+gjEcfQaEiSZ09w03TTuZqMnNivwiQeDb3lzNHiUQkIrlMqqRZDkn8YfOOzbRqN5dIU2d2Jr/ipfA/Yqk3SDdmIYekv46w9vO9/nZkapJ09Szun4cQF/3LxyKak/c3//QCiZRakvby9RO6v5hmczWDsJfxyO7ro0Dif1REIhKR/CWlK6i0RMrwDzUJlMTPU3wstqRzuNk0ImWOzkFBkq7y5szHYtdsBZHqFvv7SmoxIhGJSERSk9q74bNq9gJJsxEljUjhiEhECiQiESmQiESkQCISkQJpRDmlY0Uyqqx6KEl8bmbW3GRBMh4d+Y+le/vK1yo6pOKXQQ/XSUQKerhOIlLQw3XSHiQ9M53SaZCkaf1IkKQpHX6bT5AyR3GhPh9ZNItJ9aDH40IHiRSBiBSFiORO/wPnrxHG6joqlQAAAABJRU5ErkJggg=="/>
            </span>
          </li>
          <li><img alt="LCY" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/149245447_353106182397144_5674313265199198436_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=BISuO58oaRoAX-LeHNh&edm=ALlQn9MBAAAA&ccb=7-4&oh=afdb57ebcbf59324424b2bfae9cbed58&oe=60BA89B6&_nc_sid=48a2a6"/></li>
          <li>sample3</li>
          <li>sample4</li>
          <li>sample5</li>
        </ul>
      </div>
      <div className="feedBoard">
        <FeedHeader>
          <img alt="profile" src="data:image/png;base64,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"/>
          <div class="feed-body">
            <div className="feed-title">
              <b>name</b>
              <span>location</span>
            </div>
            <button onClick={toggleMore}>더보기</button>
            {more && (
              <MoreBox>
                <div>
                  <button>신고</button>
                  <button>팔로우 취소</button>
                  <button>게시물로 이동</button>
                  <button>공유 대상...</button>
                  <button>링크 복사</button>
                  <button onClick={toggleMore}>창 닫기</button>
                </div>
              </MoreBox>
            )}
          </div>
        </FeedHeader>
        <FeedBody>
          <img alt="sample_react" src="https://miro.medium.com/max/2484/1*CeuWv9fCjD1uTiTuKytnBQ.png"/>
          <div className = "button--container">
            <div className="left--button">
              <button>
              <svg aria-label="좋아요" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
              </button>
              <button>
              <svg aria-label="댓글 달기" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
              </button>
              <button>
              <svg aria-label="게시물 공유" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
              </button>
            </div>
            <button className="subscribe">
            <svg aria-label="저장" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
            </button>
          </div>
          <span className="current--response">~~명이 좋아합니다.</span>
          <div className="feed--summary">
            <div class="main--summary">
              <span>sample_name</span>
              <p>sample_summary</p>
              <button>더보기</button>
            </div>
            <label>#시간 전</label>
          </div>
          <div className="feed--response">
            <button><svg aria-label="이모티콘" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg></button>
            <input
              placeholder="댓글 달기..."
              onChange={onChange}
              value={reply}
            />
            <button>게시</button>
          </div>
        </FeedBody>
      </div>
    </StyledBody>
  );
}

export default Home;