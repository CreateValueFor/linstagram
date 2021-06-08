import React, { useState } from 'react';
import styled from 'styled-components';

const MessageBox = styled.div`
  height:100%;
  margin:20px;
  width:100%;
  max-width:935px;
  border: 1px solid rgba(0,0,0,.1);
  background: #fff;
  display:flex;
  .message--users{
    border-right:1px solid rgba(0,0,0,.1);
    width:350px;
    .message--myAccount{
      position:relative;
      display:flex;
      align-item:center;
      justify-content: center;
      height: 60px;
      padding: 0 20px;
      button{
        border:none;
        outline:none;
        background:transparent;
        cursor:pointer;
      }
      button:first-child{
        .account--modal{
          position:fixed;
          background-color: rgba(0,0,0,.65);
          bottom:0;
          left:0;
          right:0;
          top:0;
          display:flex;
          align-items:center;
          justify-content: center;
          flex-direction:column;
          .account--box{
            width:400px;
            margin:20px;
            max-height: calc(100% - 40px);
            background: #fff;
            h1{
              font-size:16px;
              font-weight:600;
              line-height:24px;
            }
            li{
              list-style:none;
            }
          }
        }
      }
      button:last-child{
        position:absolute;
        color:red;
        top:18px;
        right: 10px;
      }
    }
  }
`;

function Message(userObj) {
  console.log(userObj)
  const [userToggle, setUserToggle] = useState(false);
  const toggleUser = () => {
    setUserToggle(prev=> !prev);
  }
  return (
    <div>
      <MessageBox>
        <div className="message--users">
          <div className="message--myAccount">
            <button onClick={toggleUser}>
              <span>{userObj.userObj.displayName}</span>
              <span><svg aria-label="아래쪽 V자형 아이콘" className="_8-yf5 " fill="#262626" height="20" viewBox="0 0 48 48" width="20"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span>
              { userToggle && (
              <div className="account--modal">
                <div className="account--box">
                  <div>
                    <h1>계정 전환</h1>
                    <button onClick={toggleUser}>닫기</button>
                  </div>
                  <ul>
                    <li>
                      <button><img alt=""/></button>
                      <span>User_name</span>
                      <div>status</div>
                    </li>
                  </ul>
                </div>
              </div>
              )}
            </button>
            <button>
              <svg aria-label="새로운 메시지" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
            </button>
          </div>
          <div>
            <div className="user--list">

            </div>
          </div>
        </div>
        <div className="message--talk">

        </div>
      </MessageBox>
    </div>
  );
}

export default Message;