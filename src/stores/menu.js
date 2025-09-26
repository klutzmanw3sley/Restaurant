import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => { 
        const menu = {
    0:{
        name:'samosa',
        images:"public/images/menu/samosa.jpg",
        price:1750,
        description:'Chicken samosa',
        longDescripption:'Crispy, golden triangles stuffed with seasoned minced beef, onions, and fresh herbs. Savory, flavorful, and perfect as a snack or starter',
        category:'food'

    },
     1:{
        name:'rice',
        images:"public/images/menu/rice.jpg",
        price:1000,
        description:'White rice',
        longDescription:'Fluffy, tender grains of perfectly steamed rice, light in texture and mild in flavor. A classic side dish that pairs well with any meal',
        category:'food'

    },
     2:{
        name:'Grilled Chicken',
        images:"public/images/menu/grilled-chicken-steak-vegetables-marble-background.jpg",
        price:1800,
        description:'Grilled Chicken',
        longDescription:'Juicy, tender chicken marinated with spices and grilled to perfection, giving it a smoky flavor and a golden, slightly charred finish',
        category:'food'

    },
     3:{
        name:'noodles',
        images:"public/images/menu/noodles.jpg",
        price:1800,
        description:'extra spicy',
        longDescription:'Soft, springy noodles tossed with savory seasonings and fresh vegetables, offering a perfect balance of flavor and comfort in every bite',
        category:'food'

    },
     4:{
        name:'sushi',
        images:"public/images/menu/sushi.jpg",
        price:1250,
        description:'Sushi Dushiii',
        longDescription:'Delicate rolls of seasoned rice paired with fresh fillings and wrapped in seaweed, offering a perfect blend of flavor, texture, and artistry',
        category:'food'

    },
     5:{
        name:'Taco',
        images:"public/images/menu/taco.jpg",
        price:1600,
        description:'Taco Tuesday',
        longDescription:'A warm tortilla filled with seasoned meat, fresh vegetables, and zesty toppings, creating a flavorful bite thats both hearty and satisfying',
        category:'food'


    },
     6:{
        name:'Nyake ',
        images:"public/images/menu/nyake buda.jpg",
        price:1500,
        description:'steak ',
        longDescription:'Succulent, tender cut of beef grilled to perfection, rich in flavor with a juicy, mouthwatering finish',
        category:'food'

    },
       7:{
        name:'dumpling',
        images:"public/images/menu/dumpling.jpg",
        price:1200,
        description:'Dumplings Moto',
        longDescription:' Soft, delicate dough parcels filled with savory seasoned meat or vegetables, steamed or fried to create a comforting, flavorful bite',
        category:'food'

    },
      
     8:{
        name:'pasta',
        images:"public/images/menu/pasta.jpg",
        price:1000,
        description:'Patsa with Veggys',
        longDescription:'Tender, perfectly cooked noodles served with rich sauces and fresh ingredients, offering a comforting and flavorful classic',
        category:'food'
    },
      
     9:{
        name:'fruits',
        images:"public/images/menu/fruits.jpg",
        price:750,
        description:'Fruit Salad',
        longDescription:'A colorful selection of fresh, juicy seasonal fruits, naturally sweet and packed with flavor',
        category:'desert'
    },
      10:{
        name:'Avocado Toast',
        images:"public/images/menu/avocado.jpg",
        price:1200,
        description:'The toast is silent',
        longDescription:'Creamy, rich, and buttery in texture, served fresh to add a smooth and wholesome touch to any meal',
        category:'desert'
    }
      
}
       
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})
