function App() {
  return (
    <div className="Calculator">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
    </div>
  );
}

export default App;
