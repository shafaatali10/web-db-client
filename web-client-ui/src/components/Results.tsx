function Results(props) {
    console.log(props.results);

    const results = props.results;
    const columns = results.columns;
    const rows = results.data;

    return (
        <div className="mt-3 border-0 border-top border-secondary border-2">
            <button type='button' className='btn btn-secondary btn-sm mt-3'>Results</button>

            <table className="table table-dark table-striped table-sm text-sm-start">
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column} className='bg-dark text-success text-decoration-underline' scope="col">{column}</th>
                    ))}

                </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column}>
                                {row[column]}
                            </td>
                        ))}
                    </tr>))}

                </tbody>
            </table>
        </div>
    );
}

export default Results;