import {
  INC_QTY,
  DEC_QTY,
  REMOVE_QTY,
  ADD_ITEM
} from '../constants';


let initialState ={
  itemList:[{name:'a', price:20, qty:1},
    {name:'b', price:10, qty:1},
    {name:'c', price:30, qty:1}
  ]
};

const cartReducer = function (state = initialState, action) {
  console.log(state.itemList, 'djkkkkkkkkkkkkkkkkkkknpm');

  switch (action.type) {
    case INC_QTY: {
      let newColl = [...state.itemList];
      newColl[action.index].qty++;
      return { ...state, itemList: newColl };
    }
    case DEC_QTY: {
      let newColl = [...state.itemList];
      if(newColl[action.index].qty >= '1') {
        newColl[action.index].qty--;
      }
      return { ...state, itemList: newColl};
    }
    case REMOVE_QTY: {
      let newColl = [...state.itemList];
      newColl.splice(action.index, 1);
      return { ...state, itemList: newColl};
    }
    case ADD_ITEM: {
      console.log('item Add', action);
      let addedItem = action.item.split('-');
      let elevalue ={qty: 1};
      let newColl = [...state.itemList];
      elevalue.name=addedItem[0];
      elevalue.price=addedItem[1];
      newColl.push(elevalue);
      return { ...state, itemList: newColl};
    }
    default: return state;
  }

};

export default cartReducer;
