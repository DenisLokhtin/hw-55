import {useState} from "react";
import MeatImage from './assets/meat.png';
import CheeseImage from './assets/cheese.png';
import SaladImage from './assets/salad.png';
import BaconImage from './assets/bacon.png';
import Card from "./components/card";
import Price from "./components/price";
import BreadTop from "./components/breadTop"
import './burger.css'
import './App.css';

function App() {

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0, image: MeatImage, price: 50, currentPrice: 0},
        {name: 'Cheese', count: 0, image: CheeseImage, price: 20, currentPrice: 0},
        {name: 'Salad', count: 0, image: SaladImage, price: 5, currentPrice: 0},
        {name: 'Bacon', count: 0, image: BaconImage, price: 30, currentPrice: 0},
    ]);

    const [price, setPrice] = useState([
        20
    ]);

    const AddIngredients = (index) => {
        ingredients[index].currentPrice = ingredients[index].count * ingredients[index].price
        const sum = ingredients[index].currentPrice.reduce((total, amount) => total + amount);
        setPrice([sum])
        ingredients[index].count++;
        setIngredients([... ingredients]);
    };

    const removeIngredients = (index) => {
        if (ingredients[index].count > 0) {
            ingredients[index].count--;
            setIngredients([...ingredients]);
        }
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

                    <BreadTop/>

                    {ingredients.map ((ingredient, index) => {
                        const renderIngredient = []
                        for (let i=0; i < ingredient.count; i++) {
                            renderIngredient.push(<div className={ingredient.name}/>);
                        }
                        return renderIngredient
                    })}

                    <div className="BreadBottom"/>

                </div>

                <Price price={price}/>

            </fieldset>
        </div>
    );
}

export default App;
