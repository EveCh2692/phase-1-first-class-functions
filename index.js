function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction(){
    return function Fn(){
        console.log("named function");
    };
}

function returnsAnAnonymousFunction(){
    return() => console.log("an anonymous function");
}