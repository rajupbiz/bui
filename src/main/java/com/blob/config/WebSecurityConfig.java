package com.blob.config;

import org.springframework.context.annotation.Configuration;

@Configuration
//@EnableWebSecurity
public class WebSecurityConfig { // extends WebSecurityConfigurerAdapter {

/*	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http
		.formLogin().and()
			.authorizeRequests().antMatchers("/","/login.html","/index.html","/home.html").permitAll()
			.anyRequest().authenticated();
		
	}*/
	
	/*.and()
	.csrf().disable();*/
	
	/*
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		super.configure(auth);
	}
	
	@Override
	protected UserDetailsService userDetailsService() {
		return super.userDetailsService();
	}*/
}
