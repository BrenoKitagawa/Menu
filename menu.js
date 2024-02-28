const menu =[

  
    {id:0,
        img:"imgs/lanches-gourmet.webp",
    item:"LancheGourmet",
    preço:"R$:20,00",
    sobre:"lanche"

    },
    {id:1,
        img:"imgs/item-1.jpeg",
    item:"Paquecas",
    preço:"R$:20:00",
    sobre:"massas"},

    {id:2,
        img:"imgs/item-2.jpeg",
    item:"X-Especial com batatas",
    preço:"R$:35,00",
    sobre:"lanche"},
    {id:3,
        img:"imgs/item-3.jpeg",
    item:"milk-Shake Especial de morango",
    preço:"R$:15,00",
    sobre:"bebida"},
    {id:4,
        img:"imgs/item-4.jpeg",
    item:"Ovo frito",
    preço:"R$:10,00",
    sobre:"prato"},
    {id:5,
        img:"imgs/item-5.jpeg",
    item:"X-Salada Com Ovo",
    preço:"R$:15,00",
    sobre:"lanche"},

    {id:6,
        img:"imgs/item-6.jpeg",
    item:"MilkShake de Chocolate",
    preço:"R$:15,00",
    sobre:"bebida"},
    {id:7,
        img:"imgs/item-7.jpeg",
    item:"Lanche B/C",
    preço:"R$:25,00",
    sobre:"lanche"},
    {id:8,
        img:"imgs/item-8.jpeg",
    item:"Lanche da casa com batata",
    preço:"R$:25,00",
    sobre:"lanche"},
    {id:9,
        img:"imgs/item-10.jpeg",
    item:"Carne do chef",
    preço:"R$:35,00",
    sobre:"prato"},
]

const img=document.querySelector(".img")
const item=document.querySelector(".nome")
const preco=document.querySelector(".preço")
const dentro=document.querySelector('.cardapio')
const dentroBontons=document.querySelector(".filtro")
const btn = document.querySelectorAll(".btn")



window.addEventListener("DOMContentLoaded",function(){
    MenuTodo(menu);
});

function MenuTodo(newMenu){

    let menuMap= newMenu.map(function(item){
        return `
      <div class="todo">  <div class="img"><img src="${item.img}" alt="lanche"></div>
        <div class="Nome">${item.item}</div>
        <div class="Preço">${item.preço}</div>
        <div class="Sobre"><button class="mais">mais</button></div>
        </div>`
        
    })
    menuMap=menuMap.join("")
    dentro.innerHTML=menuMap

}




btn.forEach(function(e){
    e.addEventListener('click',function(pega){

        let sobre= pega.currentTarget.dataset.menu
        console.log(sobre)
        let MenuFiltrar= menu.filter(function(item){
            if(item.sobre === sobre)
           return item
        });

        if(sobre === "tudo"){
            MenuTodo(menu)
        }else{
            MenuTodo(MenuFiltrar)
        }



    })
})

