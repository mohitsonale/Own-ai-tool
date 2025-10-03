import { use, useEffect, useState } from "react";
import { Checkheading, Replaceheading } from "./helper";

function Answer({ ans, index, totalresult,type }) {

    const [heading, setHeading] = useState(false)
    const [answer, setAnswer] = useState(ans)

    useEffect(() => {
        if (Checkheading(ans)) {
            setHeading(true)
            setAnswer(Replaceheading(ans))

        }
 
    }, [])

    return (
        <>

            {
                index == 0 && totalresult > 1 ? <span className="pt-2 text-xl block text-white">{answer}</span> :
                 heading ? <span className="pt-2 text-lg block text-white">{answer}</span> : <span className={type=='q'? 'pl-1':'pl-5'}>{answer}</span>

            }

        </>
    )
}

export default Answer;