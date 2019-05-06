
//Acciones
export interface Action {
    type:string;
    payload?:any;
}
// Reduce
export interface Reducer<T>{
  ( state:T, action:Action ):T
}
