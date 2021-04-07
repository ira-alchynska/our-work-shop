import Header from './components/Header';
import Content from './components/Content';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div className="shop">
      <Header />
      <div className="body">
        <Menu />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
