var restaurantName="Restaurant";
var primaryColor="orange";
var primaryTextColor="white";
var secondaryColor="black";
var secondaryTextColor="white";
var quantityButtonColor="orangered";
var logo_image_link="./resources/images/logo.png";
var backend_link="https://menu-app-rwlj3.ondigitalocean.app/ar-menu-server";

var data = {
    "Pizza Mania":[
        {
            "_id":"id1",
            "type":"model",
            "name":"Veg. Pizza",
            "price":{'value':150,'displayText':'Rs. 150'},
            "section":"Pizza Mania",
            "description":"Enjoy fresh pan veg pizza with paneer, onion and capsicum toppings",
            "model_link":"resources/models/hotdog2.glb",
            "preview_image":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            "food_category":"veg",
            "ar_enabled":false
        },
        {
            "_id":"id2",
            "type":"model",
            "name":"Non-Veg. Pizza",
            "price":{'value':200,'displayText':'Rs. 200'},
            "section":"Pizza Mania",
            "description":"Enjoy fresh pan veg pizza with chicken, onion and capsicum toppings",
            "model_link":"resources/models/fried_egg_sandwich2.glb",
            "preview_image":"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "food_category":"non_veg",
            "ar_enabled":false
        },
        {
            "_id":"id3",
            "type":"model",
            "name":"Farmhouse Pizza",
            "price":{'value':250,'displayText':'Rs. 250'},
            "section":"Pizza Mania",
            "description":"Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
            "model_link":"resources/models/turkey_sandwich2.glb",
            "preview_image":"https://www.dominos.co.in//files/items/Farmhouse.jpg",
            "food_category":"veg",
            "ar_enabled":false
        },
    ],
    "Burger Mania":[
        {
            "_id":"id4",
            "type":"model",
            "name":"Veg. Burger",
            "price":{'value':150,'displayText':'Rs. 150'},
            "section":"Burger Mania",
            "description":"Enjoy fresh pan veg pizza with paneer, onion and capsicum toppings",
            "model_link":"resources/models/hotdog2.glb",
            "preview_image":"https://images.unsplash.com/photo-1550547660-d9450f859349",
            "food_category":"veg",
            "ar_enabled":false
        },
        {
            "_id":"id5",
            "type":"model",
            "name":"Double Patty Burger",
            "price":{'value':200,'displayText':'Rs. 200'},
            "section":"Burger Mania",
            "description":"First, there's the Double Quarter Pounder with Cheese (QPC). Now, there's still the Double QPC—but with smoky sauce and bacon.",
            "model_link":"resources/models/fried_egg_sandwich2.glb",
            "preview_image":"https://images.unsplash.com/photo-1603064752734-4c48eff53d05",
            "food_category":"non_veg",
            "ar_enabled":false
        },
    ],
    "Breakfast":[
        {
            "_id":"id6",
            "type":"model",
            "name":"Grill Sandwhich",
            "price":{'value':210,'displayText':'Rs. 210'},
            "section":"Breakfast",
            "description":"Try new fillings and toppings for your sandwiches, wraps and buns. Our next level sarnies include classic club sandwiches, baguettes and picnic favourites.",
            "model_link":"resources/models/sandwitch.glb",
            "preview_image":"resources/images/sandwich.jpeg",
            "food_category":"veg",
            "ar_enabled":true
        },
        {
            "_id":"id7",
            "type":"model",
            "name":"Chicken Wrap",
            "price":{'value':270,'displayText':'Rs. 270'},
            "section":"Breakfast",
            "description":"It's a wrap! A speedy supper with plenty of spice that's low in calories - the perfect midweek meal",
            "model_link":"resources/models/wrap.glb",
            "preview_image":"resources/images/wrap.jpeg",
            "food_category":"non_veg",
            "ar_enabled":true
        },
    ],
    
}

// var data={
//     "info": {
//       "name": "Test Restaurant",
//       "image_url": "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
//       "theme": {
//         "primary_color": "orange",
//         "secondary_color": "black",
//         "primary_text_color": "white",
//         "secondary_text_color": "white",
//         "quantity_button_color": "orangered"
//       }
//     },
//     "menus": [
//       {
//         "_id": "6399ed7a7437846162c0e0f0",
//         "name": "Spring Roll",
//         "section": "Chinese",
//         "description": "Enjoy fresh pan veg pizza with paneer, onion and capsicum toppings",
//         "price": {
//           "value": 300,
//           "currency": "INR",
//           "displayText": "Rs. 300"
//         },
//         "ar_enabled": true,
//         "preview_image": "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
//         "food_category": "veg",
//         "ar_info": {
//           "type": "MODEL",
//           "url": "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
//         },
//         "__v": 0
//       },
//       {
//         "_id": "6399ee707437846162c0e0f3",
//         "name": "Caprese Salad",
//         "section": "Italian",
//         "description": "A healthy meal makes healthy diet!!",
//         "price": {
//           "value": 300,
//           "currency": "INR",
//           "displayText": "Rs. 300"
//         },
//         "ar_enabled": true,
//         "preview_image": "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
//         "food_category": "veg",
//         "ar_info": {
//           "type": "MODEL",
//           "url": "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
//         },
//         "__v": 0
//       },
//       {
//         "_id": "6399eea87437846162c0e0f6",
//         "name": "Cheeze Pasta",
//         "section": "Italian",
//         "description": "A healthy meal makes healthy diet!!",
//         "price": {
//           "value": 300,
//           "currency": "INR",
//           "displayText": "Rs. 300"
//         },
//         "ar_enabled": true,
//         "preview_image": "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
//         "food_category": "veg",
//         "ar_info": {
//           "type": "MODEL",
//           "url": "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
//         },
//         "__v": 0
//       }
//     ]
//   }