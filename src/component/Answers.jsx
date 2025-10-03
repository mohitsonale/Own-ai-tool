import {  useEffect, useState } from "react";
import { Checkheading, Replaceheading } from "./helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";



function Answer({ ans, index, totalresult,type }) {

    const [heading, setHeading] = useState(false)
    const [answer, setAnswer] = useState(ans)

    useEffect(() => {
        if (Checkheading(ans)) {
            setHeading(true)
            setAnswer(Replaceheading(ans))

        }
 
    }, [])

    const renderer={
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter

                {...props}
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={dark}
                PreTag="div"
                
                />
            ):(
                <code {...props} className={className}>
                    {children}
                </code>
            )

        }
    }

    return (
        <>

            {
                index == 0 && totalresult > 1 ? <span className="pt-2 text-xl block dark:text-white text-black">{answer}</span> :
                 heading ? <span className="pt-2 text-lg block dark:text-white text-black">{answer}</span> : <span className={type=='q'? 'pl-1':'pl-5'}>
                    <ReactMarkdown components={renderer}>
                        {answer}
                    </ReactMarkdown>
                 </span>

            }

        </>
    )
}

export default Answer;