package com.shafaat.web.client.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.shafaat.postgres.connector.model.QueryResults;
import com.shafaat.postgres.connector.service.DBServiceImpl;
import com.shafaat.web.client.model.DBModel;
import com.shafaat.web.client.model.QueryResultsResponse;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DBService {


    public QueryResultsResponse executeQuery(DBModel request) throws Exception {

        DBServiceImpl dbServiceImpl = new DBServiceImpl(request.getDataSource());
        QueryResults results = dbServiceImpl.executeQuery(request.getQuery());

        return new QueryResultsResponse(results);
    }
}
