import Header from './Header.jsx'
import Box from './Box.jsx'
import { useState } from 'react'
function App() {
  const [ticTac, setTicTac] = useState([['','',''],['','',''],['','','']]) 
  const [turn,setTurn] = useState('X');
  const [winner,setWinner] = useState('None');

  function calculateWinner(rowIndex, cellIndex) {
    setTicTac((currentValue) => {
      let updatedTicTac = currentValue.map((row) =>[...row])
      if(updatedTicTac[rowIndex][cellIndex] === ''){
        updatedTicTac[rowIndex][cellIndex] = turn;
          // Check for a winner after updating - as the state doesnt update immediately
          if (checkWinner(updatedTicTac, turn)) {
          setWinner(turn); // Set the winner
        }
        setTurn(turn === 'X' ? 'O' : 'X');
      }
      return updatedTicTac;
    })
  }
  function checkWinner(board, player){
    return (
      (board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
      (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
      (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
      (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
      (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
      (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||
      (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
      (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    );
  }

  return(
    <>
    <Header></Header>
    <div>
    {`Turn is for ${turn}`}
    </div>
    <div className='game-container'>
      {
        ticTac.map((ticTacRow,rowIndex) =>{
            return ticTacRow.map((ticTacCell, cellIndex) =>{
                return (
                <Box key={`${rowIndex}-${cellIndex}`} onClick={() => calculateWinner(rowIndex, cellIndex)}>
                  {ticTacCell}
                </Box>
              )
            })
        })
      }
    </div>
    <div>{`Winner is ${winner}`}</div>
    </>
  )
}

export default App
