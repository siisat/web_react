// js 파일명 시작은 대문자로

import MyCom from './MyCom';

function Hello() { //function은 return문 하나를 가지고
    const name = 'PNU';
    
    return( //return문은 아래에 태그 한 개만! 가져야 함
        //fragment tag : return문 아래 태그 하나만 놓기 위해 전체 태그들을 묶어주는 기능만 함
        <>
        <div className='hellodiv'>
            {name}님 안녕하세요
        </div>
        <div>
            <MyCom />
        </div>
        </>
    );
}

export default Hello ;