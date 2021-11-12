import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <div className="navContainer flex">
                {/* left */}
                <div>
                    <h2 className="text-3xl navh2">Droppe Xmas</h2>
                </div>
                {/* right */}
                <div>
                    <button className="navBtn flex">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 32, height: 32 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-base">Your Choices</span>
                        1
                        2
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
