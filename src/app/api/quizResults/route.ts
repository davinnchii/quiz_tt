import {NextApiResponse} from "next";
import {NextResponse} from "next/server";

export async function POST(
    req: Request,
    res: NextApiResponse
) {
    const data = await req.json();
    res.statusCode = 200;
    return NextResponse.json(data);
}
