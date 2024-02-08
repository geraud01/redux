const initialState = {
    notes: [
        {
            id: '010101',
            title: 'Exemplo de Nota 01',
            details: 'Exemplos de descrição de nota 1'
        },
        {
            id: '010102', 
            title: 'Exemplo de Nota 02',
            details: 'Exemplos de descrição de nota 2'
        },
    ],
    name: 'Geraud'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.note]
            }

        case 'REMOVE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.id)
            }

        case 'GET_NOTES':
            return {
                ...state,
            }

        default:
            return state;
    }
}
