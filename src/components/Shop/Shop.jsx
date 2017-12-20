import React from 'react'
import { Comment } from 'semantic-ui-react'

import Item from "./Item"

class Shop extends React.Component { 
    render() {
    const { list=mock_data.products } = this.props
    return (
        <div>
        <Comment.Group>
            {
                list.map( (item, index) => {
                    return (
                        <Item 
                            key={index}
                            item={item}
                        />
                    )
                })
            }
        </Comment.Group>
        </div>
    )
}}

export default Shop

const mock_data = {
    products: [
        {
            "id":"0",
            "year":"2014",
            "price":"35$",
            "author":"Майкл Миковски, Джош Пауэлл",
            "name":"Single Page Web Applications",
            "image_url":"https://books.google.com.ua/books/content?id=XVUHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70Uf4iyWU3S97Zrtl9ve8uC0JchFaKVqAe82PPjpo_WshNfaCTDLb-M7tLecpWjfzgRtMdHaFpWiHsGzo_VOXN7ks2HyFDq5RwQ4neaOfONVZ-bkF0DTlDNEKSb9Zad7f6c5KEv",
            "content":"Если ваш сайт представляет собой набор дергающихся страниц, связанных ссылками, то вы отстали от жизни. Следующей ступенью вашей карьеры должны стать одностраничные приложения (SPA). В таком приложении отрисовка пользовательского интерфейса и бизнес-логика перенесены в браузер, а взаимодействие с сервером сводится к синхронизации данных. Пользователь работает с таким сайтом, как с персональным приложением на рабочем столе, что гораздо удобнее и приятнее. Однако разрабатывать, сопровождать и "
        },
        {
            "id":"1",
            "year":"2016",
            "price":"37$",
            "author":"John Resig, Bear Bibeault, Josip Maras",
            "name":"Secrets of the JavaScript Ninja",
            "image_url":"https://books.google.com.ua/books/content?id=vxbUjwEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73UNK9XOCMajJFqD6y9b-vOVyMxRUWsOw26Bcp-6u67athIrNA3GxxD2TAOVKjnNQ8GF2FFmaYs0CfKOakpIoazqdut52VHfvGJIb_u1i3n6czfN2cu7eAdLOiHfeZcZuzeij20",
            "content":"More than ever, the web is a universal platform for all types of applications, and JavaScript is the language of the web. If you're serious about web development, it's not enough to be a decent JavaScript coder. You need to be ninja-stealthy, efficient, and ready for anything. This book "
        }
]}