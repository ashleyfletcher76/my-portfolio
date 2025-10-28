package com.myportfolio.client;

import java.util.Map;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class GithubClient {
  private final WebClient client;

  public GithubClient(WebClient client) {
    this.client = client;
  }

  public Mono<Map<String, Object>> mostRecentRepo(String user) {
    return client
        .get()
        .uri(
            uri ->
                uri.path("/users/{user}/repos")
                    .queryParam("sort", "pushed")
                    .queryParam("per_page", 1)
                    .build(user))
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<Map<String, Object>>() {})
        .next();
  }
}
