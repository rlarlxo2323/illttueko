package com.illttueko.lrs.test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/test")
public class TestController {
    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public TestController() {}

    @GetMapping("/")
    public String hello() {
        return "index";
    }


    /**
     * 로그 테스트 API
     * [GET] /test/log
     * @return String
     */
//    @ResponseBody
    @GetMapping("/log")
    public String getAll() {
        System.out.println("테스트");
//        trace, debug 레벨은 Console X, 파일 로깅 X
//        logger.trace("TRACE Level 테스트");
//        logger.debug("DEBUG Level 테스트");

//        info 레벨은 Console 로깅 O, 파일 로깅 X
        logger.info("INFO Level 테스트");
//        warn 레벨은 Console 로깅 O, 파일 로깅 O
        logger.warn("Warn Level 테스트");
//        error 레벨은 Console 로깅 O, 파일 로깅 O (app.log 뿐만 아니라 error.log 에도 로깅 됨)
//        app.log 와 error.log 는 날짜가 바뀌면 자동으로 *.gz 으로 압축 백업됨
        logger.error("ERROR Level 테스트");

        return "index";
    }


    /**
     *  로그인 맵핑 -비회원
     * */
    @RequestMapping(value = "/login") //    , method = RequestMethod.POST
    public String login(){

        return "login/login";
    }


    /**
     *  첫 로그인 시 정보 변경 -회원
     * */
    @RequestMapping("/first-login")
    public String loginModify(){
        return "login/first-login";
    }


    /**
     * 시간표 조회 맵핑 -비회원
     */
    @RequestMapping("/schedule")
    public String schedule() {
        return "schedule/schedule";
    }

    /**
     * 시간표 관리 맵핑 -관리자
     */
    @RequestMapping("/scheduleManagement")
    public String scheduleManagement() {
        return "schedule/scheduleManagement";
    }


    /**
     *  시간표 조회 맵핑 -비회원
     * */
    @RequestMapping("/user-management")
    public String schedule911() {
        return "user/user-management";
    }

}
