// get tag with dom methods
let btn = document.querySelector('.btn');
let inp = document.getElementById('inp1');
let box = document.getElementById('box'); 
let i = 0;
btn.addEventListener('click',()=>{
       document.cookie = `${i}=`+inp.value;  //set inp value in cookis with diffrent keys
       let a = document.cookie;
      let b = a.split(';')
       b.map((v,j)=>{
          if(j > i ){    // condition for not repeat again and first index not printng
              let box1 = document.createElement('div')  //creat a new element
               box1.classList.add('box-1')  // add a class
               let v1 = v.slice(3)  // for print only vlue
               box1.append(v1) 
               box.append(box1);
          }
       })
       inp.value = ''
       i++  // update value for pass diffrent key
})

window.addEventListener('unload',()=>{   // for remove all cokkie
    document.cookie.split(";").forEach(function(cookie) {
        var parts = cookie.split("=");
        var name = parts[0].trim();
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });
})