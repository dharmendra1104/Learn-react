import { buy_book } from "./BookType"

const initialState={
    NumberOfBooks:20
}
const BookReducer=(state=initialState,action)=>{
    switch(action.type){
        case buy_book: return{
            ...state,NumberOfBooks:state.initialStaten-1
        }
    }
}

export default BookReducer