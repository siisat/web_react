import MyDiv2 from './MyDiv2';

function MyDiv() {
    // 여기서 정의한 변수를 MyDiv2, 3으로 전달하기
    const n1 = 'MyDiv1';
    const n2 = 'MyDiv2';
    const n3 = 'MyDiv3';

    return (
        <div className='flex flex-col justify-start items-center
                        w-1/2 h-1/3 bg-blue-800 text-xl text-yellow-200
                        p-2'>
            <p className="w-full h-8 text-left p-2 mb-4">
                {n1}
                {/* 변수를 사용할 때는 {}로 묶기 */}
            </p>
            <MyDiv2 d1={n1} d2={n2} d3={n3}/>
            {/* MyDiv2로 변수 n1~n3을 전달하는 방법. d1~3이 속성 이름. */}
        </div>
    );
}

export default MyDiv ;