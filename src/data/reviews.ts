export interface Review {
  customerName: string;
  text: string;
  rating: number;
  serviceType: string;
  featured?: boolean;
}

export const reviews: Review[] = [
  {
    customerName: "Jack Sutliff",
    text: "Luke did a great job on my company van couldn't be happier with the results would recommend to anyone and everyone. ",
    rating: 5,
    serviceType: "Full Detail",
  },
  {
    customerName: "Lukha Singh",
    text: "Luke goes above and beyond for his customers and takes great pride in his work.",
    rating: 5,
    serviceType: "Full Detail",
  },
  {
    customerName: "Mark Tristem",
    text: "My 6 year old black car had marks on it that I thought would never come out but after Luke worked his magic you could shave in the gloss reflection he produced!",
    rating: 5,
    serviceType: "Full Detail",
    featured: true,
  },
  {
    customerName: "Susan Bevan",
    text: "Luke worked miracles on my 20 yr old dull black civic. He is a perfectionist ,taking great care and attention to detail.",
    rating: 5,
    serviceType: "Full Detail",
  },
  {
    customerName: "Peter P",
    text: "The attention to detail is remarkable, leaving no spot untouched. He is friendly, professional, and genuinely cares about the results he delivers.",
    rating: 5,
    serviceType: "Full Detail",
  },
];
