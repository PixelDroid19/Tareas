//Guardamos el contenido del template
const TemplateMain = document.getElementById('Main').content,
      TemplateStatistics = document.getElementById('Statistics').content,
      TemplateUser = document.getElementById('TemplateUser').content;

let TargetContent = document.getElementById('targetContent');//Selecionamos el lugar donde guadaremos el contenido

const Template =(item)=> {
    let importElement = document.importNode(item, true);//Ingresamos el contenido dentro de ImportElment
    console.log(importElement);
    return importElement;
}

//Mini Nav
const Main = () =>{
    TargetContent.innerHTML = '';
    TargetContent.appendChild(Template(TemplateMain));//Imprimimo por pantalla
}

const Statistics = () =>{
    TargetContent.innerHTML = '';
    TargetContent.appendChild(Template(TemplateStatistics));
}

const User = () =>{
    TargetContent.innerHTML = '';
    TargetContent.appendChild(Template(TemplateUser));
}
Main();