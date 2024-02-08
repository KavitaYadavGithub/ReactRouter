import * as React from 'react';
import { IReactRouterProps } from './IReactRouterProps';
import { Label, PrimaryButton, TextField } from '@fluentui/react';

export default class CustomerFiles extends React.Component<IReactRouterProps,{}>{
    public render():React.ReactElement<IReactRouterProps>{
        return(
        
       <>
       <p>Customer Files</p>
       <hr></hr>
       <Label>Document:</Label>
       <TextField type='file'/>
       <br/>
       <PrimaryButton text='Save'/>
       </>

            )

    }
}