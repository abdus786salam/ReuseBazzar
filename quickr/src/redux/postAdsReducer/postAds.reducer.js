

const initialState={
    isCatAndBike:false,
    isMobile:false,
    isElectronics:false
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case "bikesAndCars":{
           return{
            ...initialState,
            isCatAndBike:!state.isCatAndBike,
           }
        }
        case "mobileAndTablets":{
           return{
            ...initialState,
            isMobile:!state.isMobile,
           }
        }
        case "eletronicsAndHome":{
           return{
            ...initialState,
            isElectronics:!state.isElectronics
           }
        }
        default:{
           return state
        }
    }
}

