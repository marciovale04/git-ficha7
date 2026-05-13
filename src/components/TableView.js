import {
  Table
} from 'reactstrap';

function TableView({ data }) {

  if (!data || data.length === 0) {
    return <p>Sem dados...</p>;
  }

  const keys = Object.keys(data[0]);

  return (

    <Table striped bordered hover>

      <thead>

        <tr>

          {keys.map((key) => (
            <th key={key}>
              {key}
            </th>
          ))}

        </tr>

      </thead>

      <tbody>

        {data.map((item, index) => (

          <tr key={index}>

            {keys.map((key) => (

              <td key={key}>
                {item[key]}
              </td>

            ))}

          </tr>

        ))}

      </tbody>

    </Table>
  );
}

export default TableView;