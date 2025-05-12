import "./List.css";

const List = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.changed(event.target.value)}
        required={props.required}
        value={props.valueEvent}
      >
        <option value=''></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default List;
