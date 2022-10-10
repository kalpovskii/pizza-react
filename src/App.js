import './scss/app.scss';
import Header from './components/Header.jsx';
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Pizza_block from "./components/Pizza_block";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 class="content__title">Все пиццы</h2>
                    <div class="content__items">
                        <Pizza_block />
                        <Pizza_block />
                        <Pizza_block />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
