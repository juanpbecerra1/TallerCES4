import GameState from "./Context/GameState";
import AppRouter from "./Routers/AppRouter";

function App() {
  return (
     <GameState>
     <AppRouter />
    </GameState>
  );
}

export default App;
