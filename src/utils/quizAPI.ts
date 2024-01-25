import axios from "axios";
import {BASE_DEV_URL} from "@/utils/constants";

const url = '/api/quizResults';

export async function sendQuizData(body: any) {
    try {
        const res = await axios.post(url, body);

        return res.data;
    } catch (e) {

    }
}

export async function getQuizData() {
    try {
        const res = await axios.get(url);

        return res.data;
    } catch (e) {
        console.error(e);
    }
}