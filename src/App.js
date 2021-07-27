import {useState} from "react";
import MeatImage from './assets/meat.png';
import CheeseImage from './assets/cheese.png';
import SaladImage from './assets/salad.png';
import BaconImage from './assets/bacon.png';
import Card from "./components/card";
import './burger.css'
import './App.css';

function App() {

    const INGREDIENTS = [
        {name: 'Meat', price: 50, image: MeatImage},
        {name: 'Cheese', price: 20, image: CheeseImage},
        {name: 'Salad', price: 5, image: SaladImage},
        {name: 'Bacon', price: 30, image: BaconImage},
    ];

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const AddIngredients = () => {
        setIngredients[0].count ++;
    };

    const removeIngredients = () => {

    };

    return (
        <div className="container">
            <fieldset>
                <legend>Ingredients</legend>

                <Card ingredient="Meat" img={MeatImage} amount={ingredients[0].count} add={() => {AddIngredients()}}/>
                <Card ingredient="Cheese" img={CheeseImage} amount={ingredients[1].count}/>
                <Card ingredient="Salad" img={SaladImage} amount={ingredients[2].count}/>
                <Card ingredient="Bacon" img={BaconImage} amount={ingredients[3].count}/>

            </fieldset>

            <fieldset className="fieldset-2">
                <legend>Burger</legend>

                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"/>
                        <div className="Seeds2"/>
                    </div>
                    <div className="BreadBottom"/>
                </div>

                <p>price: 20</p>

            </fieldset>
        </div>
    );
}

export default App;
