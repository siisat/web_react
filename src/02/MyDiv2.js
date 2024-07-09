import MyDiv3 from './MyDiv3';

// function MyDiv2(probs) {
    // MyDiv1의 여러 변수를 받아올 때는 1. probs를 매개변수로 사용
function MyDiv2({d1, d2, d3}) {
    // 2. MyDiv1에서 정의한 속성이름 그대로 매개변수로 사용
    // {속성, 속성, 속성, ...}  중괄호로 묶기 필수

    return (
        <div className='flex flex-col justify-start items-center
                        w-4/5 h-4/5 bg-blue-400 text-lg text-yellow-100
                        p-2'>
            <p className="w-full h-8 text-left p-2 mb-4">
                {d1} - {d2}
                {/* {probs.속성이름} 으로 변수 사용 */}
            </p>
            {/* 1. */}
            {/* <MyDiv3 dd1={probs.d1} dd2={probs.d2} dd3={probs.d3}/>  */}
            
            {/* 2. */}
            <MyDiv3 dd1={d1} dd2={d2} dd3={d3}/>
        </div>
    );
}

export default MyDiv2 ;