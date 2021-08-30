const TemplateLogin = document.getElementById('TemplateLogin').content,
      TemplateReg = document.getElementById('TemplateRegist').content;

let TargetRegist = document.getElementById('targetRegist');

const Template =(item)=> {
    let importElement = document.importNode(item, true);//Ingresamos el contenido dentro de ImportElment
    console.log(importElement);
    return importElement;
}

//Registo
const Login = () =>{
    TargetRegist.innerHTML = '';
    TargetRegist.appendChild(Template(TemplateLogin));
}

const Regist = () =>{
    TargetRegist.innerHTML = '';
    TargetRegist.appendChild(Template(TemplateReg));
}

Login();