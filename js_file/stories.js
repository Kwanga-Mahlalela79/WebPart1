
/* ==========================================================
   SaniCare Org - story data
   Each story appears on story.html?id=<number>

   Story images are stored in the _images folder.
   The story.js file uses each image to display the banner.
   ========================================================== */

var STORIES = [
    {
        id: 1,
        tag: "OUTREACH VISIT",
        icon: "fa-map-marker",
        thumb: 1,
        image: "Packages.jpg",
        title: "200 care packages delivered across three community centres",
        date: "12 Sept 2026",
        location: "Mpumalanga",
        readTime: "3 min read",
        likes: 128,
        raised: 24600,
        goal: 25000,
        donors: 87,
        paragraphs: [
            "Over one weekend last month, our outreach team travelled between three community centres to hand out care packages and run short hygiene sessions. Each package held period products and other everyday hygiene essentials, packed by volunteers the week before.",
            "More than 150 girls and women attended the workshops, which covered how to care for your body, how to use different products safely, and how to talk about periods without shame. Questions were welcome, and plenty were asked.",
            "Every donation made during our last drive went directly into these packages. In keeping with our promise, the people we met stay anonymous, and nothing about them is shared without their permission.",
            "We’re already planning the next round of visits. If you’d like to help us reach more communities, you can donate using the panel beside this story, or leave a message of support below."
        ]
    },
    {
        id: 2,
        tag: "PERSONAL STORY",
        icon: "fa-heart",
        thumb: 2,
        image: "Pads.jpg",
        title: "“I didn’t know this was something I was allowed to ask for help with”",
        date: "3 Sept 2026",
        location: "Shared with permission",
        readTime: "3 min read",
        likes: 214,
        raised: 1850,
        goal: 5000,
        donors: 34,
        paragraphs: [
            "“I didn’t know this was something I was allowed to ask for help with.” Those were the first words a young woman said to one of our volunteers after receiving her first care package. She shared her story with us on the condition that her name stays private.",
            "For years she had made do with whatever she could find, and she never felt able to tell anyone. Hearing that she wasn’t alone was, in her words, as important as the package itself.",
            "She now attends our workshops and has started quietly passing on what she’s learned to girls in her neighbourhood. Stories like hers are why we keep every story anonymous by default and publish only with permission.",
            "If her story resonates with you, you can leave a comment of encouragement below. Every kind comment is read by our team."
        ]
    },
    {
        id: 3,
        tag: "EDUCATION",
        icon: "fa-graduation-cap",
        thumb: 3,
        image: "Classroom.jpg",
        title: "New hygiene workshop launched for primary schools",
        date: "27 Aug 2026",
        location: "Local primary schools",
        readTime: "3 min read",
        likes: 96,
        raised: 9200,
        goal: 12000,
        donors: 52,
        paragraphs: [
            "We’ve launched a new hygiene workshop designed for primary school girls, using simple language and plenty of room for questions. The goal is for no girl to be caught by surprise by the changes in her body, and for none to feel ashamed of them.",
            "Sessions are short, friendly and age appropriate. Girls learn what a period is, how to prepare for one, and how to keep clean and comfortable, using real examples and no embarrassment.",
            "Teachers and parents were invited to sit in on the first sessions, and several told us they wished they had had something similar growing up. We’ll keep adjusting the lesson plan based on their feedback.",
            "Your donations help us print take-home guides and provide each girl with a small starter pack. Help us bring the workshop to more schools using the donation panel beside this story."
        ]
    },
    {
        id: 4,
        tag: "DONATION UPDATE",
        icon: "fa-gift",
        thumb: 4,
        image: "Delivery.jpg",
        title: "Emergency fundraiser reaches its goal in 48 hours",
        date: "19 Aug 2026",
        location: "Flood-affected community",
        readTime: "2 min read",
        likes: 173,
        raised: 8000,
        goal: 8000,
        donors: 96,
        paragraphs: [
            "When flooding affected a nearby community, many families lost their belongings, including basic hygiene supplies. Within hours of sharing an emergency appeal on this site, donations started to arrive.",
            "In just 48 hours the appeal reached its goal, enough to pack 80 emergency hygiene kits. Donors came from across the country, and some from further afield through our PayPal, Ewallet and Payoneer options.",
            "Our team delivered the kits within the week, along with a short note letting each household know where the support had come from. As promised, we posted an update here once everything had been received.",
            "The appeal is now closed, but the need for emergency kits never fully goes away. Any donation made on this page goes toward keeping a stock ready for the next emergency."
        ]
    },
    {
        id: 5,
        tag: "COMMUNITY",
        icon: "fa-comments",
        thumb: 5,
        image: "People popart.jpg",
        title: "What our volunteers wish more people understood",
        date: "5 Aug 2026",
        location: "SaniCare Org volunteers",
        readTime: "3 min read",
        likes: 81,
        raised: 2300,
        goal: 6000,
        donors: 29,
        paragraphs: [
            "We asked three of our long-time volunteers what they wish more people understood about this work. Their answers were honest, funny and sometimes surprising.",
            "One said she wishes people knew how little it takes to change someone’s week: a single packet of pads handed over with a smile. Another said the biggest barrier isn’t cost but silence, because many girls simply don’t know who to ask.",
            "The third, who joined after attending a workshop herself, said the best part is watching nervous faces relax into laughter when everyone realises they share the same questions.",
            "If you’re thinking about volunteering, they all had the same advice: come to one outreach visit and see for yourself. You can reach us through the Contact or Enquiries pages."
        ]
    },
    {
        id: 6,
        tag: "ADVOCACY",
        icon: "fa-bullhorn",
        thumb: 6,
        image: "Phone.jpg",
        title: "Joining the call for accessible hygiene product policy",
        date: "22 Jul 2026",
        location: "Alongside partner organisations",
        readTime: "3 min read",
        likes: 142,
        raised: 4100,
        goal: 10000,
        donors: 41,
        paragraphs: [
            "Care packages help, but they’re a stopgap. We believe menstrual products should be treated as a basic necessity, available to everyone regardless of income. This month we joined other organisations calling for policy that makes that possible.",
            "Our role is to share what we see on the ground: the girls who miss school, the women who go without, and the families who must choose between hygiene products and other essentials. Real stories carry weight when decisions are made.",
            "We’ll keep you updated as the conversation moves forward, and we’ll continue to protect the identities of the people whose experiences inform our advocacy.",
            "You can support this work by sharing our stories, leaving a comment below, or donating to keep our outreach and advocacy running."
        ]
    },
    {
        id: 7,
        tag: "PARTNERSHIP",
        icon: "fa-handshake-o",
        thumb: 7,
        image: "Pharmacy.jpg",
        title: "Local pharmacy joins us as an official drop-off point",
        date: "8 Jul 2026",
        location: "Nelspruit, Mpumalanga",
        readTime: "2 min read",
        likes: 67,
        raised: 3400,
        goal: 5000,
        donors: 38,
        paragraphs: [
            "We’re delighted to announce that a local pharmacy has joined SaniCare Org as an official donation drop-off point. A clearly marked box now sits near the counter, ready to receive unopened pads, tampons and other hygiene essentials.",
            "The pharmacy team volunteered the space and will let us know when the box is full so we can collect and sort the donations. It means anyone in the area can give without having to make a special trip to us.",
            "We hope this is the first of many partnerships. If you run a business, school or community space that could host a drop-off point, we would love to hear from you.",
            "Monetary donations are welcome too. Use the panel beside this story to chip in, or get in touch through our Enquiries page to discuss a partnership."
        ]
    },
    {
        id: 8,
        tag: "HEALTH & MYTHS",
        icon: "fa-lightbulb-o",
        thumb: 8,
        image: "News.jpg",
        title: "Five period myths we hear on almost every outreach visit",
        date: "24 Jun 2026",
        location: "Community workshops",
        readTime: "4 min read",
        likes: 189,
        raised: 1200,
        goal: 4000,
        donors: 18,
        paragraphs: [
            "On almost every outreach visit, we hear the same myths, passed down with the best intentions and very little evidence. Clearing them up is a big part of our workshops.",
            "Some of the most common: that you shouldn’t wash your hair or bathe during your period, that periods are something to hide, that cramps mean you’re being dramatic, that you can’t exercise, and that talking about it is rude.",
            "None of these are true. Periods are a normal, healthy part of life, and taking care of your body during one means staying clean, comfortable and informed. We explain this gently, and with plenty of room for questions.",
            "If you’d like to help us keep these workshops going, you can donate toward the next session, or leave a comment below with a myth you’ve heard."
        ]
    },
    {
        id: 9,
        tag: "FUNDRAISER",
        icon: "fa-flag-checkered",
        thumb: 9,
        image: "Runclub.jpg",
        title: "Community fun run raises funds for hundreds of care packages",
        date: "10 Jun 2026",
        location: "Nelspruit, Mpumalanga",
        readTime: "3 min read",
        likes: 154,
        raised: 14500,
        goal: 15000,
        donors: 120,
        paragraphs: [
            "On a bright Saturday morning, volunteers, families and learners from local schools lined up at the start of our first community fun run. Some ran, some walked, and a few were carried by excited little ones.",
            "Every registration and every sponsorship pledge went toward care packages. By the time the last runner crossed the finish line, the community had raised enough to fund hundreds of packages.",
            "Beyond the money, it was a joyful reminder that this cause belongs to everyone. Boys and men turned up in numbers too, which we loved to see.",
            "We’re planning to make the run an annual event. If you’d like to sponsor next year’s run or give toward this year’s total, use the panel beside this story."
        ]
    },
    {
        id: 10,
        tag: "CARE PACKAGES",
        icon: "fa-leaf",
        thumb: 10,
        image: "3Rs.jpg",
        title: "Why we are moving toward gentler, reusable options",
        date: "28 May 2026",
        location: "SaniCare Org team",
        readTime: "3 min read",
        likes: 76,
        raised: 6750,
        goal: 9000,
        donors: 44,
        paragraphs: [
            "Concerns about what goes into some commercial sanitary products are one reason we’ve started to move toward gentler options for our care packages.",
            "We look at three things: how safe and comfortable a product is, how long it lasts, and how easy it is to use properly. Reusable options can save families money over time, but only if people feel confident using and caring for them.",
            "That’s why every package comes with a simple guide and a chance to ask questions at one of our workshops. We never want a product to arrive without the knowledge to use it.",
            "Switching to better products costs more upfront. Your donations help us make the change without cutting back on the number of packages we deliver."
        ]
    },
    {
        id: 11,
        tag: "BEHIND THE SCENES",
        icon: "fa-archive",
        thumb: 11,
        image: "GIft.jpg",
        title: "Packing day: how a care package comes together",
        date: "14 May 2026",
        location: "SaniCare Org packing day",
        readTime: "3 min read",
        likes: 58,
        raised: 2750,
        goal: 6000,
        donors: 23,
        paragraphs: [
            "Every care package starts the same way: a long table, a lot of boxes and a room full of volunteers with music playing. This month we invited a few supporters to join our packing day and see how it all comes together.",
            "Products arrive from donations and from purchases made with funds raised on this site. Volunteers sort them, check every item, and pack each package with period products, other hygiene essentials and a short guide on caring for your body.",
            "Every package is packed the same way, whether it’s going to a school, a community centre or a single household, so that no one receives less than anyone else. Packing day is also where many of our volunteers first meet one another, and plenty of friendships have started over the sorting table.",
            "Packing days are open to anyone who’d like to help. Use the Enquiries page to ask about the next one, or donate toward the next batch using the panel beside this story."
        ]
    },
    {
        id: 12,
        tag: "YOUTH",
        icon: "fa-star",
        thumb: 12,
        image: "School.jpg",
        title: "Learners start their own pad drive at school",
        date: "30 Apr 2026",
        location: "Local school",
        readTime: "3 min read",
        likes: 119,
        raised: 3900,
        goal: 5000,
        donors: 47,
        paragraphs: [
            "A group of learners at a local school came to us with an idea: they wanted to run a pad drive of their own. With a teacher’s support, they set up a collection box in the school hall and made posters to explain why it mattered.",
            "Within a few weeks the box was full. Classmates brought in unopened packets, and some families sent in donations through the school. The learners counted and sorted everything themselves before handing it over to us.",
            "What struck our team most was how openly the learners talked about it. They answered questions from younger pupils without any embarrassment, which is exactly the kind of conversation we hope to see more of.",
            "We’re working with the school on a follow-up workshop. If you’d like to support learner-led projects like this one, you can donate using the panel beside this story, or leave a comment of encouragement below."
        ]
    }
];

/* Sample comments shown under the stories (placeholders). */
var SAMPLE_COMMENTS = [
    {
        name: "Thandi M.",
        text: "Thank you for doing this work. Every girl deserves to feel cared for."
    },
    {
        name: "Anonymous",
        text: "I shared this with my sister. We’re going to organise a small collection at work."
    },
    {
        name: "Lerato K.",
        text: "This is exactly the kind of conversation we need to normalise."
    },
    {
        name: "Sipho D.",
        text: "Proud to support. Is there a way to volunteer on weekends?"
    },
    {
        name: "Naledi P.",
        text: "I donated this morning. Keep going, you are making a real difference!"
    },
    {
        name: "Anonymous",
        text: "Reading this made my day. Thank you for telling these stories with such care."
    },
    {
        name: "Zanele B.",
        text: "My school would love a workshop like this. How do we get in touch?"
    },
    {
        name: "Mpho R.",
        text: "Sharing this everywhere. More people need to see it."
    }
];
