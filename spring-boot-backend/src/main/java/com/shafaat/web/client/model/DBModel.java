package com.shafaat.web.client.model;

import com.shafaat.postgres.connector.model.DataSource;
import lombok.Data;

@Data
public class DBModel {
    private DataSource dataSource;
    private String query;
}
