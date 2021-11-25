import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'


const Children = ({ userId }) => {
    const [kids, setKids] = useState("")
    const { children } = useSelector((state) => state.children)
    useMemo(() => {
        const findChild = children.find((el) => el.id === userId); // this finds child from Redux by ID
        setKids(findChild);
        return () => { };
    }, [userId, children]);
    return (
        <div className="flex flex-col items-center cardUserContainer">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48 }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <h2 className="text-4xl approved">{kids.name}'s wishlist</h2>
        </div>
    )
}

export default Children
