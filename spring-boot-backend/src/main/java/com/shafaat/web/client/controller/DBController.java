package com.shafaat.web.client.controller;

import com.shafaat.web.client.model.DBModel;

import com.shafaat.web.client.model.QueryResultsResponse;
import com.shafaat.web.client.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class DBController {

    @Autowired
    DBService dbService;

    @PostMapping
    public QueryResultsResponse executeQuery(@RequestBody DBModel request) throws Exception {
        request.setQuery(request.getQuery().replaceAll(Character.toString(160), " "));
        return dbService.executeQuery(request);
    }

}
