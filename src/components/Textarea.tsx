import "./Textarea.css"

type TextareaType = {
    data: string[]
    onChange: any
}

export default function Textarea(props: TextareaType) {
    const { data, onChange } = props

    return (
        <div
            onBeforeInputCapture={(e: any) => {
                e.preventDefault()
                console.log(e.data)
            }}
            contentEditable
            suppressContentEditableWarning
            className="textarea"
            onInput={(e) => {
                onChange((e.target as HTMLElement).innerText)
            }}
        >
            {data.map((text, index) => (
                <Row key={index} text={text} />
            ))}
        </div>
    )
}

type RowType = {
    text: string
}

function Row(props: RowType) {
    if (!props) {
        return <div className="row"></div>
    }
    return <div className="row">{props.text}</div>
}
