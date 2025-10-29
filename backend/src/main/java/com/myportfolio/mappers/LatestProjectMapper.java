package com.myportfolio.mappers;

import com.myportfolio.dto.LatestProjectDto;
import java.util.Map;
import org.springframework.stereotype.Component;

@Component
public class LatestProjectMapper {
  public LatestProjectDto toDto(Map<String, Object> dto) {
    String name = (String) dto.getOrDefault("name", "");
    String description = (String) dto.getOrDefault("description", "");
    String htmlUrl = (String) dto.getOrDefault("html_url", "");
    String lastUpdatedIso = (String) dto.getOrDefault("pushed_at", "");
    return new LatestProjectDto(name, description, htmlUrl, lastUpdatedIso);
  }
}
