import { get, post, put } from 'axios';

getData = async (url) => {
    let resp = await get(url);

    dispatch({
        type: 'ADD_TO_USERS',
        item: resp,
    });

};

postData = async(url, body) => {
    await post(url, body);
    // await getData(url);
}

putData = async(url, body) => {
    await put(url, body);
    // await getData(url);
}