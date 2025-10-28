package com.myportfolio.controller;

import com.myportfolio.dto.LatestProjectDto;
import com.myportfolio.service.LatestProjectService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/projects")
public class LatestProjectController {
  private final LatestProjectService service;

  public LatestProjectController(LatestProjectService service) {
    this.service = service;
  }

  @GetMapping("/latest")
  public Mono<LatestProjectDto> latest() {
    return service.latest();
  }
}
