import React, { useState } from 'react'
import Button from "../components/Button"
import { FlexBox, Hr } from "../components/UserStyled"
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const SignupInput = {
  display: "flex",
  margin: "1vw 3vw",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "40vh",
}
const MainContent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
}
const Choice = {
  display: "flex",
  justifyContent: "space-around",
}

export default function Signup() {
  const [role, setRole] = useState('');
  const [borderstyle, setborderstyle] = useState('0px');
  const Navigate = useNavigate();
  const Signup2 = () => {
    Navigate(`/signup2?role=${role}`)
  }
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const userid = useSelector(state => state.user.user.userId);
  return (
    <FlexBox MainContent>
      {userid}
      <h3>회원가입</h3>
      <div style={SignupInput}>
        <Hr Thin />
        <div style={Choice}>
          <img name="artist" style={{ maxWidth: "100%", height: "auto", margin: "0px 10px", borderRadius: "10px", border: `${role === 'ROLE_ARTIST' ? "3px solid black" : "3px"}` }} alt="판매자" src="/img/Choice1.svg" onClick={() => { setRole("ROLE_ARTIST"); }} />
          <img name="user" style={{ maxWidth: "100%", height: "auto", margin: "0px 10px", borderRadius: "10px", border: `${role === 'ROLE_USER' ? "3px solid black" : "3px"}` }} alt="구매자" src="/img/Choice2.svg" onClick={() => setRole("ROLE_USER")} />
        </div>
        <Button MediumBlack onClick={Signup2}>다음으로 넘어가기</Button>
        <Hr Thin />
        <br />
      </div>
    </FlexBox>
  )
}
