import {useRouteError} from 'react-router-dom'

const PageNotFound = () => {

    const err = useRouteError()
    console.log(err);

    return(
        <div className='m-4 p-4'>
            <h1 className='text-xl'>Oops!!</h1>
            <h2 className='text-xs'>Something Went Wrong</h2>
            <h2 className='text-xs'>{err.status} {err.statusText}</h2>
            <h2 className='text-xs'>{err.error.message}</h2>
        </div>
    )
}

export default PageNotFound;