const App = {
    init(){
        console.log("start")

        // this.controllers.createLayout()
        // this.controllers.router()  
    //    const el = this.controllers.createBtn("test","primary",() => {
    //     console.log("cliquei")
    //    })
    //     this.elements.root.appendChild(el)

    //     const el2 = this.controllers.createBtn("test","secondary")
    //     this.elements.root.appendChild(el2)


    //     const el3 = this.controllers.createBtn("test","default")
    //     this.elements.root.appendChild(el3)

        // const el4 = this.controllers.createBtn("test","other")
        // this.elements.root.appendChild(el4)
        


        // console.log(this.controllers.createCard())

        //  const elCard = this.controllers.createCard("test")
        //  this.elements.root.appendChild(elCard) 
        // const click = this.controllers.createBtn("click","primary",() =>{
        //     console.log("eifiuo")
        //     this.controllers.openModal(el)
        // })
        // console.log(this.controllers.createModal())
        // const el =  this.controllers.createModal("test")
        // this.elements.root.appendChild(el)
        // this.elements.root.appendChild(click)


        let el 

        const imgs = [
           " https://statics.angeloni.com.br/super/files/produtos/3809550/3809550_1_zoom.jpg",
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8T2Vdzh_bcCnHaLrvPz-XWPftlEUfCNurQ&usqp=CAU",
           "https://goinggaijin.com/wp-content/uploads/2021/03/chocolate_coronet.jpg"
        ]

        el = this.controllers.createCard("Paes", "description", 1.99,imgs)
        this.elements.root.appendChild(el)

        console.log("end")
        
    }
}
// protocolo ||    host  ||          pathname  // query params
//http:        //127.0.0.1:5500/    loja-v5/src/ ?id=1

