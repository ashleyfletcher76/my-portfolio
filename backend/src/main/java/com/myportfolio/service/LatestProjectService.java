package com.myportfolio.service;

import com.myportfolio.client.GithubClient;
import com.myportfolio.dto.LatestProjectDto;
import com.myportfolio.mappers.LatestProjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

@Service
public class LatestProjectService {

  private final GithubClient githubClient;
  private final String user;
  private final LatestProjectMapper latestProjectMapper;

  public LatestProjectService(
      GithubClient githubClient,
      @Value("${github.user:ashleyfletcher76}") String user,
      LatestProjectMapper latestProjectMapper) {
    this.githubClient = githubClient;
    this.user = user;
    this.latestProjectMapper = latestProjectMapper;
  }

  public Mono<LatestProjectDto> latest() {
    return githubClient
        .mostRecentRepo(user)
        .switchIfEmpty(
            Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND, "No repositories found")))
        .map(latestProjectMapper::toDto);
  }
}
