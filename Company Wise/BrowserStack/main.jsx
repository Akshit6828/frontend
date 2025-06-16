import React, { useEffect, useRef, useState } from 'react'

export default function Box() {
    // const [count, setCount] = useState(1);
    let color = "white";
    const refColor = useRef("white");

    const handleClick = () => {
        color = "red";
        refColor.current = "Red";

    }

    return (
        <div style={{ backgroundColor: refColor.current }} onClick={handleClick} >
            A
        </div >
    )
}

["A", "B", "C"].map((item) => <Box key={item} />);

// A(blue) B C
// Swap
// C B A(blue)
// 


// Suppose user clicks 6-7 times faster, so API calls will 5 be there.
// So i want to optmize, this cancels the API call.
// So i will clear this in API call and then it will cancel.
const [pageNo, setPageNo] = useState(1);

useEffect(() => {
    fetchData(pageNo);
    return () => {
        // cancelAPI();
    }
}, [pageNo]);




