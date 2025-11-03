function  throttle(fn, delay) {
  let lastCall = 0;
    return (...args)=>{
        const now = Date.now();
        if(now - lastCall < d) return;
        lastCall = now;
        return fn.call(this, args);
    }
}
const logHi = (name)=>{
    console.log("hi " + name);
}


const debHi = throttle(logHi,100 );
debHi("Akshit");
debHi("Akshit");
debHi("Akshit");

setTimeout(()=>{
debHi("Akshit");    
}, 400)
 f