function getRandom(){
  let symbols = ['a','b','c'];
  return symbols[Math.floor(Math.random()*symbols.length)];
}
class App extends React.Component {
  render(){
    return(   
      <div>
        <h1>SLOT MACHINES!!</h1>
        <Machine s1 = {getRandom()} s2={getRandom()} s3={getRandom()} />
        <Machine s1 = {getRandom()} s2={getRandom()} s3={getRandom()} />
        <Machine s1 = {getRandom()} s2={getRandom()} s3={getRandom()} />
      </div>   
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));