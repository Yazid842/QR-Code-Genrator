let qrImage= document.getElementById("qrImage")
let imgBOx= document.getElementById("imgBox")
let qrText= document.getElementById("qrText")
let btnD= document.getElementById("Download")

function genrateQR(btn){
    if(qrText.value!=""){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value;
        btn.removeAttribute("style");
        btnD.style.display = "inline-flex";
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
function Download(){
    const imgsrc=qrImage.src;
    if(!qrImage){
        return ;
    }
    fetch(imgsrc)
    .then(resultat=>resultat.blob())
    .then(blob=>{
        const url=URL.createObjectURL(blob);
        const link=document.createElement("a");
        link.href=url;
        link.download="QR.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    })
    .catch(()=>alert("Erreur dans Telachargement"));
}