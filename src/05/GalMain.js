// 기말고사 출제 유형
// import React from 'react'
import { useState, useEffect, useRef } from "react"
import GalCard from "./GalCard";


export default function GalMain() {

    //state 변수
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const inRef = useRef(); //키워드를 입력받을 때 input 박스의 값에 접근

    //데이터 가져오기
    const getData = (kw) => {
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?' ;
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = url + '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A';
        url = url + `&keyword=${kw}&_type=json`;

        console.log(url);
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.response.body.items.item)) //카톡 참고
        ;
    }

    //확인 버튼
    const handleClick = (e)=>{
        e.preventDefault();
        let kw = encodeURI(inRef.current.value);
        getData(kw);
    }

    //처음 실행될 때 한 번
    useEffect(() => {
        //encodeURI('한글')
        //키워드가 한글일 경우 인코딩 필요-API 제공 페이지에 있는 주의사항
        //let kw = encodeURI('부산역');
        //getData(kw);
    }, []);

    //tData 변경되었을 때
    useEffect(()=>{
        let tm = tdata.map(item => <GalCard key={item.galContentId}
                                            galTitle = {item.galTitle}
                                            galWebImageUrl = {item.galWebImageUrl} />);
        setTags(tm);
    }, [tdata]);

    return (
        <div className='flex flex-col h-full'>
            <form className="w-full flex m-5">
                <input type='text' id='txt1' 
                       ref={inRef}
                       className='placeholder="키워드 입력" text-gray-600'/>
                <button className='bg-gray-600 text-white text-lg p-5'
                        onClick={handleClick}>
                            확인</button>
            </form>
            <div className='h-full text-gray-600
                            grid grid-cols-1 gap-4
                            md:grid-cols-3'>
                {tags}
            </div>
        </div>
    )
}
