package com.ssafy.beedly.service;

import com.ssafy.beedly.common.exception.NotFoundException;
import com.ssafy.beedly.common.exception.NotMatchException;
import com.ssafy.beedly.domain.PersonalFavorite;
import com.ssafy.beedly.domain.PersonalProduct;
import com.ssafy.beedly.domain.User;
import com.ssafy.beedly.repository.PersonalFavoriteRepository;
import com.ssafy.beedly.repository.PersonalProductRepository;
import com.ssafy.beedly.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static com.ssafy.beedly.common.exception.NotFoundException.*;
import static com.ssafy.beedly.common.exception.NotMatchException.FAVORITE_NOT_MATCH;

@Service
@RequiredArgsConstructor
public class PersonalFavoriteService {

    private final PersonalFavoriteRepository personalFavoriteRepository;
    private final PersonalProductRepository personalProductRepository;
    private final UserRepository userRepository;

    // 상시 상품에 찜하기
    public Long createFavoriteProduct(User user, Long productId) {
        User findUser = userRepository.findById(user.getId())
                .orElseThrow(() -> new NotFoundException(USER_NOT_FOUND));
        PersonalProduct findProduct = personalProductRepository.findById(productId)
                .orElseThrow(() -> new NotFoundException(PRODUCT_NOT_FOUND));
        findProduct.addFavoriteCount();

        return personalFavoriteRepository.save(PersonalFavorite.createPersonalFavorite(findUser, findProduct)).getId();
    }

    public void deleteFavoriteProduct(User user, Long favoriteId) {
        PersonalFavorite personalFavorite = personalFavoriteRepository.findById(favoriteId)
                .orElseThrow(() -> new NotFoundException(FAVORITE_NOT_FOUND));
        if (personalFavorite.getUser().getId() != user.getId()) {
            throw new NotMatchException(FAVORITE_NOT_MATCH);
        }
        PersonalProduct personalProduct = personalProductRepository.findById(personalFavorite.getPersonalProduct().getId())
                .orElseThrow(() -> new NotFoundException(PRODUCT_NOT_FOUND));
        personalProduct.minusFavoriteCount();

        personalFavoriteRepository.delete(personalFavorite);
    }
}
