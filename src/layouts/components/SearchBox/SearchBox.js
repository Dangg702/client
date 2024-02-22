import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Input } from 'antd';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import * as getStudentService from '~/services/searchServices';


const { Search } = Input;

const cx = classNames.bind(styles);

function SearchBox() {
    const [studentData, setStudentData] = useState({});
    const [searchId, setSearchId] = useState('');

    const inputRef = useRef();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getStudentService.search(20018821);
            setStudentData(result);
        };
        fetchApi();
    }, [searchId]);

    const onSearch = (value, _e, info) => {
        setSearchId(value);
        console.log(searchId);
    };
    return (
        <>
            {/* Search box */}
            <Search
                ref={inputRef}
                placeholder="input search id"
                allowClear
                onSearch={onSearch}
                size="large"
                style={{
                    width: 650,
                }}
            />  
        </>
    );
}

export default SearchBox;
