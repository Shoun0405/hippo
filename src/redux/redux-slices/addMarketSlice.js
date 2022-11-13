import { createSlice } from "@reduxjs/toolkit";
import { allData, localData } from "../../utils/actionsTyps";

const initialState = {
    selectedPrice:null,
    addAllSales:[],
    addLocalSale:[],
    focus:'',
    setObject:{},
    setModal:false,
    editIndex:null,
    isEdited:false
}

const addMarket = createSlice({
    name:'market',
    initialState,
    reducers:{
        price:(state,action)=>{
            state.selectedPrice = action.payload
        },
        localSales:(state,action)=>{
            const add ={
                ...action.payload,totalSumm:action.payload.amount * action.payload.summ
            }
            state.addLocalSale.push(add)
        },
        allSales:(state)=>{
            state.addAllSales = [...state.addAllSales,...state.addLocalSale]
        },
        clearLocalSales:(state)=>{
            state.addLocalSale = []
            state.selectedPrice = null
        },
        setFocus:(state,action)=>{
            state.focus = action.payload
        },
        setForm:(state,action)=>{
            const {editObj,type,index} = action.payload
            
            state.actionType = type
            state.editIndex = index
            state.isEdited = true
            if (state.actionType === allData) {
                state.setObject = editObj
                modalToggle()
            }
            if (state.actionType === localData) {
                state.setObject = editObj
            }
        },
        deleteObj:(state,action)=>{
            const {type,index} = action.payload
            state.actionType = type
            if (state.actionType === allData) {
                state.addAllSales.splice(index,1)
            }
            
            if (state.actionType === localData) {
                state.addLocalSale.splice(index,1)
            }
        },
        modalToggle:(state,action)=>{
            state.setModal = action.payload
        },
        updatArr:(state,action)=>{
            const {data} = action.payload
            state.isEdited = false
            if (state.actionType === localData) {
                state.addLocalSale.splice(state.editIndex,1,data)
            }
            if (state.actionType === allData) {
                state.addAllSales.splice(state.editIndex,1,data)
            }
        },
    }
})

const state = addMarket.getInitialState()

console.log(state)

export const market = addMarket.reducer
export const { price, allSales, localSales,clearLocalSales,setFocus, deleteObj, setForm, modalToggle,updatArr } = addMarket.actions