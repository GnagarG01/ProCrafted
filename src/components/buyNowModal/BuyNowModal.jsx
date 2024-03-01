/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";
import Razorpay from "razorpay";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    // Function to handle payment using Razorpay
    const handlePayment = async () => {
        const options = {
            key: 'rzp_test_5EXLDL9LJbGgFE', // Your Razorpay Key Id
            amount: 100, // Amount in smallest currency unit (e.g., cents for USD, paise for INR)
            currency: "INR",
            name: "ProCrafted",
            description: "Purchase Description",
            image: "https://example.com/your_logo.png",
            order_id: "order_rcptid_11", // Replace with your order ID generated by your backend
            handler: async (response) => {
                // Handle payment success
                console.log(response);
                // Call your buyNowFunction here or any other action after successful payment
                await buyNowFunction();
            },
            prefill: {
                name: addressInfo.name,
                email: "procraftedteam@gmail.com", // Optional email
                contact: addressInfo.mobileNumber // Optional phone number
            },
            notes: {
                address: addressInfo.address,
                pincode: addressInfo.pincode
            },
            theme: {
                color: "#3399cc"
            }
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
            >
                Buy now
            </Button>
            <Dialog open={open} handler={handleOpen} className=" bg-pink-50">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Enter your name'
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Enter your address'
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })
                            }}
                            placeholder='Enter your pincode'
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 text-pink-600 placeholder-pink-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })
                            }}
                            placeholder='Enter your mobileNumber'
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>

                    <div className="">
                        <Button

                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Buy now
                        </Button>
                        <Dialog open={open} handler={handleOpen} className=" bg-pink-50">
                <DialogBody className="">
                    {/* Your existing address form inputs */}
                    {/* ... */}
                    <div className="">
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                handlePayment(); // Call handlePayment function when "Buy Now" button is clicked
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Buy now
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        
                    </div>

                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;
