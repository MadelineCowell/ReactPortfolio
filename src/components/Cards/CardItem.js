import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                {/* <Link className='cards_item_link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            src={props.src}
                            alt='Project 1'
                            className='class__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link> */}

                <a className='cards_item_link' 
                path={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            src={props.src}
                            alt='Project'
                            className='class__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                                                <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </a>
            </li>
        </>
    )
}

export default CardItem
