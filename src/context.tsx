import { createContext } from "react";
import { ICard } from "./types/types";

export interface MyContextType  {
cardItemBasket: ICard[],
onAddCardBasket: (card : ICard) => void
// basketButton : boolean
onRemoveCardBasket: (card : ICard) => void
setCardItemBasket: (prev : any) => void[] | any
counter: number
setCounter : (a : number) => void
// onPlus: (obj: ICard) => void
// onMin: (obj: ICard) => void
allPrice : number,
setAllPrice : (a : number) => void
posts : ICard[]
setPosts : (prev : any) => void
change: boolean,
setChange : (a : boolean) => void
  }

const AppContext = createContext<MyContextType>({
  onAddCardBasket: function (card: ICard): void {
  },
  cardItemBasket: [],
  // basketButton: false,
  onRemoveCardBasket: function (): void {
  },
  setCardItemBasket: function (prev : any): void {
  },

  counter: 0,
  setCounter: function (a: number): void { },
  // onPlus: function (obj: ICard): void { },
  // onMin: function (obj: ICard): void { },
  allPrice: 0,
  setAllPrice: function (a: number): void { },
  posts: [],
  setPosts: function (prev : any): void { },
  change: false,
  setChange: function (a: boolean): void {
    throw new Error("Function not implemented.");
  }
})


export default AppContext