class App extends React.Component {
  render(){
    return(   
      <div>
        <Friend name = 'John' hobbies = {['sing', 'dance', 'cook']} />
      </div>   
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));