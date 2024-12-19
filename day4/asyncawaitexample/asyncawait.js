(async ()=>{
    try{
            const response =await fetch('https://dummyjson.com/recipes');
            const body = await response.json();
            console.log(body);
        } catch(error){
            console.error(error);
        }
    })();

(async function getData(){
    try{
        const response =await fetch('https://dummyjson.com/recipes');
        const body = await response.json();
        console.log(body);
    } catch(error){
        console.error(error);
    }
})();    
