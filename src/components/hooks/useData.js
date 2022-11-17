import {useState} from 'react'
import { heroes } from '../data/heroes'

export const useData=(superheroName)=>{
    const [data,setData]=useState(heroes)
    var posicion=0
        const searchData=()=>{
            for(let i in heroes){
                //cogemos por parámetro superheroe y lo buscamos en el objeto literal heroes
                console.log(heroes[i].id)
                if(heroes[i].superhero===superheroName){
                    //Si coinciden los datos de superheroe se coge la posición
                    //se modifica el state data a la posición cogida para imprimirlo en el componente
                    posicion=i
                    setData(heroes[posicion])
                }
            }
            
        }

    return{
        data,
        searchData
    }
        

}