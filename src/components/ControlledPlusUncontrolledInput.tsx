import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";

export function ControlledPlusUncontrolledInputs() {
    return (
        <div>
            <hr></hr>
                <h1>Controlled & Uncontrolled Inputs</h1>
                <ControlledInput/>
                <UncontrolledInput/>
            <hr></hr>
        </div>
    )
}