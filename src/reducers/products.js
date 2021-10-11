

var initialState =[
    {
        id:1,
        name: "iPhone 13 pro max",
        image1:"https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-gold-1-1.jpg",
        image2: "https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-gold-2.jpg",
        price:1000,
        description:"",
        inventory:33,
        rating: 5
    },
    {
        id:2,
        name: "iPhone XS max",
        image1:"https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-xam-1-1-org.jpg",
        image2: "https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-mau-vang-dong-1-org.jpg",
        price:900,
        description:"",
        inventory:33,
        rating: 3
    },
    {
        id:3,
        name: "iPad Pro M1",
        image1:"https://cdn.tgdd.vn/Products/Images/522/238651/ipad-pro-m1-129-inch-wifi-cellular-256gb-2021-xam-1-org.jpg",
        image2: "https://cdn.tgdd.vn/Products/Images/522/238651/ipad-pro-m1-129-inch-wifi-cellular-256gb-2021-xam-2-org.jpg",
        price:1500,
        description:"",
        inventory:33,
        rating: 4
    },
    {
        id:4,
        name: "Macbook pro M1 2020",
        image1:"https://cdn.tgdd.vn/Products/Images/44/239560/macbook-pro-m1-2020-silver-01-org.jpg",
        image2: "https://cdn.tgdd.vn/Products/Images/44/239560/macbook-pro-m1-2020-silver-02-org.jpg",
        price:3000,
        description:"",
        inventory:13,
        rating: 5
    },
    {
        id:5,
        name: "iPhone 12 pro max",
        image1:"https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-1-org.jpg",
        image2: "https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-xam-1-org.jpg",
        price:1100,
        description:"",
        inventory:33,
        rating: 4
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state]
    }
}
export default products;