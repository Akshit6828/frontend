function debounce(fn, delay){
    let timer;

    return (...args)=>{

        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn.apply(this, args);
        }, delay)
    }
};

const logHi = (name)=>{
    console.log("hi " + name);
}


const debHi = debounce(logHi,100 );
debHi("Akshit");
debHi("Akshit");
debHi("Akshit");

setTimeout(()=>{
debHi("Akshit");    
}, 400)
