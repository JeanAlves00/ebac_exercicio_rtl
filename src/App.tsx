import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://rihappy.vtexassets.com/arquivos/ids/2797681-800-auto?v=637841276373170000&width=800&height=auto&aspect=true">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
