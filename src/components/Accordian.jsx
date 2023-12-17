import React from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";

const PlusIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="plus-circle">
				<path
					id="Icon"
					d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
					stroke="#1F2937"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

const MinusIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="minus-circle">
				<path
					id="Icon"
					d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
					stroke="#1F2937"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

const accordionItems = [
	{
		id: 1,
		question: "Is there a free trial available?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
	{
		id: 2,
		question: "Can I change my plan later?",
		answer:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque neque doloremque!",
	},
	{
		id: 3,
		question: "What is your cancellation policy?",
		answer: "Lorem ipsum dolor sit amet.",
	},
	{
		id: 4,
		question: "Can other info be added to an invoice?",
		answer: "Lorem ipsum dolor sit amet consectetur.",
	},
	{
		id: 5,
		question: "How does billing work?",
		answer: "Lorem ipsum dolor sit amet consectetur.",
	},
	{
		id: 6,
		question: "How do I change my account email?",
		answer: "Lorem ipsum dolor sit amet consectetur.",
	},
];

export default function AccordionCustomIcon() {
	const [open, setOpen] = React.useState(0);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	return (
		<>
			{accordionItems.slice(0, 5).map((item) => (
				<Accordion
					key={item.id}
					open={open === item.id}
					icon={open === item.id ? <MinusIcon /> : <PlusIcon />}
					className="border-b border-[#EAECF0]"
				>
					<AccordionHeader
						onClick={() => handleOpen(item.id)}
						className="text-[#1F2937] text-xl font-medium border-none"
					>
						{item.question}
					</AccordionHeader>
					<AccordionBody className="text-[#6B7280] text-base font-medium">
						{item.answer}
					</AccordionBody>
				</Accordion>
			))}
			{accordionItems.slice(5, 6).map((item) => (
				<Accordion
					key={item.id}
					open={open === item.id}
					icon={open === item.id ? <MinusIcon /> : <PlusIcon />}
				>
					<AccordionHeader
						onClick={() => handleOpen(item.id)}
						className="text-[#1F2937] text-xl font-medium border-none"
					>
						{item.question}
					</AccordionHeader>
					<AccordionBody className="text-[#6B7280] text-base font-medium">
						{item.answer}
					</AccordionBody>
				</Accordion>
			))}
		</>
	);
}
