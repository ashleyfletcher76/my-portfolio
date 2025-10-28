package com.myportfolio.controller;

import java.time.Instant;
import java.util.Map;
import org.springframework.boot.info.BuildProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class VersionController {
  private final BuildProperties buildProperties;

  public VersionController(BuildProperties buildProperties) {
    this.buildProperties = buildProperties;
  }

  @GetMapping("/version")
  public Map<String, Object> version() {
    return Map.of(
        "name", buildProperties.getName(),
        "version", buildProperties.getVersion(),
        "builtAt", buildProperties.getTime() != null ? buildProperties.getTime() : Instant.EPOCH);
  }
}
