import {NextApiResponse} from "next";
import {NextResponse} from "next/server";
import {results} from "@/app/api/quizResults/results";


export async function GET(
    req: Request,
    res: NextApiResponse
) {
    res.statusCode = 200;
    return NextResponse.json(results);
}

export async function POST(
    req: Request,
    res: NextApiResponse
) {
    const data = await req.json();
    for(const [key, value] of Object.entries(data)) {
        results[key] = value;
    }
    res.statusCode = 204;
    return NextResponse.json(data);
}
