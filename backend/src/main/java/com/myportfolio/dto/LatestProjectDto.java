package com.myportfolio.dto;

public record LatestProjectDto(
    String name, String description, String url, String lastUpdatedIso) {}
