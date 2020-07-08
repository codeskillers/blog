let defaultState = ['Javascript', 'HTML', 'CSS', 'React.js', 'Vue.js', 'Node.js']
export default (state = defaultState, action)=>{
        let newState = JSON.parse(JSON.stringify(state))
        let newstate = []
        for(let i in newState){
            newstate.push(newState[i])
        }
        console.log(newstate);
        if(action.type === 'addItem'){
            newstate.push(action.value)
            return newstate
        }
        return state
}