import styles from './App.module.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
