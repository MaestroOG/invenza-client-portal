"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { SignUpUser } from "@/action/user";
import { useActionState, useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image";
import { Progress } from "./ui/progress";

export function SignUpForm({
    className,
    ...props
}) {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        name: "",
        position: "",
        phoneNum: "",
        contactEmail: "",
        companyName: "",
        abn: "",
        companyWebsite: "",
        businessAddress: "",
        yearsInBiz: "",
        numOfActiveClients: "",
        socialMediaLinks: "",
        primaryServices: "",
        industriesWorkWith: "",
        regionsServe: "",
        serviceModel: "retainer-based",
        monthlyProjectVolume: "",
        isUsingWhiteLabelProvider: "yes",
        challengeDetail: "",
    });

    const [message, formAction, isPending] = useActionState(SignUpUser.bind(null, formValues), { err: "", success: false });
    const [open, setOpen] = useState(false);



    // Handle input/textarea changes
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // Handle radio button change
    const handleRadioChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const [step, setStep] = useState(30);

    const nextStep = () => setStep((prev) => prev + 30);
    const prevStep = () => setStep((prev) => prev - 30);

    useEffect(() => {
        if (message?.success) {
            setOpen(true)
        }
    }, [message])
    return (
        <>
            <form action={formAction} className={cn("flex flex-col gap-6", className)} {...props}>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold text-background">Become A Partner</h1>
                    <p className="text-muted-background text-sm text-balance">
                        Enter your information below to become a partner
                    </p>
                </div>

                <Progress value={step} />


                <div className="grid gap-6">
                    {step === 30 && (
                        <>
                            {/* Main Credentials */}


                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="email" className={'text-background'}>Email</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="email" type="email" name="email" value={formValues.email} onChange={handleChange} required className={'border border-gray-300 text-background'} />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="password" className={'text-background'}>Password</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="password" name="password" type="password" value={formValues.password} onChange={handleChange} required className={'border border-gray-300 text-background'} />
                            </div>

                            {/* Contact Information */}

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="name" className={'text-background'}>Primary Contact Name</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="name" type="text" name="name" value={formValues.name} onChange={handleChange} required className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="position" className={'text-background'}>Position/Title</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="position" type="text" name="position" value={formValues.position} onChange={handleChange} required className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="phoneNum" className={'text-background'}>Phone Number</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="phoneNum" type="text" value={formValues.phoneNum} onChange={handleChange} name="phoneNum" required className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="contactEmail" className={'text-background'}>Accounts Contact Email</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="contactEmail" type="email" value={formValues.contactEmail} onChange={handleChange} name="contactEmail" required className={'border border-gray-300 text-background'} />
                            </div>
                        </>
                    )}

                    {step === 60 && (
                        <>
                            {/* Company Details */}

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="companyName" className={'text-background'}>Company Name</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="companyName" type="text" value={formValues.companyName} onChange={handleChange} name="companyName" className={'border border-gray-300 text-background'} required />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="abn" className={'text-background'}>ABN (Australian Business Number)</Label>
                                    {/* <span className="text-red">*</span> */}
                                </div>
                                <Input id="abn" type="number" value={formValues.abn} onChange={handleChange} name="abn" className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="companyWebsite" className={'text-background'}>Company Website (Add https:// in front of the URL)</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="companyWebsite" value={formValues.companyWebsite} onChange={handleChange} type="url" name="companyWebsite" required className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="businessAddress" className={'text-background'}>Business Address</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="businessAddress" type="text" value={formValues.businessAddress} onChange={handleChange} name="businessAddress" required className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="yearsInBiz" className={'text-background'}>Years in Business</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="yearsInBiz" type="number" value={formValues.yearsInBiz} onChange={handleChange} name="yearsInBiz" required className={'border border-gray-300 text-background'} />
                            </div>

                            {/* <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="numOfActiveClients" className={'text-background'}>Approximate number of active clients</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Input id="numOfActiveClients" type="number" value={formValues.numOfActiveClients} onChange={handleChange} name="numOfActiveClients" required className={'border border-gray-300 text-background'} />
                            </div> */}

                            <div className="grid gap-3">
                                <Label htmlFor="socialMediaLinks" className={'text-background'}>Social Media Links (if applicable)</Label>
                                <Textarea id="socialMediaLinks" value={formValues.socialMediaLinks} onChange={handleChange} name="socialMediaLinks" className={'border border-gray-300 text-background'} />
                            </div>

                            {/* <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label className={'text-background'}>Company Structure</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <RadioGroup name="companyStructure" value={formValues.companyStructure} onValueChange={(value) => setFormValues(prev => ({
                                    ...prev,
                                    companyStructure: value
                                }))}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="sole-trader" id="sole-trader" />
                                        <Label className={'font-normal text-background'} htmlFor="sole-trader">Sole Trader</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="partner-ship" id="partner-ship" />
                                        <Label className={'font-normal text-background'} htmlFor="partner-ship">Partnership</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="pty-ltd" id="pty-ltd" />
                                        <Label className={'font-normal text-background'} htmlFor="pty-ltd">Pty Ltd.</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="other" id="other" />
                                        <Label className={'font-normal text-background'} htmlFor="other">Other</Label>
                                    </div>
                                </RadioGroup>
                            </div> */}
                        </>
                    )}


                    {step === 90 && (
                        <>
                            {/* Market and Services Information */}

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="primaryServices" className={'text-background'}>Primary Services Your Company Offers</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Textarea id="primaryServices" value={formValues.primaryServices} onChange={handleChange} name="primaryServices" required className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="industriesWorkWith" className={'text-background'}>Industries You Commonly Work With</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Textarea id="industriesWorkWith" value={formValues.industriesWorkWith} onChange={handleChange} name="industriesWorkWith" required className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-1">
                                    <Label htmlFor="regionsServe" className={'text-background'}>Regions You Serve</Label>
                                    <span className="text-red">*</span>
                                </div>
                                <Textarea id="regionsServe" value={formValues.regionsServe} onChange={handleChange} name="regionsServe" required className={'border border-gray-300 text-background'} />
                            </div>

                            <div className="grid gap-3">
                                <Label className={'text-background'}>Typical Service Model</Label>
                                <RadioGroup name="serviceModel" value={formValues.serviceModel} onValueChange={(value) => setFormValues(prev => ({
                                    ...prev,
                                    serviceModel: value
                                }))}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="retainer-based" id="retainer-based" />
                                        <Label className={'font-normal text-background'} htmlFor="retainer-based">Retainer Based</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="project-based" id="project-based" />
                                        <Label className={'font-normal text-background'} htmlFor="project-based">Project Based</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="project-based" id="project-based" />
                                        <Label className={'font-normal text-background'} htmlFor="product-based">Product Based</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="all" id="all" />
                                        <Label className={'font-normal text-background'} htmlFor="all">All</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* <div className="grid gap-3">
                                <Label htmlFor="monthlyProjectVolume" className={'text-background'}>Anticipated Monthly Project Volume for Invenza (Optional)</Label>
                                <Input id="monthlyProjectVolume" value={formValues.monthlyProjectVolume} onChange={handleChange} type="text" name="monthlyProjectVolume" className={'border border-gray-300 text-background'} />
                            </div> */}

                            <div className="grid gap-3">
                                <Label className={'text-background'}>Do you currently use any other marketing agency?</Label>
                                <RadioGroup name="isUsingWhiteLabelProvider" value={formValues.isUsingWhiteLabelProvider} onValueChange={(value) => setFormValues(prev => ({
                                    ...prev,
                                    isUsingWhiteLabelProvider: value
                                }))}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="yes" />
                                        <Label className={'font-normal text-background'} htmlFor="yes">Yes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="no" />
                                        <Label className={'font-normal text-background'} htmlFor="no">No</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="challengeDetail" className={'text-background'}>If yes, what challenges have you faced?</Label>
                                <Textarea id="challengeDetail" value={formValues.challengeDetail} onChange={handleChange} name="challengeDetail" required={formValues.isUsingWhiteLabelProvider === 'yes' ? true : false} className={'border border-gray-300 text-background'} />
                            </div>
                        </>
                    )}




                    {/* Navigation buttons */}
                    <div className="mt-6 flex justify-between">
                        {step > 30 && (
                            <Button
                                type="button"
                                variant={"secondary"}
                                onClick={prevStep}
                                className="px-4 py-2 rounded"
                            >
                                Previous
                            </Button>
                        )}

                        {step < 90 ? (
                            <Button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto px-4 py-2 rounded"
                            >
                                Next
                            </Button>
                        ) : (
                            <Button disabled={isPending} type="submit" className="cursor-pointer">
                                Apply to become a partner
                            </Button>
                        )}


                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogContent>
                                <DialogHeader className={'flex items-center justify-center flex-col gap-3'}>
                                    <DialogTitle><Image width={100} height={100} src={'/check-circle.svg'} alt="check-circle" /></DialogTitle>
                                    <DialogDescription className={'text-lg'}>
                                        Thanks for signing up! Your request email has been sent to the admin team. You’ll be notified once it’s reviewed.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                    {message?.err && <div className="text-center text-red font-bold text-xl">{message?.err}</div>}
                    <div className="text-center text-sm text-background">
                        Already a user?{" "}
                        <Link href="/login" className="underline underline-offset-4">
                            Log In
                        </Link>
                    </div>
                </div>
            </form>

        </>
    );
}
