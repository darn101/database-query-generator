import { Box, InputBase } from '@mui/material'
import { styled } from '@mui/material';
import { useState } from 'react';
import Select from 'react-select';
import Gen from './gen';
import '../App.css'
import Header from './header';



const Home = () => {

    const placeholder = "Enter your Database Query.\n \n  \n \nFor example, find all the users who live in Ghaziabad and have over 1000 credits.";
    const options = [
        { value: 'MongoDB', label: 'MongoDB' },
        { value: 'SQL', label: 'SQL' },
        { value: 'PostgressSQL', label: 'PostgressSQL' },
        { value: 'MariaDB', label: 'MariaDB' },
        { value: 'Firebase', label: 'Firebase' },
        { value: 'Prisma', label: 'Prisma' },
        { value: 'DynamoDB', label: 'DynamoDB' }
    ];

    const [DatabaseType, SetDatabaseType] = useState('');
    const [Query, SetQuery] = useState('');

    const DbSelect = (e) => {
        SetDatabaseType(e.value);
    }

    const GetQuery = (e) => {
        SetQuery(e.target.value);
    }

    return (
        <>
            <div className='full-gen-box'>
                <div className="head">DBQ</div>
                <div className='select-box'>
                    <Select placeholder="Enter Your Database" options={options} className='sel-txt' onChange={(e) => DbSelect(e)} />
                </div>
                <div className='query-box'>
                    <Inputquery className='q-box' placeholder={placeholder}
                        multiline rows={6} onChange={(e) => GetQuery(e)} >
                    </Inputquery>
                </div>
            </div>
            <Gen DatabaseType={DatabaseType} Query={Query} />
        </>
    );
}

export default Home;

const SelectBox = styled(Box)`
 margin-left: 42%;
 margin-top: 2.2%;
width : 20%;
`

const Querybox = styled(Box)`
background-color: #FFF;
 position : relative;
 width : 24%;
 margin-left: 40%;
 margin-top: 3%;
 height: 14%;
 font-family: Staatliches&di;
 font-weigth : 500;
`
const Inputquery = styled(InputBase)`
width: 100%;
color: black;
font-size: 1rem;
padding-left: 1.3%;
padding-right: 1.3%;
font-weight: 700;
`


