import { useProcess } from "../context/ProcessContext"
import Button from "./Button"


function Calculator() {

    const {process, setProcess} = useProcess()

    const buttons = [
        {
            text: "C",
            classn: "reset-btn",
            width: 3,
            type: 'reset',
        },
        {
            text: "/",
            classn: "process-btn",
            width: 3,
            type: 'process',
        },
        {
            text: "%",
            classn: "process-btn",
            width: 3,
            type: 'process',
        },
        {
            text: '<i class="fa-solid fa-delete-left"></i>',
            classn: "process-btn",
            width: 3,
            type: 'delete',
        },
        {
            text: '7',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '8',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '9',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '*',
            classn: "process-btn",
            width: 3,
            type: 'process',
        },
        {
            text: '4',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '5',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '6',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '-',
            classn: "process-btn",
            width: 3,
            type: 'process',
        },
        {
            text: '1',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '2',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '3',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '+',
            classn: "process-btn",
            width: 3,
            type: 'process',
        },
        {
            text: '0',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '.',
            classn: "number-btn",
            width: 3,
            type: 'number',
        },
        {
            text: '=',
            classn: "equal-btn",
            width: 6,
            type: 'equal-process',
        },
    ]

    return (
        <div className="calculator">
            <input type="text" className="process-input" disabled value={process} />
            <div className="row g-2">
                {
                    buttons.map((button, key) => {
                        return (
                            <Button key={key} text={button.text} classn={button.classn} width={button.width} type={button.type} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Calculator
