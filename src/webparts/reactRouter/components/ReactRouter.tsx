import * as React from 'react';
// import styles from './ReactRouter.module.scss';
import type { IReactRouterProps } from './IReactRouterProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import { HashRouter,Route,Routes } from 'react-router-dom';
import { Nav,INavStyles,INavLinkGroup } from '@fluentui/react/lib/Nav';
import { Stack,IStackTokens } from '@fluentui/react/lib/Stack';
import CustomerData from './Customer';
import CustomerDetails from './CustomerDetails';
import CustomerFiles from './CustomerFiles';

const navStyles:Partial<INavStyles>={root:{width:300}};
const stackTokens:IStackTokens={childrenGap:40};

const navLinkGroups:INavLinkGroup[]=[
  {
    name:'React Components',
    links:[
      {
        key:'CustomerDetails',
        name:'CusotmerDetails',
        url:'#/CustomerDetails'
      },
  
      {
        key:'CustomerData',
        name:'CusotmerData',
        url:'#/Customer/153'
      },
      {
        key:'CustomerFiles',
        name:'CusotmerFiles',
        url:'#/CustomerFiles'
      }
    ]
  }
]
export default class ReactRouter extends React.Component<IReactRouterProps, {}> {
  public render(): React.ReactElement<IReactRouterProps> {
    

    return (
     <>
     <Stack tokens={stackTokens} >
      <Nav styles={navStyles} ariaLabel='Nav example similar to one found in this demo page' groups={navLinkGroups}/>
      <HashRouter>
        <Routes>
        <Route path='/'  Component={CustomerData}></Route>
        <Route path='/CustomerDetails' Component={CustomerDetails}></Route>
        <Route path='/CustomerFiles' Component={CustomerFiles}></Route>
        </Routes>
      </HashRouter>
     </Stack>
     </>
    );
  }
}
