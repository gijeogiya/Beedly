import { Box } from "grommet";
import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import styled from "styled-components";
import CloseButton from "../assets/images/close.png";
import { StyledText } from "./Common";
const HeaderDiv = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const BackButton = styled.button`
  background: none;
  font-size: 12px;
  font-family: Noto Sans KR, sans-serif;
  border: 0px;
  width: 10vw;
`;

const HeaderBox = ({ goBack }) => {
  return (
    <HeaderDiv>
      <div style={{ width: "10vw" }}></div>
      <StyledText size="20px" weight="bold" text="이용약관" />
      <BackButton onClick={goBack}>
        <img src={CloseButton} />
      </BackButton>
    </HeaderDiv>
  );
};

export const ServiceTerms = ({ open, onDismiss }) => {
  return (
    <BottomSheet
      open={open}
      onDismiss={() => {
        onDismiss();
      }}
    >
      <HeaderBox
        goBack={() => {
          onDismiss();
        }}
      />
      <div
        style={{
          margin: "15px",
          pad: "10px",
          height: "70vh",
          whiteSpace: "pre-wrap",
          overflow: "scroll",
        }}
      >
        {/* <!-- <h3> 요약 </h3>
      <p>
        <br>
        서비스 제공자(BEEDLY 운영자)는 BEEDLY라는 유튜브 비디오 플랫폼을 기반으로 한 소셜 SNS 서비스를 운영하고 있습니다. 
        <br>
        BEEDLY의 기본 서비스는 무료이며 프리미엄 고급 기능에 대한 유료 업그레이드를 제공합니다. 
        <br>
        BEEDLY 서비스는 BEEDLY 대화방에서 일어나는 일에 대해 최대한 많은 통제와 소유권을 제공하도록 설계되었습니다. 
        <br>
        그러나 게시한 내용에 대해서는 게시자가 책임을 져야 합니다.  
        <br>
        특히 스팸, 바이러스 또는 심각한 폭력 위협과 같은 금지 품목이 방에 나타나지 않도록 하셔야 합니다.
        <br>
        <br>
        본 이용 약관을 위반한다고 생각되는 BEEDLY 방을 발견하면 <a href="mailto:mingu4969@naver.com?subject=튜플리 문의드립니다.">[저희에게 연락해 주십시오.]</a>
      </p> --> */}
        <Box style={{ fontSize: "12px" }}>
          <strong style={{ fontSize: "20px" }}>요 약</strong>
          <Box>
            <StyledText
              text="서비스 제공자(BEEDLY 운영자)는 BEEDLY라는 화상 경매 플랫폼
              서비스를 운영하고 있습니다. BEEDLY의 기본 서비스는 무료이며 결제
              시 수수료가 발생합니다. BEEDLY 서비스는 BEEDLY 경매방에서 일어나는
              일에 대해 최대한 많은 통제와 소유권을 제공하도록 설계되었습니다.
              그러나 게시한 내용에 대해서는 게시자가 책임을 져야 합니다. 특히
              스팸, 바이러스 또는 심각한 폭력 위협과 같은 금지 품목이 방에
              나타나지 않도록 하셔야 합니다."
            />
            <br />본 이용 약관을 위반한다고 생각되는 BEEDLY 방을 발견하면{" "}
            <a href="mailto:zazachucky@naver.com?subject=비들리 문의드립니다.">
              [저희에게 연락해 주십시오.]
            </a>
          </Box>
        </Box>

        <Box style={{ fontSize: "12px" }}>
          <strong style={{ fontSize: "20px" }}>제1장 총칙</strong>
          <Box>
            <StyledText
              text="제1조 (목적) 이 약관은 [(주) 비들리](이하 “서비스 제공자”라
              합니다)가 제공하는 서비스의 이용과 관련하여 서비스 제공자와 이용자
              간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로
              합니다. 제2조 (용어의 정의) 1.이 약관에서 사용되는 용어의 정의는
              다음과 같습니다. 가. “서비스”는 구현되는 기기(PC, 스마트폰 등의
              각종 유무선 장치를 포함합니다)와 무관하게 서비스 제공자가 개발한
              BEEDLY 웹을 통해 이용자에게 제공하는 서비스를 말합니다. 나.
              “이용자”는 서비스 제공자의 이 약관에 따른 계약을 체결하여 서비스를
              이용하는 자로서 다음 각 호와 같이 구분됩니다. 1) “회원”은 서비스
              제공자가 정한 회원 가입 절차를 거쳐 서비스를 이용하는 자를
              말합니다. 2) “비회원”은 회원 가입 절차 없이 서비스를 이용하는 자를
              말합니다. 단, 비회원 이용자는 회원에 비하여 서비스 이용에 있어
              일부 제한이 있을 수 있습니다. 다. “콘텐츠”는 프로그램, 소프트웨어
              기타 형식을 불문하고 서비스와 관련한 각종 이미지, 텍스트 정보,
              관련 자료 및 정보 등을 말합니다. 라. “BEEDLY 웹”은 서비스 제공자가
              서비스 제공을 위하여 자체 개발한 공유, 추천 서비스 알고리즘 탑재
              웹 애플리케이션을 말합니다. 마. “아이디”는 회원의 식별 및 서비스
              이용을 위하여 회원이 정하고 서비스 제공자가 승인하는 이메일 주소
              형식의 문자 또는 숫자, 기호의 조합을 의미합니다. 바. “비밀번호”는
              회원이 부여받은 아이디와 일치하는 회원임을 확인하기 위하여 회원
              자신이 정한 문자 또는 숫자, 기호의 조합을 의미합니다. 2. 이
              약관에서 사용하는 용어의 정의는 제1항 각 호에서 정하는 것을
              제외하고는 관계 법령 및 개인정보처리방침, 서비스 제공자가 별도로
              정한 지침 기타 일반적인 상관례에 의합니다. 제3조 (약관의 효력
              범위) 1. 약관은 서비스를 이용하는 모든 이용자에 대하여 효력이
              있습니다. 다만, 비회원의 경우 약관이 정한 바에 따라 일부 조항의
              적용이 배제될 수 있습니다. 2. 이 약관은 이용자가 서비스
              제공자로부터 약관에 동의하여 서비스 제공자와 이용계약을 체결한
              날로부터 이용계약을 해지하는 시점까지 적용되는 것을 원칙으로
              합니다. 다만, 이 약관의 일부 조항은 약관의 적용이 종료한 이후에도
              효력이 계속될 수 있습니다. 제4조 (서비스 제공자의 기본정보) 서비스
              제공자의 기본정보는 다음의 각 호와 같습니다. 가. 상호: 핫식스 먹은
              거북이 (hotsix-turtles) 나. 대표자: 문석희 다. 연락처:
              zazachucky@gmail.com 제5조 (약관의 명시 및 개정) 1. 서비스
              제공자는 이용자가 쉽게 알 수 있도록, 서비스 제공자의 서비스
              초기화면에 상설메뉴로 이 약관의 내용을 게시합니다. 2. 서비스
              제공자는 『약관의 규제에 관한 법률』, 『정보통신망 이용촉진 및
              정보 보호 등에 관한 법률』 등 관련 법령을 위반하지 않는 범위에서
              이 약관 및 개별 서비스 약관(제6조에 정함) 기타 서비스 정책을
              수시로 개정 또는 변경할 수 있습니다. 3. 서비스 제공자는 약관을
              개정하는 경우 적용일자 및 개정사유를 개정 전 약관과 함께 적용일자
              7일 전(이용자에게 불리하거나 중대한 사항의 변경은 30일 이전)부터
              서비스 공지사항에 게시하는 방법으로 이용자에게 통지합니다. 다만,
              이용자에게 불리한 내용의 약관 개정의 경우에는 서비스 공지 외에
              이메일, 로그인시 동의창 등의 방법으로 이용자에게 추가 통지합니다.
              4. 서비스 제공자는 전항에 따라 개정 약관을 공지 또는 통지하면서
              그와 함께 이용자가 개정 약관의 효력 발생일까지 그에 대한 거부의
              의사표시를 하지 않으면 개정약관에 승낙한 것으로 간주하겠다는
              내용을 공지할 수 있습니다. 이러한 공지가 이루어진 경우, 이용자가
              개정 약관의 효력발생일까지 그에 대한 거부의사를 표시하지 않거나
              탈퇴하지 않으면 그 이용자는 청약철회 등 개정약관에 정한 모든
              내용에 대하여 동의한 것으로 간주됩니다. 5. 서비스 제공자는 개정
              약관의 적용에 동의하지 않는 이용자에 대하여 개정 약관의 내용을
              적용할 수 없습니다. 단, 이 경우 서비스 제공자 및 이용자는
              이용계약을 해지할 수 있습니다. 6. 개정된 약관은 원칙적으로 그 효력
              발생일(적용일자)로부터 장래를 향하여 유효합니다. 제6조 (개별
              서비스 약관 및 약관 외 준칙) 1. 서비스 제공자는 서비스의 구체적인
              내용에 따라 이용자의 동의를 얻어 개별 서비스에 대한 약관 및
              이용조건(이하 “개별 서비스 약관”이라 합니다)을 별도로 정할 수
              있습니다. 2. 제1항의 개별 서비스 이용에 관하여는 해당 개별 서비스
              약관이 이 약관에 우선하여 적용됩니다. 3. 이 약관에 정하지 않은
              사항에 대하여는 개별 서비스 약관 및 개인정보처리방침, 관련 법령
              또는 상관례에 따릅니다. 제7조 (정보의 통지) 1. 서비스 제공자는
              회원이 제공한 이메일 주소(회원이 제공한SNS 계정을 통하여 제공받는
              경우를 포함합니다)로 이메일을 전송하는 방법을 통하여 회원에게
              정보를 통지할 수 있습니다. 2. 서비스 제공자는 불특정 다수 이용자에
              대한 통지의 경우, 서비스 공지사항 또는 게시판에 7일 이상의 기간
              동안 그 통지를 게시하는 방법으로 제1항의 통지를 갈음할 수
              있습니다. 다만, 특정 회원의 거래와 관련하여 중대한 영향을 미치는
              사항에 대하여는 제1항에 따라 개별적으로 통지를 하여야 합니다."
            ></StyledText>
          </Box>
          <strong style={{ fontSize: "20px" }}>제2장 서비스 이용</strong>
          <div>
            <StyledText
              text="제8조 (이용계약의 체결) 1. 이용계약은 약관의 내용에 동의하여
              회원이 되고자 하는 자(이하 “가입신청자”이라 합니다)가 서비스
              제공자에 가입신청을 하고, 서비스 제공자가 이러한 신청에 대하여
              가입을 승낙함으로써 체결됩니다. 한편, 비회원은 서비스 제공자가
              제공하는 서비스를 이용함으로써 이 약관에 따른 이용계약을 체결하는
              것에 동의한 것으로 봅니다. 2. 서비스 제공자는 가입신청자가 제1항의
              가입신청을 하는 경우 원칙적으로 이를 승낙합니다. 다만, 서비스
              제공자는 다음 각 호의 경우 가입신청의 승낙을 거절할 수 있으며,
              사후적으로 회원에게 다음 각 호의 사유가 존재함을 안 경우 그
              회원과의 이용계약을 해지할 수 있습니다. 가. 가입신청자가 타인의
              명의를 도용하여 가입신청을 한 경우 나. 가입신청과 관련하여 허위의
              또는 부정확한 정보를 기재하거나, 서비스 제공자가 제시하는 내용을
              기재하지 않은 경우 다. 가입신청자가 이전에 본 항 각 호의 사유로
              인하여 서비스 제공자에 의해 이용계약이 해지된 적이 있는 경우. 단
              서비스 제공자로부터 회원 재가입에 대한 승낙을 얻은 경우는 예외로
              함 라. 기타 제반 규정 위반 등 가입신청자의 귀책사유로 인하여
              서비스 제공자가 가입신청의 승낙을 거절할 만한 객관적인 사유가
              존재하는 경우 3. 서비스 제공자는 서비스 관련 설비의 여유가 없거나,
              기술상 또는 업무상 문제가 있는 경우에는 가입신청의 승낙을 유보할
              수 있습니다. 이 경우, 서비스 제공자는 문제를 해결하고 가입신청의
              승낙을 재개할 수 있도록 최선을 다합니다. 4. 본 조에 따라서
              회원가입신청의 승낙을 거절 또는 유보하는 경우, 서비스 제공자는
              해당 사실을 가입신청자에게 통지하여야 합니다. 5. 서비스 제공자가
              서비스 가입신청 절차상에서 가입신청자에게 가입완료 사실을
              통지함으로써 이용계약이 성립하며, 그에 따라 해당 가입신청자는
              회원의 지위에서 서비스 제공자가 제공하는 서비스를 이용할 수
              있습니다. 제9조 (서비스의 내용) 서비스 제공자가 제공하는 서비스의
              내용은 다음 각 호와 같습니다. 가. BEEDLY의 작품 경매 기능 나.
              BEEDLY의 작품 추천 기능 다. BEEDLY의 작품 취향 분석 라. BEEDLY의
              이용자 취향 및 작품 태그 기능 마. BEEDLY의 화상 경매 및 채팅 기능
              바. 기타 서비스 제공자가 추가 개발하거나 다른 서비스 제공자와의
              제휴계약 등을 통해 이용자에게 제공하는 일체의 서비스 제10조
              (서비스 이용요금) 1. 서비스 이용요금(이하 “이용요금”이라 합니다)은
              원칙적으로 무료입니다. 그러나 일부 서비스(기능) 또는 콘텐츠(이하
              “유료 서비스 등”이라 합니다)의 경우 유료로 제공될 수 있습니다. 2.
              서비스 제공자는 유료 서비스 등의 가격 및 지급방법, 지급시기 등
              구체적인 사항을 정하여 서비스 공지사항 또는 게시판을 통하여
              게시합니다. 3. 이용요금에 관한 사항(기존에 무료로 제공되던
              서비스의 유료화 등을 포함합니다)은 서비스 제공자의 정책에 따라
              변경될 수 있습니다. 4. 서비스 제공자는 이용요금에 관한 사항을
              변경하는 경우, 변경일로부터 적어도 30일 이전까지 BEEDLY 웹 또는
              사이트 게시, 이메일 또는 서면을 통한 방법으로 고객에게 해당 사항을
              통지합니다. 위 변경 내지 인상의 효력은 통지상에 명기한
              변경일로부터 유효하게 발생하며, 위 변경에 동의하지 않는 고객은
              이용계약을 해지할 수 있습니다. 5. 회원은 서비스 제공자와의 별도
              합의를 통하여 본 조와 다른 내용으로 이용요금에 관한 사항을 정할 수
              있습니다. 서비스 제공자와 이용자 사이에 별도 체결된 계약서의
              내용은 서비스 공지사항 또는 게시판의 게시된 회원은 회사와의 별도
              합의를 통하여 본 조와 다른 내용으로 이용요금에 관한 사항을 정할 수
              있습니다. 서비스 제공자와 이용자 사이에 별도 체결된 계약서의
              내용은 서비스 공지사항 또는 게시판의 게시된 내용에 대하여 효력상
              우선합니다. 6. 이용자가 서비스를 이용하는 과정에서 통신사업자
              등과의 거래관계에서 발생하는 데이터 통신 요금은 제1항의 이용요금과
              별개의 것이며, 서비스 제공자는 위 데이터 통신 요금과 관련하여
              어떠한 의무 또는 책임도 부담하지 않음을 분명히 합니다. 제11조
              (서비스의 제공) 1. 서비스 제공자는 관련 법령상 허용되는 그리고
              기술적으로 가능한 범위 내에서 제9조의 서비스를 제공합니다. 2.
              이용자가 서비스를 이용하는 국가 및 이용자의 단말기 모델에 따라
              서비스 제공자가 제공하는 서비스의 내용 및/또는 범위가 달라질 수
              있습니다. 일부 서비스의 경우 이용자 디바이스의 특정 기능에의 접근
              권한이 필요하며, 이용자가 접근 권한을 불허하는 경우 관련 서비스의
              이용이 제한될 수 있습니다. 3. 이용자는 원칙적으로 단말기가 통신
              네트워크에 연결된 상태에서 서비스의 기능을 정상적으로 이용할 수
              있습니다. 단말기가 통신 네트워크에 연결되지 않은 경우, 일부
              서비스의 이용이 제한될 수 있습니다. 4. 서비스 제공자는 업무상 또는
              기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 이용자에게
              서비스를 제공합니다. 다만 서비스 제공자는 정기 점검 등의 필요가
              있는 경우 일정 기간 동안 서비스의 제공을 제한할 수 있으며, 이 경우
              서비스 제공자는 이러한 사실을 이용자에게 사전 통지합니다. 5.
              서비스 제공자는 서비스의 이용 가능한 시간을 별도로 정할 수 있으며
              이 경우 그 내용을 이용자에게 사전에 통지합니다. 서비스 제공자가
              통제할 수 없는 사유로 발생한 서비스 중단에 대하여 사전 통지가
              불가능한 경우에는 이를 사후에 통지할 수 있습니다. 6. 서비스
              제공자는 내부 정책 및 각 유형에 따라 이용자를 등급별로 구분하여
              제공하는 서비스의 내용 및 메뉴, 이용시간, 이용횟수 등을 세분하고
              그 이용에 차등을 둘 수 있으며, 이 경우 서비스 제공자는 이러한
              사실을 해당 이용자에게 사전 통지합니다. 제12조 (서비스의 이용
              제한) 1. 서비스 제공자는 이용자가 제16조의 의무 및 기타 이 약관상
              의무를 위반하는 경우, 해당 이용자에 대하여 다음 각 호의 이용제한
              조치를 단계적으로 취할 수 있습니다. 가. 시정요구 나. 일시정지 다.
              영구이용정지 2. 본 조의 이용제한 조치에 관한 조건 및 세부내용은
              서비스 제공자의 이용제한정책 및 개별 서비스상의 운영정책을 통하여
              정합니다. 제13조 (서비스의 변경 및 중단, 종료) 1. 서비스 제공자는
              다음 각 호의 경우 이용자에 대하여 제공하는 서비스의 전부 또는
              일부를 일시적으로 변경하거나 중단할 수 있습니다. 가. 설비의
              보수점검, 교체 등 공사로 인하여 부득이한 경우 나. 정전, 제반
              설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에
              지장이 있는 경우 다. 국가기관 또는 정부조직(방송통신위원회,
              한국정보보호진흥원 등), 수사기관, 법원 등의 행정 또는 사법적 처분
              등에 따라 법상 서비스의 제공을 제한 또는 중단하여야 하는 경우 라.
              기타 서비스 제공자의 운영상, 기술상 필요 등 상당한 이유가 있는
              경우 2. 서비스 제공자는 다음 각 호의 경우 서비스의 제공을
              영구적으로 종료할 수 있습니다. 가. 국가기관 또는
              정부조직(방송통신위원회, 한국정보보호진흥원 등), 수사기관, 법원
              등의 행정 또는 사법적 처분 등에 따라 법상 서비스의 제공을
              종료하여야 하는 경우 나. 기타 경영상, 운영정책상, 기술상 사유
              등으로 인하여 서비스 제공자가 서비스 제공을 계속할 수 없는 상당한
              이유가 있는 경우 3. 본 조에 따라 서비스를 변경 또는 중단(제2항의
              종료를 포함하며, 이하 같습니다)하는 경우, 서비스 제공자는 사전에
              다음 각 호의 사항을 제7조에 정한 방법으로 이용자에게 통지하여야
              합니다. 다만, 사전에 통지할 수 없는 부득이한 사유가 있는 경우
              서비스 제공자는 서비스의 제공을 변경 또는 중단하고 나서 사후적으로
              이용자에 대한 통지를 할 수 있습니다. 가. 서비스 변경(또는 중단)
              사유 나. 서비스 변경일(또는 중단일) 다. 변경될 서비스의
              내용(서비스 변경의 경우) 4. 본 조에 따른 서비스의 변경 또는 중단과
              관련하여, 서비스 제공자는 관련 법령 또는 개별 계약상의 근거가 없는
              이상 이용자에 대하여 별도의 배상 또는 보상책임을 부담하지
              않습니다. 다만, 유료 서비스를 이용한 회원의 경우, 서비스 제공자는
              서비스의 변경 또는 중단으로 인한 서비스 미사용 부분 관련
              이용대금을 회원에게 환불합니다. 제14조 (광고 기타 정보의 제공) 1.
              서비스 제공자는 서비스 이용과 관련한 정보를 제7조에 정한 방법으로
              이용자에게 제공할 수 있습니다. 이용자는 관련 법령에 따른 거래관련
              정보 및 고객문의 등에 대한 답변 등을 제외하고는 언제든지 서비스
              제공자가 제공하는 정보가 포함된 이메일의 수신을 거절할 수
              있습니다. 2. 서비스 제공자는 서비스 화면, 웹사이트, 이메일 등을
              통하여 이용자에게 광고 등 정보를 제공할 수 있습니다. 이용자는
              서비스 제공자에 대한 의사표시로서 광고가 포함된 이메일에 대한
              수신을 거절할 수 있습니다."
            ></StyledText>
          </div>
          <strong style={{ fontSize: "20px" }}>
            제3장 계약 당사자의 권리 의무
          </strong>
          <StyledText
            text="제15조 (서비스 제공자의 일반 의무) 1. 서비스 제공자는 이용자에 대한
          서비스 제공과 관련하여 관련 법령 및 이 약관, 미풍양속에 반하는 행위를
          하지 않으며, 계속적이고 안정적인 서비스 제공을 위하여 최선을 다합니다.
          2. 서비스 제공자는 이용자가 안전하게 서비스를 이용할 수 있도록
          이용자의 개인정보(신용정보 포함)를 보호하기 위하여 최선을 다하며,
          개인정보처리방침을 공시하고 준수합니다. 3. 서비스 제공자는 서비스
          이용과 관련한 이용자의 불만 또는 피해구제요청을 적절하게 처리할 수
          있도록 필요한 인력 및 시스템을 구축 및 유지할 수 있도록 최선을
          다합니다. 4. 서비스 제공자는 서비스 이용과 관련하여 이용자가 정당한
          의견 또는 불만을 제기하는 경우, 이를 처리하고 이메일 등을 통하여
          이용자에게 그 처리과정 및 결과를 신속하게 전달합니다. 제16조 (이용자의
          일반 의무) 1. 이용자는 서비스 이용과 관련하여 다음 각 호의 행위를
          하여서는 아니 됩니다. 가. 가입신청 또는 회원정보 변경 시 허위의 내용을
          등록하는 행위 나. 타인의 개인정보, 아이디 및 비밀번호 등 서비스 이용
          정보 등을 도용하는 행위 다. 서비스 제공자의 사전 승낙 없이 서비스
          제공자가 서비스 상에 게시한 정보를 변경 또는 삭제하는 행위 라. 서비스
          제공자 및 타인의 지식재산권, 인격권, 명예권 기타 권리를 침해하는 행위
          마. 서비스 정보통신망에 장애를 유발시킬 수 있는 내용의 정보, 문장,
          도형 등을 서비스 제공자가 관리·운영하는 정보통신망에 유포하는 행위 바.
          서비스 운영을 고의로 방해하거나 서비스의 안정적 운영을 방해할 수 있는
          정보를 전송하는 행위 사. 서비스 상의 콘텐츠를 본 약관에 명시된 목적
          이외의 용도로 사용하는 행위 아. 기타 미풍양속에 위반하거나 부당한 행위
          2. 이용자는 서비스의 이용과 관련하여 관계 법령, 약관, 세부이용지침,
          서비스 이용안내 및 서비스 제공자가 통지한 공지사항 등을 준수하여야
          하며, 기타 서비스 제공자의 업무를 방해하는 행위를 하여서는 안됩니다.
          3. 이용자는 서비스 제공자의 사전 승낙 없이는 서비스 제공자가 제공하는
          서비스를 이용하여 서비스 제공자의 영업과 동종의 또는 유사한 영업을
          영위할 수 없습니다. 4. 서비스 제공자는 서비스 제공자의 사전 승낙 없이
          이용자가 행한 제3항의 동종·유사 영업에 대하여 어떠한 책임도 부담하지
          않으며, 이용자의 위 영업으로 인하여 서비스 제공자에게 손해가 발생한
          경우 해당 이용자는 서비스 제공자가 입은 손해를 전액 배상하여야 합니다.
          5. 이용자가 본 조의 의무를 위반하는 경우, 서비스 제공자는 관계법령상
          허용되는 범위 내에서 그에 대한 (i) 관련 콘텐츠의 삭제, (ii) 서비스
          이용제한 기타 필요한 조치를 취할 수 있습니다. 제17조 (이용자의 계정
          정보 관리에 대한 의무 및 책임) 1. 이용자의 계정 정보(이메일 주소,
          비밀번호, 유저네임 등을 포함합니다)에 관한 관리책임은 이용자 자신에게
          있으며, 이용자는 자신의 계정 정보를 제3자가 이용하도록 하여서는
          안됩니다. 2. 이용자는 제3자가 자신의 계정 정보 등 개인정보를 이용하고
          있음을 인지한 경우 즉시 비밀번호 등을 변경하고, 서비스 제공자에 이러한
          사실을 통지하고 이후 서비스 제공자의 안내에 따라야 합니다. 3. 제2항의
          경우에 해당 이용자가 서비스 제공자에게 제3자의 개인정보 이용 사실 등을
          통지하지 않거나, 서비스 제공자의 안내에 따르지 않음에 따라 발생한
          불이익에 대하여, 서비스 제공자는 어떠한 책임도 부담하지 않습니다.
          제18조 (권리의 귀속) 1. 서비스 제공자가 서비스와 관련하여 이용자에게
          제공하는 서비스, 웹사이트, 소프트웨어 기타 일체의 정보 및 자료에 대한
          소유권 및 특허권, 저작권 기타 일체의 지식재산권은 서비스 제공자에
          귀속합니다. 2. 이용결과물에 대한 권리는 저작자인 이용자 본인에게
          귀속합니다. 한편, 서비스 제공자는 비상업적 용도에 이용결과물을
          자유롭게 이용할 수 있으며, 이용자로부터 별도 동의를 얻어 이용결과물을
          상업적 용도에 이용할 수 있습니다. 3. 이용자는 본 약관에서 명시적으로
          허용하는 범위 내에서 서비스 제공자가 제공하는 정보 및 자료 등을 이용할
          수 있으며, 서비스 이용과 관련하여 서비스 제공자의 지식재산권을
          침해하여서는 아니 됩니다."
          />
          <strong style={{ fontSize: "28px" }}>제4장 계약 해지</strong>
          <StyledText
            text=" 제19조 (이용계약의 해지) 1. 이용자는 언제든지 서비스 제공자와의
          이용계약을 해지할 수 있으며, 해지일 이후 14일간 동일한 아이디 또는
          계정으로 가입할 수 없습니다. 서비스 제공자는 이용자의 해지 요청이 있는
          경우 지체 없이 그에 따른 조치를 취하여야 합니다. 2. 서비스 제공자 또는
          이용자는 해지 사유가 발생하는 경우 상대방에 대한 이메일 내지 서면
          통지를 통하여 이용계약을 해지할 수 있습니다. 3. 서비스 제공자는
          이용자에게 다음 각 호의 사유가 존재하는 경우 이메일 내지 서면을 통한
          사전 통지 후 이용계약을 해지할 수 있습니다. 가. 제8조 제2항의
          승낙거절사유가 존재하는 경우 나. 서비스 이용요금 지급을 연체하는 경우
          다. 제16조에 규정된 이용자의 의무를 위반하는 경우 라. 기타 서비스
          제공자가 해당 이용자에 대한 서비스의 제공을 거부할 만한 합리적 사유가
          존재하는 경우 4. 서비스 제공자 또는 이용자는 다음 각 호의 사유가
          존재하는 경우 상대방에 대한 이메일 내지 서면을 통한 통지 후 서비스
          이용계약을 해지할 수 있습니다. 가. 당사자 일방이 은행거래정지,
          강제집행, 회생절차 개시 또는 파산선고 등의 부도사유가 발생한 경우 나.
          당사자 일방이 기타 이 약관을 중대하게 위반하여 서비스 이용계약의
          유지가 사실상 불가능한 경우 5. 이용자가 현행법 위반 및 고의 또는
          중대한 과실로 서비스 제공자에 손해를 입힌 경우, 서비스 제공자는 사전
          통지 없이 해당 이용자와의 이용계약을 해지할 수 있습니다. 6. 제2항 내지
          제5항에 따라 이용계약이 해지되는 경우, 서비스 제공자는 제7조에 정한
          방법으로 이용자에게 다음 각 호의 사항을 통보합니다. 가. 해지사유 나.
          해지일 7. 회원이 이용계약을 해지(탈퇴)하는 경우, 서비스 제공자는 해지
          즉시 해당 회원 관련 정보를 영구히 삭제합니다. 제20조 (계약해지의 효과)
          1. 이용계약의 효력은 서비스 제공자가 이용자에게 이용계약 해지 통보를
          한 때에 소멸하며, 이용자는 이후 서비스를 이용할 수 없습니다. 2. 본
          조의 이용계약 해지에 따라, 서비스 제공자는 관련 법령 및
          개인정보처리방침 등에 따라 서비스 제공자가 보유하여야 하는 정보를
          제외한 이용자의 모든 개인정보 및 데이터, 이용자가 설정하였던 서비스에
          대한 개별 설정 등 일체의 정보를 삭제합니다. 단, 제18조에 정한 바에
          따른 서비스 제공자 소유의 정보 또는 서비스 제공자가 이용할 수 있는
          이용결과물 관련 정보는 예외로 합니다. 3. 본 조의 해지는 제21조의
          손해배상에 영향을 미치지 않습니다. 제5장 기타 제21조 (손해배상) 1.
          서비스 제공자는 이용자가 서비스를 이용함에 있어 서비스 제공자의 고의
          또는 중대한 과실로 인하여 입은 손해를 배상하여야 합니다. 2. 이용자가
          이 약관을 위반하여 서비스 제공자에 손해를 입힌 경우, 이용자는 이에
          대하여 고의 또는 과실이 없음을 입증하지 못하는 이상 서비스 제공자가
          입은 손해를 배상하여야 합니다. 제22조 (양도의 제한) 이용자는 약관 및
          이용계약에 따라 가지는 권리 및 계약상 지위를 제3자에게 양도, 판매,
          담보제공 등 처분할 수 없습니다. 제23조 (개인정보 등의 보호) 1. 서비스
          제공자는 이용계약을 위하여 이용자가 제공한 개인정보를 서비스 제공자의
          서비스 운영을 위한 목적 이외의 용도로 사용하거나 이용자의 동의 없이
          제3자에게 제공하지 않습니다. 단, 다음 각 호의 경우에는 예외로 합니다.
          가. 법령에 근거하여 이용자정보의 이용과 제3자에 대한 정보제공이
          허용되는 경우 나. 기타 서비스 제공자의 약관 및 정책에 따라 이용자의
          동의를 구한 경우 2. 개인정보의 보호 및 사용에 대해서는 관련 법령 및
          서비스 제공자의 개인정보처리방침이 적용됩니다. 서비스 제공자가
          서비스상 또는 공시사항, 게시판을 통하여 게재, 공시하는
          개인정보처리방침은 약관의 일부를 구성하며 이용자는 그 내용에
          동의합니다. 3. 서비스 제공자는 수집된 개인정보의 처리 등의 업무를
          스스로 수행하는 것을 원칙으로 하나, 필요한 경우 업무의 일부 또는
          전부를 제3자에게 위탁할 수 있습니다. 이와 관련한 제반 사항은
          개인정보처리방침을 통하여 이용자에게 고지, 안내합니다. 4. 서비스
          제공자는 이용자의 개인정보를 보호하기 위하여 『정보통신망 이용촉진 및
          정보보호 등에 관한 법률』 및 『개인정보 보호법』 등 관계 법령에서
          정하는 바를 준수합니다. 5. 서비스 제공자는 이용자 또는 이용자가 소지한
          물건의 위치정보를 보호하기 위하여 『위치정보의 보호 및 이용 등에 관한
          법률』 등 관계 법령에서 정하는 바를 준수합니다. 6. 서비스 제공자는
          이용자의 귀책사유로 인하여 노출된 이용자의 계정정보를 포함한 모든
          정보에 대해서 일체의 책임을 지지 않습니다. 제24조 (면책) 1. 서비스
          제공자는 서비스를 있는 그대로(As-Is) 제공하며, 서비스의 품질 또는
          성능, 적합성, 적시성, 안전성, 무오류성 등에 대하여 어떠한 주장이나
          보증도 하지 않습니다. 2. 서비스 제공자는 서비스의 제공 및 이용과
          관련하여 이용자와 다른 이용자 사이에 발생한 분쟁(이용결과물의
          지식재산권 침해 관련 분쟁을 포함하며 이에 제한되지 아니합니다)에
          대하여 어떠한 책임도 부담하지 않습니다. 3. 서비스 제공자는 천재지변
          또는 이에 준하는 불가항력 또는 이용자에게 책임 있는 사유로 인하여
          서비스를 제공할 수 없는 경우에는 이와 관련한 책임을 부담하지 않습니다.
          4. 서비스 제공자는 이용자에게 책임 있는 사유로 인한 서비스 이용 장애에
          대하여는 책임을 부담하지 않습니다. 서비스 제공자는 서비스 제공자가
          제공하는 서비스 또는 광고를 매개로 하여 이용자 간 또는 이용자와 제3자
          사이에서 이루어진 거래 등에 대하여 어떠한 책임도 부담하지 않습니다. 5.
          서비스 제공자는 관련 법령에 특별한 규정이 없는 이상 무료로 제공되는
          서비스와 관련하여 이용자에 대하여 법적 책임을 부담하지 않습니다.
          제25조 (분쟁의 해결) 1. 이 약관 및 이용계약에 관한 분쟁은 대한민국
          법을 준거법으로 합니다. 2. 약관 및 이용계약에 관하여 서비스 제공자와
          이용자 사이에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 제1심
          관할법원으로 하여 해결합니다."
          />
          <strong style={{ fontSize: "20px" }}>부 칙</strong>
          제1조 (개정일) 이 약관은 2022년 8월 18일부터 시행합니다.
        </Box>
      </div>
    </BottomSheet>
  );
};
