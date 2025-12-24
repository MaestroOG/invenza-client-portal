'use server';

import { generateRejectEmailTemplate } from "@/htmlemailtemplates/emailTemplates";
import { connectDB } from "@/lib/mongodb";
import PendingUser from "@/models/PendingUser";
import RejectedUser from "@/models/RejectedUser";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import nodemailer from 'nodemailer';


export async function rejectUser(prevState, formData) {
    const userId = formData.get('userId');

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        console.error("Invalid user ID");
        return { err: "Invalid user ID" };
    }

    try {
        await connectDB();
        const user = await PendingUser.findById(userId);
        if (!user) {
            return { err: "User not found" };
        }

        const userData = user.toObject();
        delete userData._id;

        await RejectedUser.create(userData);

        // Delete the pending user
        await PendingUser.findByIdAndDelete(userId);

        // Optionally, you can send a rejection email here

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: String(process.env.SMTP_USER),
                pass: String(process.env.SMTP_PASS)
            }
        })
        const html = generateRejectEmailTemplate();

        await transporter.sendMail({
            from: '"Invenza" <admin@invenzadigitalmarketing.com>',
            to: ['admin@invenzadigitalmarketing.com', user?.email, 'clients@invenzadigitalmarketing.com'],
            subject: "Partnership Application Update – Rejected",
            html,
        })

        revalidatePath('/', "layout");
    } catch (error) {
        console.error(error.message)
        return { err: "Failed to reject user" };
    }
}