package com.shafaat.postgres.connector.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DataSource {

    private String connectionString;
    private String host;
    private int port;
    private String username;
    private String password;
    private String database;
    private String schema;

}
