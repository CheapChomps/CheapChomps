import { useState, useEffect } from 'react'
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Home = () => {
    const [ingredientsList, setIngredientsList] = useState([]);
    const ingredientsCollectionRef = collection(db, "ingredients");

    useEffect(() =>{
        const getIngredientsList = async () => {
          // Read data from database, and setIngredientsList
          try {
            const data = await getDocs(ingredientsCollectionRef)
            const filteredData = data.docs.map((doc) => ({
              ...doc.data(), 
              id: doc.id}));
            setIngredientsList(filteredData);
          } catch (err) {
            console.error(err)
          }
        }
        getIngredientsList();
      }, [])

    return (
        <div>
            <h1>Home Page</h1>

            <div>
        {ingredientsList.map((ingredient) => (
          <div>
            <h1> {ingredient.name} </h1>
            <p> Price: {ingredient.price} </p>
          </div>
        ))}
      </div>
        </div>        
    )
}

export default Home;