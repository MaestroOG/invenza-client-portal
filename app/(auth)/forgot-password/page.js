import RecoveryEmailForm from "@/components/recovery-email-form"

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const metadata = {
    title: "Forgot Password"
}

const ForgotPasswordPage = () => {
    return (
        <main className="h-screen w-full flex items-center justify-center bg-foreground">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Enter your email</CardTitle>
                    <CardDescription>
                        Enter your email to receive password reset link.
                    </CardDescription>
                </CardHeader>
                <RecoveryEmailForm />
            </Card>
        </main>
    )
}

export default ForgotPasswordPage