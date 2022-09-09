export const reducer = (state, action) => {
    if (action.type === 'VALUE') {
        const peopleWithNewUser = [...state.people, action.payload];
        return {
            ...state,
            people: peopleWithNewUser,
            isModal: true,
            modalMessage: 'Name is added'
        }
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModal: true,
            modalMessage: 'Please enter a name'
        }
    }
    if (action.type === 'REMOVE_MESSEGE') {
        return {
            ...state, isModal: false
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((user) => user.id !== action.payload)
        return {
            ...state, people: newPeople
        }
    }
};