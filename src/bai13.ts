async function runFailTask(){
    try{
        await runFailTask();
    }catch(err){
        console.error("Caught error: ", err);
    }
}

runFailTask();