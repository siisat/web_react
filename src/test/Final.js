//202012503 권세린

import { useState, useEffect, useRef } from "react"
import FinalCard from './FinalCard';


export default function Final() {

    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const inRef = useRef(); //키워드를 입력받을 때 input 박스의 값에 접근

    //날짜가 선택되었을 때
    const handleSetDt = (e) => {
        e.preventDefault();
        console.log(inRef.current.value)
        getData();
    }

    //데이터 가져오기-날짜별
    const getData = () => {
        let tmDt = inRef.current.value.replaceAll('-','');
        
        let url = 'https://apis.data.go.kr/6260000/DailyWaterQualityService/cleanWaterQualityDetail?';
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = url + '&pageNo=1&numOfRows=12';
        url = url + `&pageNo=1&numOfRows=12&argDate=${tmDt}&resultType=json`;

        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.cleanWaterQualityDetail.body.items.item))
        ;
        
    }

    //tData 변경되었을 때
    useEffect(()=>{
        if (tdata.length == 0) {
            return;
        }
        
        let tm = tdata.map(item => <FinalCard key={item.argDate}
                                            cwGroupNm = {item.cwGroupNm}
                                            inspIemNm1 = {item.inspIemNm1}
                                            inspWqbs = {item.inspWqbs}
                                            mjValue = {item.mjValue}
                                            buValue = {item.buValue}
                                            hmValue = {item.hmValue}
                                            dsValue = {item.dsValue} />);
        setTags(tm);
    }, [tdata]);

    return (
        <div className='flex flex-col h-full'>

            {/* 날짜 선택란 */}
            <form className="flex justify-end items-center text-lg mb-2">
                <label htmlFor="dt" className="text-sm mr-5 font-bold text-gray-500">
                    날짜 선택
                </label>
                <input type='date' id='dt'
                       ref={inRef}
                       onChange={handleSetDt}
                       className="bg-gray-50 border border-gray-300 text-gray-500 text-sm
                                 rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5"/>
            </form>

            <div className='h-full text-gray-600
                            grid grid-cols-1 gap-4
                            md:grid-cols-2 lg:grid-cols-3'>
                {tags}
            </div>
        </div>
    )
}
