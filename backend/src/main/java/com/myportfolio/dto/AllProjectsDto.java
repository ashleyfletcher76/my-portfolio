package com.myportfolio.dto;

import java.util.List;

public record AllProjectsDto(
    String name, String description, List<String> languages, String lastUpdatedIso, String url) {}
