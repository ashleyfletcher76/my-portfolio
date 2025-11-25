package com.myportfolio.mappers;

import com.myportfolio.dto.AllProjectsDto;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Component;

@Component
public class AllProjectsMapper {
  public AllProjectsDto toDto(Map<String, Object> dto, List<String> languages) {
    String name = (String) dto.getOrDefault("name", "");
    String description = (String) dto.getOrDefault("description", "");
    String lastUpdatedIso = (String) dto.getOrDefault("pushed_at", "");
    String htmlUrl = (String) dto.getOrDefault("html_url", "");
    return new AllProjectsDto(name, description, languages, lastUpdatedIso, htmlUrl);
  }
}
