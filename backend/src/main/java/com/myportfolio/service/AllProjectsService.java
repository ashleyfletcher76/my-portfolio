package com.myportfolio.service;

import com.github.benmanes.caffeine.cache.AsyncLoadingCache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.myportfolio.client.GithubClient;
import com.myportfolio.dto.AllProjectsDto;
import com.myportfolio.mappers.AllProjectsMapper;
import java.time.Duration;
import java.util.List;
import java.util.concurrent.Executor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class AllProjectsService {

  private final String user;

  private final AsyncLoadingCache<String, List<AllProjectsDto>> cache;

  public AllProjectsService(
      GithubClient githubClient,
      @Value("${github.user:ashleyfletcher76}") String user,
      AllProjectsMapper allProjectsMapper) {
    this.user = user;

    this.cache =
        Caffeine.newBuilder()
            .maximumSize(16)
            .expireAfterWrite(Duration.ofHours(1))
            .buildAsync(
                (String k, Executor executor) ->
                    githubClient
                        .listUserRepos(k)
                        .map(allProjectsMapper::toDto)
                        .collectList()
                        .toFuture());
  }

  public Mono<List<AllProjectsDto>> allProjects() {
    return Mono.fromFuture(cache.get(user));
  }
}
