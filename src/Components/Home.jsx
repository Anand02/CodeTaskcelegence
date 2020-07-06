import React from 'react';

var questions  =[
  {
    value: 'What is the current year?',
    array: [2009,2010,2099,2020],
    answeris: 2020
  },
  {
    value: 'What is the current month?',
    array: ['Janaury','March','April','July'],
    answeris: 'July'
  }
]

class Home extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      current : 0,
      total : 1,
      selected: null
    }
  }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    },() => {console.log(this.state.selected)})
  }

  nextHandler = () => {
    let newValue = this.state.current + 1;
    this.setState({
      current : newValue
    })
  }

  backHandler = () => {
    let newValue = this.state.current - 1;
    this.setState({
      current : newValue
    }) 
  }

  handleAnswer = () => {
    let answer = [];
    for(var i=0;i<questions.length;i++){
      answer.push(questions[i].answeris);
    }
    alert("Correct Answers Are :".concat(answer),',');
  }

  submitHandle = () => {
    alert('Selected Value Submitted Succsessfully . . .')
  }

  render(){

    const showValues = questions[this.state.current].array.map((item, index) =>{
      return <div key={index}>
              <input name="group" defaultChecked={false} onChange={this.handleChange} value={item} type='radio'/>{item}
          </div>
    })

    return(
      <div>
        <div>
          {
             questions[this.state.current].value
          }
        </div>
        <div>
          {
            showValues
          }
        </div>
        
        {
          this.state.current !== this.state.total ?
          <React.Fragment>
          <button onClick={this.nextHandler}> Next </button>
          <button onClick={this.handleAnswer}>Show Answer</button>
          </React.Fragment>
          
          
          :
          <React.Fragment>
            <button onClick={this.submitHandle}>Submit</button>
            <button onClick={this.backHandler}>Previous</button>
            <button onClick={this.handleAnswer}>Show Answer</button>
            <button onClick={this.nextHandler}> Next </button>
          </React.Fragment>
        }
        {
          this.state.selected == null ?
          <div> Please Choose Answer . . .  </div>
          :
          <div>
            {this.state.selected == questions[this.state.current].answeris ? 'CorrectAnswer' : 'WrongAnswer'}
          </div>
        }
      </div>
    )
  }

}

export default Home;