package com.ssafy.beedly.service;

import com.ssafy.beedly.client.KakaoLoginApi;
import com.ssafy.beedly.common.exception.DuplicateException;
import com.ssafy.beedly.common.exception.NotFoundException;
import com.ssafy.beedly.common.exception.NotMatchException;
import com.ssafy.beedly.config.security.util.JwtUtil;
import com.ssafy.beedly.domain.User;
import com.ssafy.beedly.dto.user.kakao.KakaoUserResponse;
import com.ssafy.beedly.dto.user.request.UserCreateRequest;
import com.ssafy.beedly.dto.user.request.UserLoginRequest;
import com.ssafy.beedly.dto.user.request.UserUpdateRequest;
import com.ssafy.beedly.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static com.ssafy.beedly.common.exception.NotFoundException.*;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    @Value("${kakao.restapikey}")
    private String restApiKey;

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    private final JwtUtil jwtUtil;

    // 카카오 로그인
    @Transactional
    public String kakaoLogin(KakaoUserResponse kakaoUserInfo) {
        Long kakaoId = Long.valueOf(kakaoUserInfo.getId());
        Optional<User> findUser = userRepository.findByKakaoId(kakaoId);
        Long userId;
        if (!findUser.isPresent()) { // 유저정보 없으면 회원가입 후 토큰 발급
            User saveUser = userRepository.save(User.createUser(kakaoId));
            userId = saveUser.getId();

            // 관리자 계정 가입시키는거 로직 추가해야댐.

        } else { // 유저정보 있으면 바로 토큰 발급
            userId = findUser.get().getId();
        }
        return jwtUtil.createToken(userId);
    }

    public String getKakaoAccessToken(String code) {
        return KakaoLoginApi.getKakaoAccessToken(restApiKey, code);
    }

    public KakaoUserResponse getKakaoUserInfo(String kakaoAccessToken) {
        return KakaoLoginApi.getKakaoUserInfo(kakaoAccessToken);
    }

    // 회원 정보 수정
    @Transactional
    public void updateUser(UserUpdateRequest request, User user) {
        User findUser = userRepository.findById(user.getId())
                .orElseThrow(() -> new NotFoundException(USER_NOT_FOUND));

        findUser.updateUser(request);
    }

    /* ******************************* 연습코드 ********************************* */

    @Transactional
    public void createUser(UserCreateRequest request) {
        if(userRepository.findByUserEmail(request.getEmail()).isPresent()){
            throw new DuplicateException("이미 가입된 회원입니다.");
        }

        User user = User.createUser_temp(request.getEmail(), passwordEncoder.encode(request.getPw()), request.getName());
        userRepository.save(user);
    }

    public String loginUser(UserLoginRequest request) {

        User findUser = userRepository.findByUserEmail(request.getEmail())
                .orElseThrow(() -> new NotFoundException(USER_NOT_FOUND));

        if(!passwordEncoder.matches(request.getPw(), findUser.getUserPw())){
            throw new NotMatchException("회원의 비밀번호가 일치하지 않습니다.");
        }

        return jwtUtil.createToken(findUser.getId());
    }




}
