import { UserProfileWithLoading } from "./UserProfileWithLoading";

export function HigherOrderComponents() {
    return (
        <div>
            <hr></hr>
              <h1>Higher-Order Components</h1>
              <UserProfileWithLoading name="John Doe" age={30} />
            <hr></hr>
        </div>
    )
}