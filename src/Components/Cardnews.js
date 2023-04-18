class Cardnews extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
   shadow.appendChild(this.build())
   shadow.appendChild(this.styles()); 
    }


    build(){

    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", card);

    const cardLeft = document.createElement("div");
    const cardRight = document.createElement("div");
    
const autor = document.createElement("span");
autor.textContent = "by" + this.getAttribute("autor");

const linkTitle = document.createElement("a");
const newsContent = document.createElement("p");

cardLeft.appendChild(autor);
cardLeft.appendChild(linkTitle);
cardLeft.appendChild(newsContent);

cardRight.setAttribute("class", "card__right");
const newsImage = document.createElement("img");



componentRoot.appendChild(cardLeft);
componentRoot.appendChild(cardRight);

return componentRoot;
}
      styles() {

      }

    
}

customElements.define("card-news", Cardnews);