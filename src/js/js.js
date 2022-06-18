const App = {
    init(){
        console.log("start")

        // this.controllers.createLayout()
        // this.controllers.router()  
       const el = this.controllers.createBtn("test")
        this.elements.root.appendChild(el)
        console.log("end")
        
    }
}
// protocolo ||    host  ||          pathname  // query params
//http:        //127.0.0.1:5500/    loja-v5/src/ ?id=1

