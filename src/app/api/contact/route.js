import Contact from "@/models/Contact"
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const POST = async (request) => {

    const { name, email, phone } = await request.json();
    await connect();

    try {
        const contact = new Contact({
            name,
            email,
            phone,
        })
        await contact.save();
        return new NextResponse("success", { status: 201 })
    } catch (error) {
        return new NextResponse("Failed!", { status: 500 })
    }
}