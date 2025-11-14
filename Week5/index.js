function GreetingElementwithProp(props) {

  function addNumbers() {
    const sum = props.num1 + props.num2;
    alert("The sum is: " + sum);
  }

  return (
    <div className="App">
      <h1>Welcome, {props.studentname}</h1>
      <button value={props.color} onClick={addNumbers}>
        Click to Add
      </button>
    </div>
  );
}

export default GreetingElementwithProp;
