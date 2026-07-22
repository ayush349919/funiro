import { Link } from 'react-router-dom';
import navigationBg from '../assets/navigation-bg.jpg'

function Navigations({pageTitle}) {
    return (
        <>
            <div className='bg-cover bg-no-repeat bg-center min-h-79 flex items-center justify-center font-poppins' style={{ backgroundImage: `url(${navigationBg})` }}>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-3xl text-center'>{pageTitle}</h2>
                    <div className='text-center'>
                    <Link to="/" className='font-bold'>{`Home >`}</Link> <span>{`${pageTitle}`}</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navigations;