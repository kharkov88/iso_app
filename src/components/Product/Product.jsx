import React from 'react'
import { Button, Rating } from 'semantic-ui-react'
//import { ModalChange, ModalDelete } from "../modal"
//import RatingItem from '../rating'

export default  (props) => { 
    const { name, author, content, image_url } = props
    return (
        <div>
            <img src={ image_url }/>
            <h3>{ name }</h3>
            <p>{ author }</p>
            <p>{ content }</p>
            <RatingItem actions={ actions }/>
            <hr/>
            <Button onClick={()=>{'tyut'}} disabled={false}>Купить</Button>
        </div>
  )
  function handleBuy (e) { 
        var cart = document.querySelector('.header-cart-label')
        actions.cart(item)
        cart.style.backgroundColor = 'pink'
        setTimeout(()=>{ 
            cart.style.backgroundColor = 'white'
         }, 300)
     }
 }