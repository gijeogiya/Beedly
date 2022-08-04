package com.ssafy.beedly.repository;

import com.ssafy.beedly.domain.PersonalAuction;
import com.ssafy.beedly.domain.PersonalFavorite;
import com.ssafy.beedly.domain.PersonalProduct;
import com.ssafy.beedly.dto.PersonalProductCloseDto;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PersonalProductRepository extends JpaRepository<PersonalProduct, Long>{




    //------------ 2. 카테고리별로 정렬하기
    @Query(value="select p from PersonalProduct p join fetch p.category c where c.categoryName = :categoryName")
    Slice<PersonalProduct> findProductByCategory(@Param("categoryName")String categoryName, @Param("pageable") Pageable pageable);

    ///------------ 2. 현재 진행중인 상품 카테고리별로 정렬하기
    @Query(value="select pa from PersonalAuction pa join fetch pa.personalProduct p"
            +" join fetch p.category c"+" where c.categoryName = :categoryName and  pa.activeFlag = true")
    Slice<PersonalAuction> findProductOnAirByCategory(@Param("categoryName")String categoryName, @Param("pageable") Pageable pageable);

    //----------- 4. size로 찾기
    @Query(value = "select p from PersonalProduct p where p.width =:width and p.height =:height")
    Slice<PersonalProduct> findProductBySize(@Param("width")Integer width, @Param("height")Integer height, @Param("pageable") Pageable pageable);

    //---------- 5. Product 상세 찾기
    //----------- 5-1. Product 찜하기
    @Query(value="select new com.ssafy.beedly.dto.PersonalProductCloseDto(p.id, ) from product p")
    PersonalProductCloseDto findPersonalProductCloseById(@Param("id") Long id);


}
