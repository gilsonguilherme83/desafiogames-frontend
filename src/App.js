import React, {Component} from 'react';
import GlobalStyles from './styles/global';
import {Container, ThStyle, TableStyle, TBodyStyle, PStyle}  from './styles';
import GameResult from './components/GameResult';
import axios from 'axios';
import Constant from './constants'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
      totalJogadores: 0,
      totalPartidas: 0,
    };
    this.inter = 0;
  }

  componentDidMount(){

    this.updateInterval = setInterval(() => {
      axios.get(`https://desafiogames-backend.herokuapp.com/leaderboard/rank`)
          .then(res => {
                this.setState({
                data: res.data,
                })
           })
    }, 3000);

    this.updateInterval = setInterval(() => {
      axios.get(`https://desafiogames-backend.herokuapp.com/admin/dash`)
          .then(res => {
                this.setState({
                  totalJogadores: res.data.totalLeaderBoard,
                  totalPartidas: res.data.totalGameResult,
                  })
           })
    }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
    this.abortController.abort();
  }
 
  handleCancel = () => {
    
    alert("A partir de agora nenhuma partida vai ser realizada.");

    clearInterval(this.inter);
  }

  handleStart = id => {

    alert("Vamos lá, aguarde as partidas serem iniciadas!");

    var games = [];

    this.inter = window.setInterval(function() {
  
      id++;
  
      var playerId = Math.floor(Math.random() * (Math.floor(Constant.max_jogadores) - Math.ceil(Constant.min_jogadores))) + Math.ceil(Constant.min_jogadores);
      var gameId = Math.floor(Math.random() * (Math.floor(Constant.max_game) - Math.ceil(Constant.min_game))) + Math.ceil(Constant.min_game);
      var nota = Math.floor(Math.random() * (Math.floor(Constant.max_win) - Math.ceil(Constant.min_win))) + Math.ceil(Constant.min_win);
      var dataLocal = Date().toLocaleString();

      this.game = {
        playerId: playerId,
        gameId: gameId,
        win: nota,
        timestamp: dataLocal
      };

      games.push(this.game);

        if(id === 10){
             axios.post('https://desafiogames-backend.herokuapp.com/gameresult', games)
            
                  .then(res =>{
                    games = [];
                      id=0;
                    }).catch(err =>{
                      console.log(err);
                    })
                }
              }, 1000);
  
  window.setTimeout(function() {
      clearInterval(this.inter);
  }, 20000);
};

handleDelete = () => {

  axios.delete(`https://desafiogames-backend.herokuapp.com/admin/delete`)
  .then(res => {
        alert("Dados excluídos com sucesso!");
   })


};

renderTableData() {
  return this.state.data.map((d, index) => {
     const { playerId, balance, lastUpdateDate } = d 
     return (
        <tr key={index+1}>
           <td>{index+1}</td>
           <td>{playerId}</td>
           <td>{balance}</td>
           <td>{lastUpdateDate}</td>
        </tr>
     )
  })
}

  render(){
    return <Container><div>
            <GameResult onStart={this.handleStart} onCancel={this.handleCancel} onDelete={this.handleDelete}></GameResult>
              <PStyle>Partidas Realizadas: {this.state.totalPartidas}</PStyle>
              <PStyle>Jogadores Ranqueados: {this.state.totalJogadores}</PStyle>
              <TableStyle>
                <TBodyStyle>
                  <ThStyle>Posição</ThStyle>
                  <ThStyle>Player</ThStyle>
                  <ThStyle>Balaço</ThStyle>
                  <ThStyle>Última atualização</ThStyle>
                  {this.renderTableData()}
                </TBodyStyle>
              </TableStyle>
    
            <GlobalStyles/>
            </div>
          </Container> ;
     }
}

export default App;