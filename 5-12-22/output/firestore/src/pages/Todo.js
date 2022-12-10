import { firestore } from "../firebase/Config"
import{useEffect, useState} from 'react'
export default function Todo(){
    const[todo,setTodo]=useState([])
    const getTodo=async()=>{
        const req=await firestore.collection('mytodo').get()
        const temp=req.docs.map((item)=>({...item.data(),id:item.id}))
        setTodo(temp)
    }
    useEffect(()=>{
        getTodo()
    },[])
    return(
        <div className="container">
            <h1 className="text-secondary card p-3 mt-3 mb-5 bg ">Todo List App</h1>
            {todo&&todo.map((item,index)=>{
                return(
                    <div key={index}>
                        <table className="table table-bordered p-2 text-secondary table-striped">
                            <thead>
                                <tr>
                                    <th><h4>SI.NO</h4></th>
                                    <th><h4>Todo</h4></th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.Todo.map((item,index)=>{return(
                                    <tr key={index}>
                                        <td className="col-2"><h6>{index+1}</h6></td>
                                        <td className="col"><h6>{item}</h6></td>
                                    </tr>
                                )})}
                            </tbody>
                            </table>
                    </div>
                )
            })}
        </div> 
    )
}