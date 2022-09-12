import React,{Component} from 'react'
import welcome from './index.module.css'

export default class Hello extends Component{
    render(){
        return <h2 className={welcome.title}>Welcome</h2>
    }
}