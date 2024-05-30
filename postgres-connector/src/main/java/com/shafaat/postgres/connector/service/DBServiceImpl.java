package com.shafaat.postgres.connector.service;

import com.shafaat.postgres.connector.model.DataSource;
import com.shafaat.postgres.connector.model.QueryResults;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class DBServiceImpl {

    private DataSource dataSource;

    public DBServiceImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public QueryResults executeQuery(String query) throws Exception {

        QueryResults results = new QueryResults();

        String url
                = "jdbc:postgresql://" + dataSource.getHost() + ":" + dataSource.getPort() + "/" + dataSource.getDatabase(); // table details
        String username = dataSource.getUsername();
        String password = dataSource.getPassword();


        Connection con = DriverManager.getConnection(
                url, username, password);
        System.out.println(
                "Connection Established successfully to "+ url);
        Statement st = con.createStatement();
        ResultSet rs
                = st.executeQuery(query); // Execute query



        ResultSetMetaData metaData = rs.getMetaData();


        int columnCount = metaData.getColumnCount();
        results.setColumnCount(columnCount);

        List<String> columns = IntStream.range(0, columnCount)
                .mapToObj(i -> {
                    try {
                        return metaData.getColumnName(i + 1);
                    } catch (SQLException e) {
                        e.printStackTrace();
                        return "?";
                    }
                })
                .collect(Collectors.toList());


        results.setColumns(columns);
        JSONArray data = new JSONArray();
        while (rs.next()) {
            JSONObject row = new JSONObject();
            columns.forEach(col -> {
                try {
                    row.put(col, rs.getObject(col));
                } catch (JSONException | SQLException e) {
                    e.printStackTrace();
                }
            });
            data.put(row);
        }


        results.setData(data);

        st.close(); // close statement
        con.close(); // close connection
        System.out.println("Connection Closed....");

        return results;
    }
}
