import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import OutQuery from './output';



const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});




const openai = new OpenAIApi(configuration);


const Gen = ({ DatabaseType, Query }) => {
    const [ShowOutput, SetShowOutput] = useState(false);
    const [Out, SetOut] = useState('');
    const [DoCopy, SetDoCopy] = useState(false);

    const clicked = () => {

        let a = { DatabaseType }.DatabaseType;
        let b = { Query }.Query;

        SetShowOutput(true);
        if (a === '') {
            SetOut('Enter the Database');
            console.log('ji');

        }
        else if (b === '') {
            SetOut('Enter the Statement');
            console.log('ki');
        }

        else {

            SetOut('');
            GenerateQuery();
        }
    }




    const GenerateQuery = async () => {


        let finalQuery = `Create a ${DatabaseType} request to ${Query.charAt(0).toLowerCase() + Query.slice(1)}`;
        console.log(finalQuery);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: finalQuery,
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        let final = response.data.choices[0].text;
        SetDoCopy(true);

        // if ({ DatabaseType }.DatabaseType == null) {
        //     console.log('HI');
        //     SetOut('Enter the Database');
        // }
        // else if ({ Query }.Query == null) {
        //     SetOut('Enter the query');
        // }
        // else {
        SetOut(final);
        // }

    }

    return (
        <>
            <div className="gen-btn-box">
                <div className="outline" onClick={clicked}>
                    <p className="gen-txt">GENERATE QUERY</p>
                </div>
            </div>
            {ShowOutput && <OutQuery Out={Out} DoCopy={DoCopy} />}
        </>
    );
}

export default Gen;
