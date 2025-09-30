import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError();

    console.error(error)

  return (
    <div>
        <h1>Ops!</h1>
        <p>Temos um erro</p>
        <p>
            {error.statusText}
        </p>
        <p>
            {error.error.message}
        </p>
    </div>
  )
}

export default ErrorPage