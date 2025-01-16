import React, { useState } from "react";
// ... other imports ...

const Navigation = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav>
            <ul>
                <li onClick={() => setDropdownOpen(!isDropdownOpen)} className="relative">
                    About Us <span className="arrow-icon">▼</span> {/* Add arrow icon */}
                    {isDropdownOpen && (
                        <ul className="absolute bg-white shadow-md">
                            <li><a href="/about-us">Our Initiatives</a></li>
                            <li><a href="/donate">Donate</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navigation; 