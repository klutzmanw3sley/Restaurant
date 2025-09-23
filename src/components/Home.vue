<script setup> 

</script >

<template>
    <!-- Carousel -->
    <v-container>
<v-row>
<v-carousel>
   <v-carousel-item src="/public/images/food1.jpg"></v-carousel-item>
   <v-carousel-item src="/public/images/food2.jpg"></v-carousel-item>
   <v-carousel-item src="/public/images/food3.jpg"></v-carousel-item>
   <v-carousel-item src="/public/images/food4.jpg"></v-carousel-item>
  
</v-carousel>
</v-row>
    </v-container>
    <!-- About -->
      <v-container>
<v-row>
   <v-card align="center">
    <p class="text-h6"><b>Welcome to Klutzmans </b> </p>
      <p class="text-h6">Welcome to Klutzmans, where culinary dreams come true! Our restaurant is a haven for food enthusiasts seeking a delightful dining experience. From the moment you step through our doors, you'll be greeted with warm hospitality and an inviting ambiance that sets the stage for an unforgettable meal.</p>
      <p class="text-h6">At Klutzmans, we pride ourselves on our commitment to quality and creativity. Our talented chefs craft each dish with passion and precision, using only the freshest ingredients sourced from local farms and markets. Whether you're craving a hearty breakfast, a light lunch, or a decadent dinner, our diverse menu has something to satisfy every palate.</p>
      <p class="text-h6">But Klutzmans is more than just a restaurant; it's a community hub where friends and family gather to share laughter, stories, and unforgettable moments. Our cozy seating arrangements and charming decor create the perfect backdrop for celebrations, romantic dinners, or casual get-togethers.</p>
      </v-card>


</v-row>
    </v-container>
    <!-- News -->
 <v-container>
<v-row>
    <v-col md="4">
        <v-card color="indigo-darken-4">
            <v-img 
            src="public/images/food5.jpg"
            class="align-end text-white"
            height="200"
            cover>
        <v-card-title>What klutzman has to offer  </v-card-title>
        </v-img>
        <v-card-subtitle> For our daily customers we offer free meals on weekends </v-card-subtitle>
        <v-card-actions>
            <v-btn>Read More</v-btn>
        </v-card-actions>
            
            
            
        </v-card>
    </v-col>
      <v-col md="4">
        <v-card color="indigo-darken-4">
            <v-img 
            src="public/images/food6.jpg"
            class="align-end text-white"
            height="200"
            cover>
            <v-card-title>Tuesdays Offers  </v-card-title>
        </v-img>
        <v-card-subtitle>  On Tuesdays we have a bug 1 get 1 free offer for all our burgers </v-card-subtitle>
        <v-card-actions>
            <v-btn>Read More</v-btn>
        </v-card-actions>
            
            
            
        </v-card>
    </v-col>
      <v-col md="4">
        <v-card color="indigo-darken-4">
            <v-img 
            src="public/images/food7.jpg"
            class="align-end text-white"
            height="200"
            cover>
            <v-card-title></v-card-title>
        </v-img>
        <v-card-subtitle> Couple specials </v-card-subtitle>
        <v-card-actions>
            <v-btn>For every couple that get to eat at ours on Friday get a 50 percent discount </v-btn>
        </v-card-actions>
            
            
            
        </v-card>
    </v-col>
   
   
   

</v-row>

    </v-container>
    <!-- Footer -->
 <v-container>
<v-row>
    <v-footer class="text-center d-flex flex-column ga-2 py-4=" color="indigo-darken-4">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkedin'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
 

    





    

</v-row>
    </v-container>
  








</template>