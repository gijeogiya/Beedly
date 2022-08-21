import { Box, Spinner } from "grommet";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { StyledText } from "../components/Common";
import { postPersonalPay, postSpecialPay } from "../utils/apis/PayAPI";

export const KakaoPayRedirect = () => {
  const params = new URL(window.location.href).searchParams;
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [user, setUser] = useState();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  let success = params.get("imp_success");
  let errorMsg = params.get("error_msg");
  let merchantUid = params.get("merchant_uid");
  let soldId = merchantUid.split("_")[3];
  let auctionType = merchantUid.split("_")[0];
  // auctionType + "_order_no_" + soldId,
  useEffect(() => {
    console.log(params);
    console.log(success + ", " + errorMsg + ", " + soldId, auctionType);
    if (loading)
      if (success === true) {
        if (auctionType === "P")
          postPersonalPay(
            soldId,
            (response) => {
              console.log("결제 완료 API 호출 !!!", response);
              navigate(`/purchaseDetail/${soldId}`, {
                state: {
                  error_msg: errorMsg,
                  merchant_uid: merchantUid,
                  success: success,
                  soldId: soldId,
                  auctionType: auctionType,
                },
              });
            },
            (fail) => {
              console.log(fail);
            }
          );
        else if (auctionType === "S")
          postSpecialPay(
            soldId,
            (response) => {
              console.log("결제 완료 API 호출 !!!", response);
              navigate(`/purchaseDetail/${soldId}`, {
                state: {
                  error_msg: errorMsg,
                  merchant_uid: merchantUid,
                  success: success,
                  soldId: soldId,
                  auctionType: auctionType,
                },
              });
            },
            (fail) => {
              console.log(fail);
            }
          );
      } else {
        setLoading(false);
      }
    return () => setLoading(false);
  });
  const goBack = () => {
    navigate(-1);
  };
  if (loading) return <Spinner />;
  if (success === "false" || success === false)
    return (
      <Box align="center">
        <StyledText text="결제에 실패했습니다." />
        <StyledText text={errorMsg} />
        <Box direction="row" justify="center">
          <Button children="뒤로가기" onClick={goBack} />
        </Box>
      </Box>
    );
};
