import { createContext } from "react";
import { ICard } from "./types/types";

export interface MyContextType  {
cardItemBasket: ICard[],
onAddCardBasket: (card : ICard) => void
// basketButton : boolean
onRemoveCardBasket: (card : ICard) => void
setCardItemBasket: (prev : ICard[]) => void[] | any
counter: number
setCounter : (a : number) => void
onPlus: (obj: ICard) => void
onMin: (obj: ICard) => void
increase? : (a : any) => void 
allPrice : number,
setAllPrice : (a : number) => void
  }

const AppContext = createContext<MyContextType>({
  onAddCardBasket: function (card: ICard): void {
    throw new Error("Function not implemented.");
  },
  cardItemBasket: [],
  // basketButton: false,
  onRemoveCardBasket: function (): void {
    throw new Error("Function not implemented.");
  },
  setCardItemBasket: function (prev: ICard[]): void {
    throw new Error("Function not implemented.");
  },
  counter: 0,
  setCounter: function (a: number): void {
    throw new Error("Function not implemented.");
  },
  onPlus: function (obj: ICard): void {
    throw new Error("Function not implemented.");
  },
  onMin: function (obj: ICard): void {
    throw new Error("Function not implemented.");
  },
  increase: function (a: any): void {
    throw new Error("Function not implemented.");
  },
  allPrice: 0,
  setAllPrice: function (a: number): void {
    throw new Error("Function not implemented.");
  }
})


export default AppContext