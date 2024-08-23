package com.revature.controllers;

import com.revature.models.DTOs.LoginDTO;
import com.revature.models.DTOs.OutgoingUserDTO;
import com.revature.models.User;
import com.revature.services.AuthService;
import com.revature.utils.JwtTokenUtil;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
//set crossorigin to allow origin from our publicly deployed front end, and allow credentials
@CrossOrigin(origins="http://p1demofrontend.s3-website-us-east-1.amazonaws.com/", allowCredentials = "true")
public class AuthController {


    //Autowire AuthService
    private AuthService as;
    //Autowire JwtTokenUtil and AuthenticationManager
    private JwtTokenUtil jwtTokenUtil;
    private AuthenticationManager authenticationManager;

    @Autowired
    public AuthController(AuthService as, JwtTokenUtil jwtTokenUtil, AuthenticationManager authenticationManager) {
        this.as = as;
        this.jwtTokenUtil = jwtTokenUtil;
        this.authenticationManager = authenticationManager;
    }

    //NOTE: our HTTP Session is coming in via parameters this time (to be sent to the Service)
    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginDTO lDTO, HttpSession session){

        //attempt to log in (notice no direct calls of the Service/DAO - all Spring Sec.)
        try{

            //Authentication is now in charge of checking the username/password
            Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(lDTO.getUsername(), lDTO.getPassword())
            );

            //build up the user based on the validation above
            User user = (User) auth.getPrincipal();

            //finally, generate a JWT!
            String accessToken = jwtTokenUtil.generateAccessToken(user);

            //create the OutgoingUserDTO with JWT, and send it back to the front end
            OutgoingUserDTO outUser = new OutgoingUserDTO(user.getUserId(), user.getUsername(), user.getRole(), accessToken);

            return ResponseEntity.ok(outUser);

        } catch (Exception e){
            return ResponseEntity.status(401).body("Invalid Credentials");
        }

    }
}