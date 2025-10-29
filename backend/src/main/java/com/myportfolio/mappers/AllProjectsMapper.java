package com.myportfolio.mappers;

import com.myportfolio.dto.AllProjectsDto;
import java.util.Map;
import org.springframework.stereotype.Component;

@Component
public class AllProjectsMapper {
  public AllProjectsDto toDto(Map<String, Object> dto) {
    String name = (String) dto.getOrDefault("name", "");
    String description = (String) dto.getOrDefault("description", "");
    String language = (String) (dto.get("language") != null ? dto.get("language") : "Unknown");
    String lastUpdatedIso = (String) dto.getOrDefault("pushed_at", "");
    String htmlUrl = (String) dto.getOrDefault("html_url", "");
    return new AllProjectsDto(name, description, language, lastUpdatedIso, htmlUrl);
  }
}
