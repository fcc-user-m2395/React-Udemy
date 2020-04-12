class Machine extends React.Component {
  render(){
    let {s1,s2,s3}=this.props;
    let msg;
    if(s1==s2 && s2==s3) msg = "Success";
    else msg="Try Again!!"      
    return( 
      <div>
        <p> {s1} {s2} {s3} </p>
        <h1>{msg}</h1>
      </div>   
    );
  }
}

// ReactDOM.render(<App/>, document.getElementById('root'));