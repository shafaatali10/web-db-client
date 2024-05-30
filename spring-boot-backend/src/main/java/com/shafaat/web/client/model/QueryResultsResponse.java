package com.shafaat.web.client.model;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.shafaat.postgres.connector.model.QueryResults;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class QueryResultsResponse {

    private List<String> columns = new ArrayList();
    private Integer columnCount;
    private JsonNode data;

    public QueryResultsResponse(QueryResults queryResults){
        this.columns = queryResults.getColumns();
        this.columnCount = queryResults.getColumnCount();

        ObjectMapper mapper = new ObjectMapper();
        try{
            this.setData(mapper.readTree(queryResults.getData().toString()));
        }catch (Exception ex){
            ex.printStackTrace();
        }

    }
}
