import axios from "axios";

const getCurency = async () => {
    const response = await axios.get('http://api.exchangerate.host/list?access_key=48d5bf9d159bc85d1c1c0c7acc3be6b6');
    return Object.keys(response.data.currencies);
} 

const changeCurency = async (from, to, amount) => {
    const response = await axios.get(`http://api.exchangerate.host/convert?access_key=48d5bf9d159bc85d1c1c0c7acc3be6b6&from=${from}&to=${to}&amount=${amount}`)
    console.log(response);

}

export {
    getCurency,
    changeCurency
}