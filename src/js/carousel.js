class Carousel {

    config = {}
    imgEls = []

    container = null
    leftContainer = null
    imgContainer = null
    rigthContainer = null

    currentImgIdx = 1

    /**
     *  Configure the carousel  
     * @param {Object} config
     * @param {HTMLElement}  config.container where should I render the images?
     * @param {array<string>}  config.imgs List of images to be displayed
     */
    constructor (config) {
        console.log("carousel: start",this)
        this.config = config
        this.container = config.container
        this.setContaninerStyle()
        this.createElements()
        this.preLoadImages()
        this.renderImg()
        console.log("carousel: end")

    }

    renderImg(){    
        console.log("[]...", this.currentImgIdx)
        // const el = document.createElement("img")
        // el.src = this.config.imgs[this.currentImgIdx]
        // el.style.maxHeight="300px"
        // el.style.maxWidth="300px"
        // el.style.borderRadius="50%"
        this.imgContainer.innerHTML=""
        this.imgContainer.appendChild(this.imgEls[this.currentImgIdx])
    }

    createElements() {

        this.leftContainer = document.createElement("div")
        this.imgContainer = document.createElement("div")
        this.rigthContainer = document.createElement("div")

        const caretLeft = document.createElement("img")
        caretLeft.src = "./assets/caret.svg"
        caretLeft.style.transform="rotate(-90deg)"
        caretLeft.style.margin="3px "
        caretLeft.style.cursor="pointer"
        caretLeft.style.width="32px"
        caretLeft.onclick = () => {
            this.currentImgIdx--
            if(this.currentImgIdx< 0){
                this.currentImgIdx = this.imgEls.length - 1
            }
            this.renderImg()

        }

        const caretRigth = document.createElement("img")
        caretRigth.src = "./assets/caret.svg"
        caretRigth.style.transform="rotate(90deg)"
        caretRigth.style.margin="3px "
        caretRigth.style.cursor="pointer"
        caretRigth.style.width="32px"
        caretRigth.onclick = () => {
            this.currentImgIdx++
            if(this.currentImgIdx> this.imgEls.length - 1 ){
                this.currentImgIdx = 0
            }

            
            this.renderImg()
          
        }

        this.leftContainer.appendChild(caretLeft)
        this.rigthContainer.appendChild(caretRigth)
        this.container.appendChild(this.leftContainer)
        this.container.appendChild(this.imgContainer)
        this.container.appendChild(this.rigthContainer)


    }

    setContaninerStyle() {
        this.container.style.display = "flex"
        this.container.style.alignItems="center"
        this.container.style.width = "fit-content"
        this.container.style.height="300px"
        
    }

    preLoadImages() {
        this.config.imgs.forEach((img,i) => {
            console.log("[]...", img)
            const el = document.createElement("img")
            el.src = this.config.imgs[i]
            el.style.maxHeight="300px"
            el.style.maxWidth="300px"
            el.style.borderRadius="50%"
           

            this.imgEls.push(el)
        })
    }
}
