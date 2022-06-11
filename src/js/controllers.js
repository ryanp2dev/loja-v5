App.controllers = {
    getPage(){
        const paramsString = window.location.search
        let searchParams= new URLSearchParams(paramsString)
        const page = searchParams.get("p")
        return page
    },
    router(){
       setInterval(()=>{
        console.log(window.location.search)
        const page = this.getPage()
        if(page === "cart"){
            //rederiza pagina 
            this.createCheckout()
        }else if(!page){
            //rederiza o home 
            this.createMain()
        }else {
            // rederiza pagina de errp
        }
       },100)
    },
    go(p){
        history.pushState({p},"",App.state.routes [p])
        // if (p === "cart"){
        //     history.pushState({p},"","?p=cart")

        // }else{
        //     history.pushState({p},"",`${window.location.origin}${window.location.pathname}`,)
            
        // }
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
        }


        header.cartIcon.src="./assets/carrinho.png"
        header.cartIcon.style.width ="36px"
        header.cartIcon.style.height ="36px"
        header.cartIcon.style.margin="42px 53px 42px 0 "
        header.cartIcon.style.cursor="pointer"
        header.cartIcon.onclick= ()=> {
            App.controllers.go("cart")
        }

        els.header.container.appendChild(header.logo)
        els.header.container.appendChild(header.cartIcon)

        els.root.appendChild(header.container)
    },
    createMain(){
        const els = App.elements
        //criar e rederizar o main
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
        els.main.container.innerHTML=""
        els.main.container.appendChild(main.container)
        

        
    },
    createCheckout(){
        const els = App.elements

        const {container,title,item,confirmBtn} = els.main.checkout
        els.main.container.innerHTML = '';
        container.style.backgroundColor="#ccc"
        container.style.height="100%"
        container.style.paddingTop="240px"

        title.innerHTML="My cart [ Total Amount : xx ]"
        title.style.fontStyle="normal"
        title.style.fontSize="24px"
        title.style.fontWeight="29px"
        title.style.textAlign="center"
        title.style.fontWeight="700"
        title.style.color="#000"
        const btn = document.createElement("button")
        btn.innerHTML="Confirm purchase"
        btn.classList.add("btn")
        confirmBtn.appendChild(btn)
        confirmBtn.style.textAlign="center"


        container.appendChild(title)
        container.appendChild(confirmBtn)


        
       
        els.main.container.innerHTML=""
        
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
        els.root.style.width="100vw"

        els.root.style.display="flex"
        els.root.style.flexDirection ="column"
        
       this.createHeader()
    //    this.createMain()

        els.main.container.style.flexGrow ="1"
        els.root.appendChild(els.main.container)
        // this.createCheckout()
        this.createFooter() 
    }
}
