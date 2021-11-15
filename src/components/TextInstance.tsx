import Textarea from "./Textarea"
import Props from "./Props"

import "./TextInstance.css"
import data from "../assets/data"

export default function TextInstance() {
    return (
        <div className="text-instance">
            <Props data={data} />
            <Textarea data={data} />
        </div>
    )
}
