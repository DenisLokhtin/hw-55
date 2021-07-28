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
        {name: 'Meat', price: 50},
        {name: 'Cheese', price: 20},
        {name: 'Salad', price: 5},
        {name: 'Bacon', price: 30},
    ];

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0, image: MeatImage},
        {name: 'Cheese', count: 0, image: CheeseImage},
        {name: 'Salad', count: 0, image: SaladImage},
        {name: 'Bacon', count: 0, image: BaconImage},
    ]);

    const AddIngredients = (index) => {
        ingredients[index].count++;
        setIngredients([... ingredients]);
    };

    const removeIngredients = (index) => {
        ingredients[index].count --;
        setIngredients([...ingredients]);
    };

    return (
        <div className="container">
            <fieldset>
                <legend>Ingredients</legend>

                {ingredients.map ((ingredient, index) => {
                        return <Card ingredient={ingredient.name} img={ingredient.image} amount={ingredient.count} add={() => {AddIngredients(index)}} remove={() => {removeIngredients(index)}}/>
                })}

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
