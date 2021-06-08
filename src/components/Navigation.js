import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { authService } from '../fbase';

const StyledNavigation = styled.div`
  display:flex;
  justify-content: space-between;
  background: #fff;
  margin: 0;
  align-items: center;
  height:54px;
  padding: 0 20px;
  button{
      background:transparent;
      border:none;
      cursor: pointer;
    }
  border-bottom: 1px solid rgba(219,219,291,1);
  
  .logo{
    color:black;
    text-decoration:none;
    width:103px;
    height:29px;
    background: url("https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png");
    background-size: cover;
    margin-top:7px;
  }
  .menu--box{
    display:flex;
    flex-direction:row;
    padding-left:24px
    justify-content: space-between;
    
  }
  .profile--container{
    position:absolute;
    z-index: 10;
    background : #fff;
    top: 40px;
    right:0px;
    width:230px;
    list-style: none;


  }
  /* Link 를 a태그로 인식한다. */
  a{
      color:black !important;
      text-decoration:none !important;
    }
  img{
    width: 22px;
    height:22px;
    border-radius: 50%;
  }
`;


function Navigation({userObj}) {
  const [profile, setProfile] = useState(false);
  const toggleProfile = () => {
    setProfile(prev => !prev);
  };
  const history= useHistory();
  const onLogOutClick = async () =>{
    await authService.signOut();
    history.push('/');
  }
  
  return (
    <StyledNavigation>
      <Link className= "logo"to="/">

      </Link>
      <div className="search--input">
        <input
          placeholder="검색"
        />
      </div>
      <div className="menu--box">
        <Link to="/">
          <svg aria-label="홈" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
        </Link>
        <Link to="/direct/inbox/">
        <svg aria-label="Direct" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
        </Link>
        <Link to="/explore/">
        <svg aria-label="사람 찾기" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clipRule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fillRule="evenodd"></path></svg>
        </Link>
        <svg aria-label="활동 피드" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        <button onClick={toggleProfile}>
          <img
            src={userObj.photoURL}
            alt="user_photo"
          />
        </button>
        { profile && (<>
            <ul className="profile--container">
              <li><Link to="/profile/" onClick={toggleProfile}>
                프로필
              </Link></li>
              <li><Link to="/profile/saved" onClick={toggleProfile}>
                저장됨
              </Link></li>
              <li><Link to="/accounts/edit"onClick={toggleProfile}>
                설정
              </Link></li>
              <li><button onClick={toggleProfile}>계정 전환</button></li>
              <li><button onClick={onLogOutClick}>로그아웃</button></li>
            </ul>
            
          </>)}
      </div>

    </StyledNavigation>
  );
}

export default Navigation;