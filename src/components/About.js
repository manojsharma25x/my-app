import React from 'react'
import { useState } from 'react/cjs/react.development'








export default function About() {

    const [btnText , setBtnText] = useState("dark mode");

    const changeTheme = ()=>{
        if(mystyle.color === "black"){
            setMystyle({
                color:"white",
                backgroundColor:"black"
                
            });
            setBtnText("light mode");
        }
        else{
            setMystyle({
                color:"black",
                backgroundColor:"white"

            });
            setBtnText("light mode");
        }
        
    }

    const [mystyle,setMystyle] = useState({
        color:"black",
        backgroundColor:"white"
    })
    return (
        <div className="container" style={mystyle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laborum accusantium aliquam, id ipsam illo repellat dolorum distinctio animi provident dolore. Veniam voluptas ducimus sunt ut, atque dicta temporibus. Saepe obcaecati repellat explicabo maxime officia impedit tempora esse atque aspernatur provident perferendis assumenda excepturi ipsam ut, omnis laborum dignissimos distinctio nihil in veritatis molestiae eos rem! Illo harum optio eligendi qui eaque doloribus totam, ducimus pariatur, reprehenderit natus repudiandae? Praesentium ad sequi aperiam aspernatur eligendi fuga quia ipsam, quibusdam non distinctio amet eius eum alias cupiditate inventore esse placeat velit quo. Provident repudiandae ex minus reiciendis aspernatur, ea aliquid? Temporibus.
            <br />
            <button className='btn btn-primary' onClick={changeTheme}>{btnText}</button>
        </div>
    )
}
