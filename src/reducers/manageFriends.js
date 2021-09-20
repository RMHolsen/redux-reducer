export function manageFriends(state = { friends: [], }, action) {
    // Start with state being an empty array of friends 
    // reducer handles two actions: add and remove
    switch(action.type) {
        // CASE STATEMENTS HOW I MISSED YOU. OH SUCH FUN WE WILL HAVE TOGETHER CASE STATEMENTS

        case "ADD_FRIEND": 
            /* action = {
                type: "ADD_FRIEND",
                friend: {
                    name: "Chrome Boi",
                    hometown: "NYC",
                    id: 1,
                },
                }; */
            return({
                ...state, // spread operator!
                friends: [
                    ...state.friends, 
                    action.friend
                ] // meaning you're adding the friend object in the action object to the friends array in the state
                // and the spread operator includes all previous objects in the array
                // I hope that was coherent
            });
            // don't forget there's no 'break' 

        case "REMOVE_FRIEND":
            const friend = state.friends.findIndex(friend => friend.id === action.id)
            // finding the friend based on the id number in the action!
            return({
                ...state,
                friends: [
                  ...state.friends.slice(0, friend),
                  ...state.friends.slice(friend + 1)
                ]
            })
            
        default: 
            return state;
            // always have a default thingie
    };
}
