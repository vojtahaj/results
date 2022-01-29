//package com.example.live.results.security;

import com.example.live.results.dao.UserRepository;
//import com.example.live.results.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.context.SecurityContextHolder;

//public class AuthenticationSystem {
//    private static UserRepository userRepository;
//
//    @Autowired
//    public AuthenticationSystem(UserRepository userRepository){
//        this.userRepository = userRepository;
//    }
//
//    public static boolean isLogged(){
//        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        return null != authentication && !("annonymousUser").equals(authentication.getName());
//    }
//
//    public static void updateSignedInUser(User person) {
//        final User user = new User(person.getEmail(), person.getPassword(), AuthorityUtils.createAuthorityList(person.toString()));
//        SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(user, user.getPassword(), AuthorityUtils.createAuthorityList(person.getRolesInString())));
//    }
//
//}
