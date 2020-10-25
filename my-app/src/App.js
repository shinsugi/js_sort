import React from 'react';
import './App.css'


class template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: undefined,
      status: undefined,
      buttonselected: '',
      dis: false
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
      status : '初期状態',
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
  
  //ボタンをクリック
  buttonClick(name){
    this.setState({
      buttonselected: name
    });
  }

  //活性非活性きりかえ
  toggle(){
    if(!this.state.dis){
      this.setState({
        dis : !this.state.dis,
        buttonselected : ''
      });
    }else{
      this.setState({
        dis : !this.state.dis,
      });
    }

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

        <h3>HOVER SAMPLE</h3>
        <div>
          disableの間はhoverが動かないようにする
        </div>
        <button onClick={() => {this.toggle()}}>切替</button>
        <div>
          <button 
            disabled={this.state.dis}
            className={
              this.state.dis ? 'test' :
              this.state.buttonselected === 'test1' ? 'test selected' : 'test h'
            } 
            onClick={() => {this.buttonClick('test1')}}>test1</button>
          <button 
            disabled={this.state.dis}
            className={
              this.state.dis ? 'test' :
              this.state.buttonselected === 'test2' ? 'test selected' : 'test h'
            } 
            onClick={() => {this.buttonClick('test2')}}>test2</button>
          <button 
            disabled={this.state.dis}
            className={
              this.state.dis ? 'test' :
              this.state.buttonselected === 'test3' ? 'test selected' : 'test h'
            } 
            onClick={() => {this.buttonClick('test3')}}>test3</button>
        </div>
        
      </div>
    )
  }
}


export default template;