package com.myportfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

  @Bean
  public WebClient githubWebClient(GithubProperties props) {
    return WebClient.builder()
        .baseUrl("https://api.github.com")
        .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + props.getToken())
        .defaultHeader(HttpHeaders.ACCEPT, "application/vnd.github+json")
        .defaultHeader(HttpHeaders.USER_AGENT, "myportfolio-app/1.0")
        .build();
  }
}
