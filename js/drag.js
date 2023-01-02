const MainBody = document.querySelector(".MainBody");
const button = document.querySelector(".MainBody button");
const h3 = MainBody.querySelector("h3");
const fileInput = MainBody.querySelector("input");
let myFile;

// console.log(fileInput);

button.addEventListener("click", ()=>{

    fileInput.click();
})

fileInput.addEventListener("change", function (){

    myFile = this.files[0];
    console.log(myFile.name);
    MainBody.classList.add("active");

    showMe();
})

MainBody.addEventListener("dragover", (event)=>{


    event.preventDefault();
    MainBody.classList.add("active");
    h3.textContent = "Upload Your File";
})


MainBody.addEventListener("dragleave", (event)=>{

    MainBody.classList.remove("active");
    h3.textContent = "Drag & Drop";

})

MainBody.addEventListener("drop", (event)=>{


    event.preventDefault();
    myFile = event.dataTransfer.files[0];

    showMe();
})

function showMe(){

    let fileType = myFile.type;
    let fileValidation = ["image/jpeg","image/jpg","image/png"];

    if(fileValidation.includes(fileType)){

        let fileRead = new FileReader();

        fileRead.onload = ()=>{

            let imgUrl = fileRead.result;
            let imgTag = `<img src="${imgUrl}" alt="">`

            MainBody.innerHTML = imgTag;
        }

        fileRead.readAsDataURL(myFile);
    }
    else{

        alert("Please Enter Valid Image")
        MainBody.classList.remove("active");
        h3.textContent = "Drag & Drop";

    }
}
