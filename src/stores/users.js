import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
    state: () => {
        const users ={
            0:{
                name:'Sean Wesley',
                email:'abayohuncho@gmail.com',
                phone:25712447593,
                deliveryAddress:'Ngong rd',
                password:'qwertyuio',
                userType:'Customer',
                activeAccount: true


            },
               1:{
                name:'Brian Kamzo',
                email:'briankamzo@gmail.com',
                phone:2576484684,
                deliveryAddress:'Luilu',
                password:'qwertyuio',
                userType:'Customer',
                activeAccount: true


            },
               2:{
                name:'Jacob Murphy',
                email:'jacobmurphy@gmail.com',
                phone:25712429833,
                deliveryAddress:'Imara Daima',
                password:'qwertyuio',
                userType:'Admin',
                activeAccount: true


            },
  
            3:{
                name:'Jacob Kiwior',
                email:'jacobkiwior@gmail.com',
                phone:25712778930,
                deliveryAddress:'Elgeyo Marakwet',
                password:'qwertyuio',
                userType:'Customer',
                activeAccount: true


            },
            4:{
                name:'Mikel Arteta',
                email:'mikelarteta@gmail.com',
                phone:25722393890,
                deliveryAddress:'Kajiado',
                password:'qwertyuio',
                userType:'Customer',
                activeAccount: false


            },









 }
    
      
        return { users }
    },
    actions:{
        
    }
})
