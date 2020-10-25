import React from 'react';
import './App.css'


class template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: undefined
    }
  }

  componentDidMount(){
  }

  //リストを表示する
  getList(){
    let samplelist = [
      {date : '2020/10/21',valueASC : '昇順で二番目に来るはず', valueDSC : '降順で二番目に来るはず'},
      {date : '2020/10/22',valueASC : '昇順で三番目に来るはず', valueDSC : '降順で一番目に来るはず'},
      {date : '2020/10/20',valueASC : '昇順で一番目に来るはず', valueDSC : '降順で三番目に来るはず'},
    ];
    this.setState({
      list : samplelist,
      status : '初期状態'
    });
  }

  //昇順に並べ替える
  sortASC(){
    let list = this.state.list;
    let items = list.sort((a,b) => {
      var dateA = a.date;
      var dateB = b.date;
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      // names must be equal
      return 0;
    });
    this.setState({
      list : items,
      status : '昇順に並べ替え'
    });
  }

  //降順に並べ替える
  sortDSC(){
    let list = this.state.list;
    let items = list.sort((a,b) => {
      var dateA = a.date;
      var dateB = b.date;
      if (dateA < dateB) return 1;
      if (dateA > dateB) return -1;
      // names must be equal
      return 0;
    });
    this.setState({
      list : items,
      status : '降順に並べ替え'
    });
  }
  
  render(){
    return (
      <div style={{padding:10}}>
        <h1>SORT TEST</h1>
        <button onClick={() => {this.getList()}}>GET LIST</button>
        <button onClick={() => {this.sortASC()}}>昇順</button>
        <button onClick={() => {this.sortDSC()}}>降順</button>

        <h2>結果</h2>
        {this.state.status && 
          <div>{this.state.status}</div>
        }
        {this.state.list && this.state.list.map((item,index) => {
          return (
              <div key={index}>
                <span className="value">{item.date}</span><span className="value">{item.valueASC}</span><span className="value">{item.valueDSC}</span>
              </div>
            )
        })}
      </div>
    )
  }
}


export default template;