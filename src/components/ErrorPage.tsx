import type { FC } from 'react'
import { useRouteError } from 'react-router-dom'

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  const error: any = useRouteError()
  return (
    <p>{`status text${error.statusText}` || `message==>${error.message}`}</p>
  )
}

export default ErrorPage
