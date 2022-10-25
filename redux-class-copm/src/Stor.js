
/////////////////////////////////////////////

const fn =(currentState,action)=>{

  // user logic
  if(action.type === 'INCREMENT_AMOUNT'){

    return {
          ...currentState,
          count: currentState.count+1
    }
  }
  if(action.type === 'DECREMENT_AMOUNT'){

    return {
          ...currentState,
          count: currentState.count-1
    }
  }
  else{

    return currentState;
  }

}

///////////////////////store is here/////////////////////////////
class Store {

#state;                     //private
#updater  ;
#listenersCallback                    
constructor(initState) {

    this.#state = initState;
}

getState() {
    return this.#state;
}
get State(){

    return this.#state;
}
dispatch(action) {
    //you get new state
 const newState = this.#updater(currentState,action);
 this.#state = newState;
     
    if(currentState === newState) {
        return
    }
    else{
        if(this.#listenersCallback){
            this.#listenersCallback()
        }
    }

}
subscribe(callback) {
   this.#listenersCallback = callback;
}
}

const store = new Store({count:1},fn)


//////////// subscribe ///////////
store.subscribe(()=>{

 console.log(`store has got updated`)
 console.log(store.state)
})

console.log(store.getState())

console.log(store.state);

store.dispatch({type : 'INCREMENT_COUNT' })
console.log(store.state);
store.dispatch({type : 'DECREMENT_COUNT' })
console.log(store.state);

//create a class store with privet state field.
// create a getState and getter function.



// store
// hold the store
// read the state
// dispatch (action) => update your state
// inform you when the state update
// const action ={ type : "INCREMENT_AMOUNT"}
// const currentState = { count +1}