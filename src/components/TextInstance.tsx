import { useEffect, useState } from "react"

import Textarea from "./Textarea"
import Props from "./Props"

import "./TextInstance.css"
import data from "../assets/data"

export default function TextInstance() {
    const [props, setProps] = useState(data.map((i) => i.props))
    const [texts, setTexts] = useState(data.map((i) => i.value))

    useEffect(() => {
        // console.log(texts)
    }, [texts])

    return (
        <div className="text-instance">
            <Props data={props} />
            <Textarea
                data={texts}
                onChange={(innerText: string) => {
                    setTexts(innerText.split("\n"))
                }}
            />
        </div>
    )
}
