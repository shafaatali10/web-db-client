package com.shafaat.postgres.connector.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.json.JSONArray;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QueryResults {

    private List<String> columns = new ArrayList<String>();
    private Integer columnCount;
    private JSONArray data;

}
