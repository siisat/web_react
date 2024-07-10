import { useState, useEffect } from "react";
//useEffect : 호출하지 않아도 자동으로 실행됨

export default function Card({ imgSrc, title, content }) {
    // 컴포넌트 로컬변수
    // let n = 0;

    //useState 사용하기 위한 state 변수 n 정의 : [변수, 변수를 바꾸는 함수명] = useState(0);
    const [n, setN] = useState(0);

    const handleClick = ()=>{
        // n = n+1;

        setN(n+1); //setN 함수를 이용해서 n의 값 변경
        // console.log(n);
        // n의 값은 클릭할 때마다 증가하지만 콘솔 창에만 뜨고 실제 화면에는 반영되지 X
    }

    //컴포넌트 생성 시 useEffect가 한 번만 실행됨
    // useEffect(()=>{}, []);
    //특정 상태 변수(대괄호 안에 있는 변수)가 변경될 때마다 실행
    useEffect(()=>{
        console.log(n);
    }, [n]);

    return (
        <div className="flex justify-center items-top
                    w-full h-50 border border-slate-300
                    p-3">
            <div className="w-1/3 h-50 flex
                            justify-center items-start">
                <img src={imgSrc} />
            </div>
            <div className="w-2/3 h-50 flex flex-col
                            ml-5
                            justify-between items-start">
                <p className="text-2xl font-bold text-neutral-700">
                    {title}
                </p>
                <p className="text-sm text-zinc-600">
                    {content}
                </p>
                <p className='w-full text-sm text-zinc-500 text-right'>
                    <span className="text-lg font-bold cursor-pointer"
                            onClick={()=>{handleClick()}}>
                            {/* onclick={handleClick}   : 매개변수 0개, 실행할 함수 1개인 경우에만 이렇게 간소화 가능 */}
                    💙 좋아요</span>
                    <span className="text-lg font-bold ml-5">{n}</span>
                </p>
            </div>
        </div>
    )
}
