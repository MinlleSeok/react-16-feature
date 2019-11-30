const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const { pizzas } = state;
  
  if(pizzas < MAX_PIZZAS) {
    return {
      pizzas: pizzas + 1
    }
  } else {
    return null;
  }
}

export default eatPizza;