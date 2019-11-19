var RecordsComponent = React.createClass({
    getInitialState: {
        return {
          rows: ['row 1', 'row 2', 'row 3']
        }
    },
    render : function() {
        return (
            <div>
                <table>
                    {rows.map((r) => (
                      <tr>
                          <td>{r}</td>
                      </tr>
                    ))}
                </table>
                <button id="addBtn" onClick={addRow}>ADD</button>
            </div>
        );
    },
    addRow : function() {
        var rows = this.state.rows
        rows.push('new row')
        this.setState({rows: rows})
    },
});

React.render(<RecordsComponent/>, document.getElementById('display'))