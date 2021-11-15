import "./Textarea.css"

type TextareaType = {
    data: Instance[]
}

export default function Textarea(props: TextareaType) {
    return (
        <div
            contentEditable
            suppressContentEditableWarning
            className="textarea"
        >
            {props.data.map((p, index) => (
                <Row key={index} text={p.value} />
            ))}
        </div>
    )
}

type RowType = {
    text: string
}

function Row(props: RowType) {
    return <div>{props.text}</div>
}
