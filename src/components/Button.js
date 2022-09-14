import { useProcess } from "../context/ProcessContext"

function Button({ text, classn, width, type }) {
    const {process, setProcess} = useProcess()

    return (
        <div className={`col-${width}`}>
            <button onClick={
                () => {
                    if(type=="delete") {
                        setProcess(process.slice(0, -1))
                    }
                    if(type=="reset") {
                        setProcess("");
                    }
                    if(type=="equal-process") {
                        setProcess(eval(process))
                    }
                    if(type=="number" || type=="process") {
                        setProcess(process + text)
                    }
                }
                } className={`buton ${classn}`}>
                <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </button>
        </div>
    )
}

export default Button
