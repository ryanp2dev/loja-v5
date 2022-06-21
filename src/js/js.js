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
        const click = this.controllers.createBtn("click","primary",() =>{
            console.log("eifiuo")
            this.controllers.openModal(el)
        })
        console.log(this.controllers.createModal())
        const el =  this.controllers.createModal("test")
        this.elements.root.appendChild(el)
        this.elements.root.appendChild(click)
        console.log("end")
        
    }
}
// protocolo ||    host  ||          pathname  // query params
//http:        //127.0.0.1:5500/    loja-v5/src/ ?id=1

