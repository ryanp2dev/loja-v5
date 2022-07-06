App.controllers = {
    getPage(){
        const stringParams = window.location.search;
        let searchParams= new URLSearchParams(stringParams)
        const page = searchParams.get("p");
        return page;
    },
    router(){  
       

      setInterval(() => {
        if(App.state.routerRendered){
            return
        }   
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
        App.state.routerRendered = true
        

      },100)
    },
    go(p){
        App.state.routerRendered = false
        history.pushState({ p }, "", App.state.routes[p])   
     
    },
    createProductsElements(container){
        // const els = App.elements
        // const main = els.main.main

        App.state.products.forEach((product,i) => {
            const card = this.createCard(
                product.name,
                product.description,
                product.price,
                product.images,
                () => {
                    console.log(`Produto ${i + 1}`, product)
                    const res = confirm("Deseja Adicionar ao carrinho?")
                    const productCout = App.state.mutations.addToCard(product)
                    if(res &&  productCout==="0KS"){
                        console.log("add carrinho ")
                        
                        App.elements.header.cartCount.innerHTML= App.state.card.length
                   
                    }else if(productCout == "EXISTS"){
                        alert("produto EXISTS")
                    }
                }

                )
            console.log(card)
            container.appendChild(card)
        })

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
        // header.cartIcon.style.margin="42px 53px 42px 0 "
        header.cartIcon.style.cursor="pointer"
        header.cartIcon.onclick= ()=> {
            App.controllers.go("cart")
            // App.controllers.router()

        }
        header.cartCount.innerHTML = App.state.card.length
        header.cartContainer.style.color="#fff"
        header.cartContainer.style.margin="42px 53px 42px 0 "

        els.header.container.appendChild(header.logo)
        els.header.container.appendChild(header.cartContainer)

        els.header.cartContainer.appendChild(header.cartIcon)
        els.header.cartContainer.appendChild(header.cartCount)

        
        els.root.appendChild(header.container)
    },
    createMain(){
        const els = App.elements
        const main = els.main.main

        // main.itemsContainer             

        
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

        // const product = App.state.products[0]
        main.itemsContainer.style.display="flex"
        main.itemsContainer.style.flexWrap="wrap"
       this.createProductsElements(main.itemsContainer)

        main.container.appendChild(main.bg)
        main.container.appendChild(main.h1)
        main.container.appendChild(main.des)
        main.container.appendChild(main.itemsContainer)
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
    createCard( title, description, price,imgs, onclick){
        const el = document.createElement("div")
        el.style.display="flex"
        el.style.alignItems=" center"
        el.style.flexDirection="column"
        el.style.width="fit-content"
        el.style.padding="1rem"
        


        // const img = document.createElement("img")
        // img.src="./assets/back.png"
        // img.style.maxWidth="300px"
        // img.style.maxHeight="300px"
        // img.style.borderRadius="50%"
        const imgContainer = document.createElement("div")

        const carousel = new Carousel({imgs, container:imgContainer})

        const titleEL = document.createElement("div")
        titleEL.innerHTML = title
        titleEL.style.fontWeight = "700"
        titleEL.style.fontSize= "16px"
        titleEL.style.lineHeight="19px"
        titleEL.style.textAlign = "center"
        titleEL.style.marginTop="40px"

        const priceEL = document.createElement("div")
        priceEL.innerHTML = this.currencyFormat(price)

       

        priceEL.style.fontWeight = "400"
        priceEL.style.fontSize= "16px"
        priceEL.style.lineHeight="19px"
        priceEL.style.marginTop="4px"
        priceEL.style.marginBottom="4px"
     
        const des = document.createElement("div")
        des.innerHTML= description
        des.style.fontWeight = "400"
        des.style.fontSize= "16px"
        des.style.lineHeight="19px"
        des.style.marginBottom = "4px"

        const btn = this.createBtn("add cart","primary",onclick)
       
        el.appendChild(imgContainer)
        el.appendChild(titleEL)
        el.appendChild(priceEL)
        el.appendChild(des)
        el.appendChild(btn)

        return el
    },
    createModal(children){

        const  closeModal = () => {
            console.log("[]..... close modal")
            this.closeModal(el)
        } 

        const el = document.createElement("div")
        const modal = document.createElement("div")

        el.style.display="flex"
        el.style.justifyContent="center"
        el.style.alignItems="center"
        el.style.position= "fixed"
        el.style.top="0"
        el.style.left="0"
        el.style.width="100%"
        el.style.height = "100%"
        el.style.background="rgba(0,0,0,0.5)"
        el.classList.add("backdrop")
        el.onclick = (e) => {
            if(e.target.classList.contains("backdrop")){
                closeModal()
            }
        }

        modal.style.background="#fff"
        modal.style.borderRadius="4px"
        modal.style.width="fit-content"
        modal.style.display="flex"
        modal.style.flexDirection="column"
        // modal.style.display="none"


        // el.innerHTML = children  
      
        const close = document.createElement("div")
        close.style.display="flex"
        close.style.alignSelf="flex-end"
        close.style.width="fit-content"
        close.style.border="1px solid black"
        close.style.alignItems="center"
        close.style.padding="10px"
        close.style.cursor="pointer"
        close.style.background="rgba(0, 0, 0, 0.6)"
        close.style.marginTop="11px"
        close.style.marginBottom="12px"
        close.style.borderRadius="4px"
        close.style.color="white"
        close.innerHTML="x"
        close.onclick = closeModal

        const body = document.createElement("div")
        body.innerHTML= children


        const footer = document.createElement("div")
        footer.style.display="flex"
        footer.style.justifyContent="space-between"
        footer.style.margin="45px 82px 71px 81px"
       
        const cancel = this.createBtn("cancel","other",closeModal)
        cancel.style.cursor="pointer"

        const ok = this.createBtn("confirm","secondary",() =>{
            console.log("[].... confirm compra")
        }) 
        ok.style.cursor="pointer"
        ok.style.marginLeft="24px"
        
        footer.appendChild(cancel)
        footer.appendChild(ok)
        modal.appendChild(close)
        modal.appendChild(body)
        modal.appendChild(footer)
        el.appendChild(modal)

        return el
    },
    openModal(el){
        // modalOpen = true
        el.style.display="flex"
    },
    closeModal(el){
        // modalOpen = false
        el.style.display="none"

    },
    currencyFormat(value){

            if(typeof value === "string"){
                value = parseFloat(value)
            }

            return new Intl.NumberFormat("ja-JP",{
                style: "currency",
                currency:"jpy",//pt-BR
            }).format(value)
    },
}
