export default function Employee(props) {
    return (
        <div style={{margin: "5px", display: "inline-block"}}>
            <div className="card" style={{ width: "18rem", color: "grey"}}>
                <img src={props.imageUrl} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.employee.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                    <input type="button" onClick={props.deleteEmployee} name={props.employee.id} value={"Delete " + props.employee.name} id={props.employee.name} />
                    <input type="button" onClick={() => { props.deleteEmployeeWithName(props.employee.id, props.employee.name )}} name={props.employee.id} value={"Delete Name: " + props.employee.name} />
                </div>
            </div>
        </div>
    )
}