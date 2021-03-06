import React, { useState } from 'react';
import styled from 'styled-components';
import { authService, firebaseInstance } from '../fbase';



const Styledsection = styled.div`
  display:flex;
  justify-content : center;

`;

const ImageBackground = styled.div`
  background-image: url(https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png);
  background-size: 454px 618px;
  flex-basis: 454px;
  height:618px;
  background-repeat : no-repeat;
`;

const FormSection = styled.div`
  flex-grow: 1;
  justify-content:center;
  margin-top:12px;
  max-width:350px;
`;
const LogInForm = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  background-color: #fff;
  border: 1px solid rgba(219,219,291,1);
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 12%;
  
  h1{
    margin:22px auto 12px;
  }
  form{
    display:flex;
    flex-direction: column;

    width:100%;
    margin: 0 40px 6px;

  }
  .email--container, .password--container{
      display:flex;
      flex-direction: column;
      height:36px;
      flex: 1 0 0;
      align-items:start;
      background: rgba(250,250,250,1);
      border: 1px solid rgba(219,219,291,1);
      birder-radius:3px;
      box-sizing:border-box;
      color:rgba(38,38,38,1);
      font-size:12px;
      width:100%;
    input{
        border:none;
        background: rgba(250,250,250,1);
    }
    input:focus{
        border:none;
        outline:none;
    }
  }
  .password--container{
    flex-direction: row;
    justify-content: space-between;
    p{
      align-self: center;
    }
  }
  .password--input{
    display:flex;
    flex-direction: column;
    
    
  }
`;
const StyledSignUp = styled.div`
  background-color: #fff;
  border: 1px solid rgba(219,219,291,1);
  border-radius: 1px;
  display:flex;
  align-items:center;
  justify-content: center;
  padding: 10px 0;
  margin-bottom: 10px;
  line-height: 18px;
  span{
    font-size: 14px;
  }
  button{
    background: transparent;
    outline: none;
    border:none;
    color: rgba(0,149,246,1);
    font-size: 14px;
    font-weight: bold;
  }
`;

function Auth() {
  const [email,setEmail] = useState("")
  const [password, setPassword]= useState("");
  const [error, setError] = useState("");
  const [newAccount, setNewAccount] = useState(false);

  const toggleAccount = () => {
    setNewAccount((prev)=> !prev);
  }

  const onChange = (event)=>{
      const {target:{name,value}}= event;
      if(name==="email"){
          setEmail(value);
      } else if (name ==="password"){
          setPassword(value);
      }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try{
      let data;

      if(!newAccount){
        data = await authService.signInWithEmailAndPassword(
        email, password)
      } else{
        data = await authService.createUserWithEmailAndPassword(
        email,password
      )
      console.log(data);
    }
      
    } catch(error){
      setError(error.message);
    }
  }
  //facebook ??? ID ???????????????
  const onSocialClick = async () => {
    const provider = new firebaseInstance.auth.FacebookAuthProvider();
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  }
  
  return (
    <Styledsection>
      <ImageBackground/>
      <FormSection>
        <LogInForm>
          <h1>Instgram</h1>
          {/* <div>Profile Picture</div>
          <div>Log In Button</div>
          <div>Change Account</div> */}
          <form onSubmit={onSubmit}>
            <div className="email--container">
                <span>????????????, ????????? ?????? ?????? ?????????</span>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onChange}
                />
            </div>
            <div className="password--container">
                <div className="password--input">
                    <span>????????????</span>
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={onChange}
                    />
                </div>
                <p>???????????? ??????</p>
            </div>
            {newAccount ? <button type="submit">????????????</button> : <button type="submit">?????????</button> }
          </form>
          <p>??????</p>
          <button
            onClick={onSocialClick}
            name = "facebook"
          >
            Facebook?????? ?????????
          </button>
          {error && <div>{error}</div>}
          <button>??????????????? ????????????????</button>
        </LogInForm>
        {/* ???????????? */}
        <StyledSignUp>
          <span>????????? ????????????????</span>
          <button onClick={toggleAccount}>????????????</button>
        </StyledSignUp>
        <p>?????? ?????????????????????.</p>
        <div>
          <button>App store?????? ???????????? ??????</button>
          <button>Google Play ???????????? ??????</button>
        </div>
        {/* ?????? ????????????????????? */}
        {/* appstore, googlePlay */}
      </FormSection>
    </Styledsection>
  );
}

export default Auth;