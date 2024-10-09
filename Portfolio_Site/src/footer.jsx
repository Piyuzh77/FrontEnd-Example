import certi from './assets/certificationLogos.png'
import footer from './assets/footer.png'

const Footer=()=>{
    return(
        <>
            <div className="flex justify-center p-6 m-5">
                <img src={certi}/>
            </div>
            <div className='flex justify-center p-6 mt-2'>
                <img src={footer}/>
            </div>
        </>
    )
}

export default Footer