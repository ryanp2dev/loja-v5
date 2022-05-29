App.elements = {
    root: document.getElementById("app"),
    header:{
        container:document.createElement("div"),
        logo: document.createElement("img"),
        cartIcon: document.createElement("img"),
        
    },
    main:{
        container:document.createElement("div"),
        main:{
            container:document.createElement("div"),
            bg: document.createElement("img"),
            h1: document.createElement("h1"),
            des: document.createElement("p")
        },
        checkout: {
            container:document.createElement("div"),
            title: document.createElement("h1"),
            item: [],
            confirmBtn: document.createElement("div")
        },
    },
    
    footer:{
        container:document.createElement("div"),
        logo: document.createElement("img"),
    },
}