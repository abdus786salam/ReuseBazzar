

const initialState={
    isCatAndBike:false,
    isMobile:false,
    isElectronics:false,
    isRealEstate:false,
    isHomeLife:false,
    isJob:false,
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
        case "realEstate":{
           return{
            ...initialState,
            isRealEstate:!state.isRealEstate
           }
        }
        case "homeAndLifestyle":{
           return{
            ...initialState,
            isHomeLife:!state.isHomeLife
           }
        }
        case "jobs":{
           return{
            ...initialState,
            isJob:!state.isJob
           }
        }
        default:{
           return state
        }
    }
}

