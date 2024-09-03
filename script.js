// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


const myRequest=new XMLHttpRequest();

// make a GET request to the server
myRequest.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        // parse the response text to JSON format
           const myData=JSON.parse(this.responseText);
         // console.log(myData);   
              
         myText='';
        // to restore data we get from the link to the myText var and add it to innerHTML    
        for(let i=0;i<myData.length;i++){
                  console.log(myData[i]);
      
                  myText=myText+myData[i]+'<br/>';
      
                  let div=document.getElementById('div1').innerHTML=myText;
        }
    }
}
      
 myRequest.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
 myRequest.send();
      