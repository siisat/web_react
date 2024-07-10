import clock from './colock.png' ;
import './MyCom.css' ;
import { useState, useEffect } from 'react';
//useState : 화면에 실시간으로 반영
//useEffect : 실시간으로 실행될 함수들을 설정

function MyCom() {
    //state 변수 선언
    const [tm, setTm] = useState(new Date());

    const mycomDiv = {
        width : '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column'
        }

    //컴포넌트 생성 시 한 번 실행
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTm(new Date());
        }, 1000);

        return (()=>{
            clearInterval(timer);
        });

    }, []);

    return (
        <div style={mycomDiv}>
            <p className='mycomP'><img src={clock} alt='clock' style={{'width' : '200px'}}/></p>
            <p className='text-gray-500 font-bold'>
                {/* 현재 시간 :  {new Date().toLocaleTimeString()} */}
                현재 시간 :  {tm.toLocaleTimeString()}
            </p>
        </div>
    );
}

export default MyCom ;