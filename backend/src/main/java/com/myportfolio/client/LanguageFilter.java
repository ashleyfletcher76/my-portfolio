package com.myportfolio.client;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class LanguageFilter {

  private static final double MIN_PERCENT = 0.20;

  private LanguageFilter() {}

  public static List<String> filterSignificantLanguages(Map<String, Integer> map) {
    if (map == null || map.isEmpty()) return List.of();

    long totalBytes =
        map.values().stream().filter(Objects::nonNull).mapToLong(Integer::longValue).sum();

    if (totalBytes <= 0) return List.of();

    double threshold = totalBytes * MIN_PERCENT;

    List<String> result = new ArrayList<>();

    map.entrySet().stream()
        .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
        .forEach(
            entry -> {
              Integer bytes = entry.getValue();
              if (bytes != null && bytes >= threshold) {
                result.add(entry.getKey());
              }
            });

    return result;
  }
}
