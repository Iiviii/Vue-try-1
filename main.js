var app = new Vue ({
    el: '#app',
    data: {
        product: 'socks',
        image: 'img/product1.jpg',
        inventory: 10,
        details: ["80% cotton", "20% polyester", "Gender-nuetral"],
        variants: [
            {
                variantId: 221,
                variantColor: "green",
                variantImage: 'img/product1.jpg',
            },
            {
                variantId: 222,
                variantColor: "pink",
                variantImage: 'img/product2.jpg',
            },
            {
                variantId: 223,
                variantColor: "blue",
                variantImage: 'img/product3.jpg',
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})