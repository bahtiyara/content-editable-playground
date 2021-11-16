import "./Props.css"

type PropsType = {
    data: Prop[][]
}

export default function Props(props: PropsType) {
    const { data } = props
    return (
        <div className="props">
            {data.map((p, index) => (
                <PropItem key={index} data={p} index={index + 1} />
            ))}
        </div>
    )
}

type PropItemType = {
    data: Prop[]
    index: number
}

function PropItem(props: PropItemType) {
    const { index } = props
    return (
        <div className="prop-item">
            <div>{index}</div>
        </div>
    )
}
