function ModuleRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.credit}</td>
      <td>{props.grade}</td>
      <td>
        <button onClick={props.onDelete}>delete</button>
      </td>
    </tr>
  );
}

function ModuleTable(props) {
  return (
    <table id="module-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Credit</th>
          <th>Grade</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map(
          (row, index) =>
            !row.isDeleted && (
              <ModuleRow
                name={row.name}
                credit={row.credit}
                grade={row.grade}
                onDelete={() => props.onDeleteRow(index)}
              ></ModuleRow>
            )
        )}
      </tbody>
    </table>
  );
}

let addRow;

window.addEventListener("DOMContentLoaded", function () {
  const rows = [
    { name: "ADES", credit: 6, grade: "B+" },
    { name: "DENG", credit: 5, grade: "A" },
  ];
  addRow = function (name, credit, grade) {
    rows.push({ name, credit, grade });
    renderModuleTable();
  };

  const domContainer = document.querySelector("#table-root");
  const root = ReactDOM.createRoot(domContainer);
  root.render(<ModuleTable rows={rows} />);
});
