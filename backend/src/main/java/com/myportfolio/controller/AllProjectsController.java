package com.myportfolio.controller;

import com.myportfolio.dto.AllProjectsDto;
import com.myportfolio.service.AllProjectsService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class AllProjectsController {
  private final AllProjectsService service;

  public AllProjectsController(AllProjectsService service) {
    this.service = service;
  }

  @GetMapping("/all-projects")
  public Mono<List<AllProjectsDto>> allProjects() {
    return service.allProjects();
  }
}
