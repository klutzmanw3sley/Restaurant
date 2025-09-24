<script setup> 

const menu = {
    0:{
        name:'samosa',
        images:"public/images/menu/samosa.jpg",
        price:1750,
        description:'Chicken samosa',
        category:'food'

    },
     1:{
        name:'rice',
        images:"public/images/menu/rice.jpg",
        price:1000,
        description:'White rice',
        category:'food'

    },
     2:{
        name:'Grilled Chicken',
        images:"public/images/menu/grilled-chicken-steak-vegetables-marble-background.jpg",
        price:1800,
        description:'Grilled Chicken',
        category:'food'

    },
     3:{
        name:'noodles',
        images:"public/images/menu/noodles.jpg",
        price:1800,
        description:'',
        category:'food'

    },
     4:{
        name:'sushi',
        images:"public/images/menu/sushi.jpg",
        price:1250,
        description:'Sushi Dushiii',
        category:'food'

    },
     5:{
        name:'Taco',
        images:"public/images/menu/taco.jpg",
        price:1600,
        description:'Taco Tuesday',
        category:'food'


    },
     6:{
        name:'Nyake ',
        images:"public/images/menu/nyake buda.jpg",
        price:1500,
        description:'steak ',
        category:'food'

    },
       7:{
        name:'dumpling',
        images:"public/images/menu/dumpling.jpg",
        price:1200,
        description:'Dumplings Moto',
        category:'food'

    },
      
     8:{
        name:'pasta',
        images:"public/images/menu/pasta.jpg",
        price:1000,
        description:'Patsa with Veggys',
        category:'food'
    },
      
     9:{
        name:'fruits',
        images:"public/images/menu/fruits.jpg",
        price:750,
        description:'Fruit Salad',
        category:'desert'
    },
      10:{
        name:'Avocado Toast',
        images:"public/images/menu/avocado.jpg",
        price:1200,
        description:'The toast is silent',
        category:'desert'
    }
      
}


</script>
<template>
    <h1> Menu </h1>
<v-container>
        <v-row>
            <v-col md="3" v-for="item in menu" :key = "item">
                <v-card color="indigo-darken-4">
                    <v-img :src="item.images" height="300 cover"></v-img>
                    <v-row>
                        <v-col md="6">
                            <v-card-title>{{item.name}}</v-card-title>
                        </v-col>
                        <v-col md="6">
                            <v-chip>{{item.category}}</v-chip>
                        </v-col>
                    </v-row>
                    <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                    <v-card-actions>
                        <v-card-title >{{ item.price }}</v-card-title>
                        <v-btn>Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>






</template>
