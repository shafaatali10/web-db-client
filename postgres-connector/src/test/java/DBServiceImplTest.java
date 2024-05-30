import com.shafaat.postgres.connector.model.DataSource;
import com.shafaat.postgres.connector.model.QueryResults;
import com.shafaat.postgres.connector.service.DBServiceImpl;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DBServiceImplTest {



    @Test
    public void dataSource1() throws Exception {

        DataSource dataSource1 = DataSource.builder()
                .host("192.168.56.105")
                .port(5432)
                .database("product_db")
                .username("product_user")
                .password("password")
                .build();

        DBServiceImpl postgresHelper = new DBServiceImpl(dataSource1);

        String query = "select *\n" +
                "from product_schema.product where id > 0;\n";

        QueryResults queryResults = postgresHelper.executeQuery(query);

        List<String> columns = queryResults.getColumns();

        assertEquals(queryResults.getColumnCount(), 3);
        assertEquals("id", columns.get(0));

        System.out.println(queryResults.getColumns());
        System.out.println(queryResults.getData());
    }

    @Test
    public void dataSource2() throws Exception {

        DataSource dataSource2 = DataSource.builder()
                .host("192.168.56.105")
                .port(5433)
                .database("invoice_db")
                .username("invoice_user")
                .password("password")
                .build();

        DBServiceImpl postgresHelper = new DBServiceImpl(dataSource2);

        String query = "select now()";

        QueryResults queryResults = postgresHelper.executeQuery(query);

        List<String> columns = queryResults.getColumns();

        assertEquals(queryResults.getColumnCount(), 1);
        assertEquals("now", columns.get(0));

        System.out.println(queryResults.getColumns());
        System.out.println(queryResults.getData());
    }

}


