// const  react={
//     createElement:function(tag,styles,children){
//         const element =document.createElement(tag);
//         element.innerText=children;
//         for(let key in styles){
//             element.style[key]=styles[key];
//         }
//         return element;
//     }
// }
// const header1=react.createElement('h1',{fontSize:"30px",backgroundColor:"pink"},"hello Ashish");
// // const root=document.getElementById('root');
// // root.append(header1);
// const ReactDom={
//     render:function(element,root){
//         root.append(element);
//     }
// }
// ReactDom.render(header1,document.getElementById('root'));
// // ReactDom.render(header2,document.getElementById('root'));
const element = React.createElement("h1",{},"hello ashish ");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);