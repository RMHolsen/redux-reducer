export function managePresents(state = {numberOfPresents: 0,}, action){
    // come to think of it I'm not entirely sure that comma has to be there? I guess it does?

    switch(action.type) {
        case "INCREASE":
            return Object.assign({}, state, {
                numberOfPresents: state.numberOfPresents + 1
            });
        
            /* No, there is too much, let me sum up: 
            "Object.assign(target, ...sources)" from Mdocs
            The target object is what to apply things to
            The sources is what to apply to the target object
            And the form here specifically is referred to in Mdocs as cloning
            Basically saying that we're cloning a state and turning it into state plus one

            Now do the head jiggle.
            */
            default: 
                return state;
    }
}
