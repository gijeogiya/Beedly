import { Box } from "grommet";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoryBar } from "../components/MainCategoryBar";


export default function ProductListPage() {
  const navigate = useNavigate();

  const purchaseTest = () => {
    navigate("/purchase", {
      state: {
        auctionType: "P",
        soldId: 27,
        productId: 74,
      },
    });
  };
  return (
    <div>
      <CategoryBar/>
      
    </div>
    // <Box margin="small">
    //   ProductListPage
    //   <button>
    //     <Link to="/productRegister">상시경매 작품 등록화면</Link>
    //   </button>
    //   <button>
    //     <Link to="/specialAuction">기획전 경매 게시글 등록화면</Link>
    //   </button>
    //   <button>
    //     <Link to="/specialProduct">기획전 경매 상품 등록화면</Link>
    //   </button>
    //   <button>
    //     <Link to="/productDetail/39">39번 작품</Link>
    //   </button>
    //   <button onClick={purchaseTest}>27번 결제</button>
    // </Box>
  );
}
