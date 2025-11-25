package com.myportfolio.client;

import java.util.List;
import java.util.Map;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class GithubClient {
  private final WebClient client;
  private static final ParameterizedTypeReference<Map<String, Object>> MAP =
      new ParameterizedTypeReference<>() {};
  private static final ParameterizedTypeReference<Map<String, Integer>> LANG_MAP =
      new ParameterizedTypeReference<>() {};

  public GithubClient(WebClient client) {
    this.client = client;
  }

  public Flux<Map<String, Object>> listUserRepos(String user) {
    return client
        .get()
        .uri(
            uri ->
                uri.path("/users/{user}/repos")
                    .queryParam("sort", "updated")
                    .queryParam("per_page", 100)
                    .build(user))
        .retrieve()
        .bodyToFlux(MAP);
  }

  public Mono<List<String>> repoLanguages(String languagesUrl) {
    return client
        .get()
        .uri(languagesUrl)
        .retrieve()
        .bodyToMono(LANG_MAP)
        .map(LanguageFilter::filterSignificantLanguages)
        .defaultIfEmpty(List.of());
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
