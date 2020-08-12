const faqs = [
    {
        answer: 'No.',
        category: 'General',
        qno: '1',
        question: 'Are you official?',
        temp: 'temp',
    },
    {
        answer:
            'We are using state bulletins and official handles to update our numbers. The data is validated by a group of volunteers and published into a Google sheet and an API. API is available for all at <a href="https://api.covid19india.org" target="_blank">api.covid19india.org</a>. We would love it if you can use this data in the fight against this virus. The source <a href="https://telegra.ph/Covid-19-Sources-03-19" target="_blank">list is here.</a>\n\n',
        category: 'General',
        qno: '2',
        question: 'What are your sources? How is the data gathered for this project?',
    },
    {
        answer:
            'MoHFW updates the data at a scheduled time. However, we update them based on state press bulletins, official (CM, Health M) handles, PBI, Press Trust of India, ANI reports. These are generally more recent.',
        category: 'Data',
        qno: '3',
        question: 'Why does covid19india.org have difference in numbers compared to MOHFW website?',
    },
    {
        answer:
            'All the data is available through an API for further analysis and development here : <a href="https://api.covid19india.org" target="_blank">api.covid19india.org</a>',
        category: 'General',
        qno: '4',
        question: 'Where can I find the data for this?',
    },
    {
        answer:
            "We are a group of dedicated volunteers who curate and verify the data coming from several sources. We extract the details, like a patient's relationship with other patients to identify local and community transmissions, travel history and status. We never collect or expose any personally identifiable data regarding the patients.",
        category: 'General',
        qno: '5',
        question: 'Who are you?',
    },
    {
        answer:
            "Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.",
        category: 'General',
        qno: '6',
        question: 'Why are you guys putting in time and resources to do this while not gaining a single penny from it?',
    },
];

faqs.map((faq, idx) => {
    faq.temp = 'temp';
    return faq;
});

let i;
let s = 'demo';
let result = 'omed';

for (i = 0; i < faqs.length; i++) {
    let ch = s.charAt(i);
    console.log(ch);
}
