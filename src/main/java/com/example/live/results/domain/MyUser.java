package com.example.live.results.domain;
//
//import lombok.*;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import javax.persistence.*;
//
//@Entity
//@Data
//@ToString(exclude = "password")
//@NoArgsConstructor
//public class MyUser {
//
//    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();
//
//    public static PasswordEncoder getPasswordEncoder() {
//        return PASSWORD_ENCODER;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = PASSWORD_ENCODER.encode(password);
//    }
//
//    @Column(nullable = false, unique = true)
//    private String email;
//    @Column(nullable = false)
//    private String password;
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Setter(AccessLevel.NONE)
//    private Long id;
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    @Override
//    public String toString() {
//        return "MyUser{" +
//                "email='" + email + '\'' +
//                ", id=" + id +
//                '}';
//    }
//}
