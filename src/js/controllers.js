App.controllers = {
    getPage(){
        const stringParams = window.location.search;
        let searchParams= new URLSearchParams(stringParams)
        const page = searchParams.get("p");
        return page;
    },
    router(){  
        
      setInterval(() => {
        console.log(window.location.search)

        const page = this.getPage()
        

        if(page === "cart"){
            //rederiza pagina 
            this.createCheckout()
        }else if(!page){
            //rederiza o home 
            this.createMain()
        }else{
            // rederiza erro
        } 
      },100)
    },
    go(p){
        history.pushState({ p }, "", App.state.routes[p])   
     
    },
    createHeader(){
        const els = App.elements
        // criar e rederizar o header 
        const header = els.header
        header.container.style.backgroundColor ="rgba(102, 102, 102, 0.3)"
        header.container.style.display="flex"
        header.container.style.justifyContent="space-between"
        header.container.style.alignItems="center"

        header.container.style.position="fixed"
        header.container.style.top="0"
        

        header.container.style.width="100%"

        header.logo.src="./assets/logo.png"
        header.logo.style.margin="35px 0 35px 48px "
        header.logo.style.cursor="pointer"
        header.logo.onclick = () =>{
            App.controllers.go("home")
            // App.controllers.router()
        }


        header.cartIcon.src="./assets/carrinho.png"
        header.cartIcon.style.width ="36px"
        header.cartIcon.style.height ="36px"
        header.cartIcon.style.margin="42px 53px 42px 0 "
        header.cartIcon.style.cursor="pointer"
        header.cartIcon.onclick= ()=> {
            App.controllers.go("cart")
            // App.controllers.router()

        }

        els.header.container.appendChild(header.logo)
        els.header.container.appendChild(header.cartIcon)

        els.root.appendChild(header.container)
    },
    createMain(){
        const els = App.elements
        const main = els.main.main
        
        main.bg.src="./assets/back.png"
        main.bg.style.width="100%"

        main.h1.innerHTML="Our products"
        main.h1.style.fontSize= "24px"
        main.h1.style.fontWeight= "700"
        main.h1.style.lineHeight ="29px"
        main.h1.style.letterSpacing= "0em"
        main.h1.style.textAlign="center"
        main.h1.style.fontStyle="normal"
        main.h1.style.color= "#000"
        
        
        main.des.innerHTML="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."
        
          main.des.style.fontStyle="normal"
          main.des.style.fontWeight="400"   
          main.des.style.fontSize="24px"      
          main.des.style.lineHeight="29px"      
          main.des.style.textAlign="center"
          main.des.style.color="#000"    

        main.container.appendChild(main.bg)
        main.container.appendChild(main.h1)
        main.container.appendChild(main.des)

        els.main.container.innerHTML = ""  
        els.main.container.appendChild(main.container)

        

        
    },
    createCheckout(){
        const els = App.elements
        const { container, title, items, confirmBtn, confirmBtnContainer } = els.main.checkout

        container.style.backgroundColor = "#CCCCCC"
        container.style.height = "100%"
        container.style.paddingTop = "230px"

        title.innerText = "My cart [ Total Amount : xx ]"
        title.style.fontSize = "24px"
        title.style.fontStyle = "normal"
        title.style.fontWeight = "700"
        title.style.textAlign = "center"
        title.style.lineHeight = "29px"
        title.style.color = "#000000"

        confirmBtn.innerText = "Confirm purchase"
        confirmBtn.classList.add("btn")
        confirmBtnContainer.style.textAlign = "center"
        confirmBtnContainer.appendChild(confirmBtn)

        container.appendChild(title)
        container.appendChild(confirmBtnContainer)

        els.main.container.innerHTML = ""
        els.main.container.appendChild(container)

    },
    createFooter(){
        const els = App.elements

        //criar e rederizar o footer
        const footer = els.footer

        footer.container.style.display="flex"
        footer.container.style.justifyContent="center"
        footer.container.style.alignItems="center"
        footer.container.style.padding="50px"


        footer.logo.src="./assets/logo.png"
        footer.container.style.backgroundColor ="#000"


       
        els.footer.container.appendChild(footer.logo)
        els.root.appendChild(footer.container)
    },
    createLayout(){

        const els = App.elements

        els.root.style.height="100vh"

        els.root.style.display="flex"
        els.root.style.flexDirection ="column"
        
       this.createHeader()
    //    this.createMain()
        // this.createCheckout()

        els.main.container.style.flexGrow ="1"
        els.root.appendChild(els.main.container)
        this.createFooter() 
    },
    createBtn(content,type = "primary",onclick){

        const el = document.createElement("button")

        el.innerHTML= content
        el.style.color="#fff"

        el.style.height= "32px"
        
        el.style.borderRadius="20px"
        el.style.padding=" 5px 16px"
        el.style.display="flex"
        el.style.flexDirection="column"
        el.style.justifyContent="center"
        el.style.alignItems="center"
        el.style.border ="none"
       
       if(type === "primary"){
        // type == primary

        el.style.backgroundColor = "#000"
        el.style.boxShadow=" 0px 2px 0px rgba(0,0,0, 0.043"
       }else if(type === "secondary"){
        //type == secondary
      
        el.style.backgroundColor = "rgba(0,0,0,0.6)"
        el.style.boxShadow=" 0px 4px 4px rgba(0,0,0, 0.025"
       }else if(type === "default"){
        el.style.backgroundColor = "#fff"
        el.style.boxShadow=" 0px 2px 0px rgba(0,0,0, 0.043)"
        el.style.border="2px solid #000"
        el.style.color="#000"
       }else if (type === "other"){
        el.style.backgroundColor = "rgba(0,0,0,0.2)"
        el.style.boxShadow=" 0px 2px 0px rgba(0,0,0, 0.043)"
       }

       el.onclick = onclick

        


        return el 
    },
    createCard(){
        const el = document.createElement("div")
        el.style.display="flex"
        el.style.alignItems=" center"
        el.style.flexDirection="column"
        el.style.border="1px solid black"

        const img = document.createElement("img")
        img.src="./assets/back.png"
        img.style.maxWidth="300px"
        img.style.maxHeight="300px"
        img.style.borderRadius="50%"

        const title = document.createElement("div")
        title.innerHTML = "Croissant"
        title.style.fontWeight = "700"
        title.style.fontSize= "16px"
        title.style.lineHeight="19px"
        title.style.textAlign = "center"
        title.style.marginTop="40px"

        const price = document.createElement("div")
        price.innerHTML = "USD 2"
        price.style.fontWeight = "400"
        price.style.fontSize= "16px"
        price.style.lineHeight="19px"
        price.style.marginTop="4px"
        price.style.marginBottom="4px"
     
        const des = document.createElement("div")
        des.innerHTML="Lorem ipsum dolor sit amet,consectetuer adipiscing elit"
        des.style.fontWeight = "400"
        des.style.fontSize= "16px"
        des.style.lineHeight="19px"
        des.style.marginBottom = "4px"

        const btn = this.createBtn("add cart","primary",() =>{
            console.log("cliquei")
        })
       
        el.appendChild(img)
        el.appendChild(title)
        el.appendChild(price)
        el.appendChild(des)
        el.appendChild(btn)
        return el
    },
}
