"use client"
import { store } from "@/app/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface Props{
    children:ReactNode
}
const Providers = (props: Props) =>{
    return(
    <Provider store={store}>
        {props.children}
    </Provider>)
}

export default Providers