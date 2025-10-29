package com.myportfolio.dto;

public record AllProjectsDto(
    String name, String description, String language, String lastUpdatedIso, String url) {}
