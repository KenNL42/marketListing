export default function FilterRow({ title, options, data, setData }) {
  function onChange(event) {
    setData(event.target.value)
  }
  return (
    <div>
      <div>{title}</div>
      <div>
        <select onChange={onChange}>
          {options.map(op => (
            <option key={op}>{op}</option>
          ))
          }
        </select>
      </div>
    </div>
  );
}
