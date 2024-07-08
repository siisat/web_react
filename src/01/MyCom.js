import clock from './colock.png' ;
import './MyCom.css' ;

function MyCom() {
    const mycomDiv = {
        width : '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column'
        }

    return (
        <div style={mycomDiv}>
            <p className='mycomP'><img src={clock} alt='clock' style={{'width' : '200px'}}/></p>
            <p>현재 시간 :  {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default MyCom ;