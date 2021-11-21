const productos = [
    {id:1,name:"Roma - Sports Shoes",category:'Women',price:15000, img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwc9e6948c/products/PU_376983-09/PU_376983-09-1.JPG?sw=400&sh=400'},
    {id:2,name:"Atenea - Sports Shoes",category:'Women',price:11000, img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw029782bf/products/PU_193744-09/PU_193744-09-1.JPG?sw=400&sh=400'},
    {id:3,name:"Zeus - Sports Shoes",category:'Men',price:15500, img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw5a37b6b6/products/PU_384297-34/PU_384297-34-1.JPG?sw=400&sh=400'},
    {id:4,name:"Perseo - Sports Shoes",category:'Men',price:15070, img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw30fa45cf/products/PU_376493-03/PU_376493-03-1.JPG?sw=400&sh=400'},
    {id:5,name:"Hercules - Sports Shoes",category:'Kids',price:15000, img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwfa745040/products/PU_195647-01/PU_195647-01-1.JPG?sw=400&sh=400'},
    {id:6,name:"Ades - Sports Shoes",category:'Men',price:17000, img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw2d34dcc3/products/PU_195697-02/PU_195697-02-1.JPG?sw=400&sh=400'},
    {id:7,name:"Afrodita - Sports Shoes",category:'Women',price:18000, img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dweccc5f50/products/PU_195116-02/PU_195116-02-1.JPG?sw=400&sh=400'},
    {id:8,name:"Venus - Sports Shoes",category:'Women',price:15000, img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw6beae318/products/PU_382151-17/PU_382151-17-1.JPG?sw=400&sh=400'},
];

export const getFetch = new Promise((aceptado, rechazada)=>{
    setTimeout(() => {
        aceptado(productos)        
    }, 2000);
})