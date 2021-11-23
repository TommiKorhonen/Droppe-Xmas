import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Products from '../dashboard/wishlists/products/Products'

const Children = () => {
    const [kids, setKids] = useState({
        name: "",
    })
    const { children } = useSelector((state) => state.children)
    const findKids = () => {
        setKids({
            name: children.name
        })
    }
    // useMemo(() => {
    //     const findChild = children.find((el) => el.id === "name"); // this finds child from Redux by ID
    //     setKids(findChild);
    //     return () => { };
    // }, ["name", children]);

    return (
        <div className="flex flex-col">



            <h1 className="black">{kids.name}</h1>


        </div>
    )
}

export default Children
