import React, {  useState } from 'react';
import styled from 'styled-components';
import { storageService } from '../fbase';
import { v4 as uuidv4 } from 'uuid';
// 깊이가 깊어지면 모듈화 시켜주는게 좋다
// 벨로퍼트 투두리스트 강의 플로우 보기
const StyledProfile = styled.div`
  padding: 30px 20px 0;
  box-sizing:content-box;
  width: calc(100% - 40px);
  max-width:935px;
  .profile--header{
    display:flex;
    flex-direction:row;
    margin-bottom: 44px;
    .profile--image{
      flex-basis:0;
      flex-grow:1;
      margin-right:30px;
      img{
        width:150px;
        height:150px;
        border-radius:50%;
        box-sizing: border-box;
      }
    }
    .profile--summary{
      flex-basis:30px;
      flex-grow:2;
      div:first-child{
        display:flex;
        h2:first-child{
          font-weight:300;
          font-size:28px;
          line-height:32px;
          margin: -5px 0 -6px;
        }
        button:nth-child(2){
          background:transparent;
          border: 1px solid rgba(0,0,0,.2);
          border-radius: 3px;
          margin-left:20px;
          flex:0 1 auto;
          font-weight: 600;
          box-sizing:border-box;
          cursor:pointer;
          padding:5px 9px;
          text-align:center;
        }
        button:last-child{
          padding:8px;
          align-items:center;
          display:flex;
          border:0;
          background: transparent;
        }
      }
    }
  }
`;



const StyledEdit = styled.div`
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
  
  .profile--modal{
    max-width:900px;
    flex:1;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    background: #fff;
    max-height: 80%;
    border-radius:16px;
  }
`;

const UserOverview = styled.ul`
  display:flex;
  list-style:none;
  padding-left:0;
  margin-bottom:20px;
  li{
    margin-right:40px;
  }

`;

const UserActivity = styled.div`
  border-top: 1px solid rgba(0,0,0,.1);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:12px;
  font-weight:600;
  letter-spacing:1px;
  text-align:center;
  height:52px;
  ul{
    display:flex;
    
    align-items:center;
    li{
      list-style:none;
      margin-right:60px;
      
      span{
        margin-left:6px;
      }
    }
  }
`;

function Profile({userObj,refreshUser}) {
  
  const [editProfile, setEditProfile] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [attachment, setAttachment] = useState("");

  const toggleEditProfile = () => {
    setEditProfile(prev => !prev);
  }
  const onChange = (event)=>{
    const{target:{value}}=event;
    setNewDisplayName(value);
  }

  const onSubmit = async(event)=>{
    event.preventDefault();
    if(userObj.displayName !== newDisplayName){
      await userObj.updateProfile({
        ...userObj,
        displayName: newDisplayName,
        
      });
      console.log(userObj)
      refreshUser();
    }
  }
//이름이랑 사진 상태 관리가 한번에 교체되도록 고치기
//폼끼리 영향을 미치는지 알아보기, submit이벤트 알아보기
  const EditProfileImg = async (event)=>{
    event.preventDefault();
    let attachmentUrl = "";
    if(attachment !== ""){
      
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
      
    await userObj.updateProfile({
        ...userObj,
        photoURL : attachmentUrl,
      });
    await refreshUser();
    console.log(userObj);
    setAttachment("");
  }
  


  const onFileChange = (event) => {
    const {target:{files}}=event;
    const theFile= files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent)=>{
      const {currentTarget:{result}} = finishedEvent;
      setAttachment(result);
    }
    reader.readAsDataURL(theFile);
  }


  return (
    <StyledProfile>
      <div className="profile--header">
        <div className="profile--image">
          <img
            src={userObj.photoURL}
            alt="profileImage"
          />
        </div>
        <div className="profile--summary">
          <div>
            <h2>{userObj.displayName}</h2>
            <button onClick={toggleEditProfile}>
              프로필 편집
            </button>
            {editProfile && (
                <StyledEdit>
                  <div className="profile--modal">
                    <form onSubmit={onSubmit} className="name--form">
                      <div>이름변경</div>
                      <input 
                        onChange={onChange}
                        type="text"
                        placeholder="변경할 이름을 입력하세요"
                        value={newDisplayName}
                        className= "name--input"
                      />
                    </form>
                    <form
                      className="profile--image"
                      onSubmit={EditProfileImg}
                    >
                      <span>프로필 사진 변경</span>
                      <button type="submit" >변경</button>
                      <input
                        type="file"
                        onChange={onFileChange}
                        accept="image/*"
                      />
                    </form>
                    <button type ="button"onClick={toggleEditProfile}>닫기</button>

                  </div>

                </StyledEdit>
              )}
            <button><svg aria-label="옵션" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fillRule="evenodd"></path></svg></button>
          </div>
          <UserOverview>
            <li>게시물 0</li>
            <li>팔로워 0</li>
            <li>팔로우 0</li>
          </UserOverview>
          <div>유저 요약</div>
        </div>
      </div>
      <UserActivity>
        <ul>
          <li>
          <svg aria-label="게시물" className="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path clipRule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fillRule="evenodd"></path></svg>
            <span>게시물</span>
            </li>
          <li>
          <svg aria-label="게시물" className="_8-yf5 " fill="#8e8e8e" height="12" viewBox="0 0 48 48" width="12"><path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path></svg>
            <span>IGTV</span>
            </li>
          <li>
          <svg aria-label="저장됨" className="_8-yf5 " fill="#8e8e8e" height="12" viewBox="0 0 48 48" width="12"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
            <span>저장됨</span>
            </li>
          <li>
          <svg aria-label="태그됨" className="_8-yf5 " fill="#8e8e8e" height="12" viewBox="0 0 48 48" width="12"><path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path></svg>
            <span>태그됨</span>
            </li>
        </ul>
      </UserActivity>
    </StyledProfile>
  );
}

export default Profile;