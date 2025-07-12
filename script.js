let qrImage= document.getElementById("qrImage")
let imgBOx= document.getElementById("imgBox")
let qrText= document.getElementById("qrText")

function genrateQR(){
    if(qrText.value!=""){
        qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value;
        imgBOx.classList.add("show-img");
    }else{
        qrText.setAttribute('style',"border: 1px solid red;");
        qrText.classList.add('error');
        setTimeout(()=>{
        qrText.classList.remove('error');
        qrText.removeAttribute("style");

        },600);
    }
}
