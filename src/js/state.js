App.state = {
    products: [
        {
            id: 1,
            name:"Pão",
            description:"pao frances",
            price:2000,
            images: [
                'https://statics.angeloni.com.br/super/files/produtos/3809550/3809550_1_zoom.jpg'
            ]
        },
        {
            id: 2,
            name:"Pão sei la",
            description:"pao sei la",
            price:2300,
            images: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8T2Vdzh_bcCnHaLrvPz-XWPftlEUfCNurQ&usqp=CAU",
           
            ]
        },
        {
            id: 3,
            name:"Pão de ",
            description:"pao de frances",
            price:2400,
            images: [
                        "https://goinggaijin.com/wp-content/uploads/2021/03/chocolate_coronet.jpg"
                
            ]
        },
        {
            id: 4,
            name:"Pão ddd",
            description:"pao fdddrances",
            price:2000,
            images: [
                "https://statics.angeloni.com.br/super/files/produtos/3809550/3809550_1_zoom.jpg"
            ]
        }

    ],
    routes: {
        home: `${window.location.origin}${window.location.pathname}`,
        cart: "?p=cart",
    },
    routerRendered: false
}

