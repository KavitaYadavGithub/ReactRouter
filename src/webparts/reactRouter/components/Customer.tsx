import * as React from 'react';
import { IReactRouterProps } from './IReactRouterProps';


export default class CustomerData extends React.Component<IReactRouterProps,{}>{
    public render():React.ReactElement<IReactRouterProps>{
        return(
            <>
            <h1>Customer Component</h1>
            <h1><a href='#/Customer/153'>Customer 153</a></h1>
            <h1><a href='#/Customer/154'>Customer 154</a></h1>
            <h1><a href='#/Customer/154'>Customer 155</a></h1>
            <h1><a href='#/Customer/154'>Customer 155</a></h1>
            </>
        )
    }
}