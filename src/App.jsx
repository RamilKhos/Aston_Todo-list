import Todos from './components/Todos/Todos';
import './app.css';

export function App() {
  return (
    <div className="container">
      <header className="header">todos</header>
      <main className="main">
        <Todos />
      </main>
    </div>
  );
}
