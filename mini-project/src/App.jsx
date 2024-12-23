
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  let handleClick = () => {
    console.log("button was clicked!");
  }
  return (
    <>
     <h1>Material UI Demo</h1>
     <Button variant="contained" onClick={handleClick}>Click me!</Button>
     <Button variant="contained" onClick={handleClick} disabled>Click me2!</Button>
     <Button variant="contained" onClick={handleClick} color="error" size='large'>Click me2!</Button>
     <Button variant="contained" onClick={handleClick} color="success" size='small'>Click me2!</Button>
    </>
  )
}

export default App
