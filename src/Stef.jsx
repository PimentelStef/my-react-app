import './Stef.css'
import Usc from './Usc'
function Stef() {
    return (
        <>
           <div>
            <h1 className='myclass'>Hello World!</h1>
           </div>

           <hr />

           <div>
            <Usc username="Matt" />
            <Usc username="Benzi">
                <h3>Hide yo Kids! Benzema is Here!</h3>
                <h4>Number 15!</h4>
            </Usc>
           </div>
        </>
    )
}

export default Stef